import React, { useRef, useState } from "react";
import p11 from "../../images/i1.gif";
import p2 from "../../images/i2.gif";
import p3 from "../../images/i3.gif";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { REACT_APP_API_ENDPOINT } = process.env;
const ContactForm = () => {
  const navigate = useNavigate();
  const selectedFile = useRef();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Code, setCode] = useState("");
  const [Phone, setPhone] = useState("");
  const [Service, setService] = useState("");
  const [Project, setProject] = useState("");
  const [Document, setDocument] = useState("");
 
  
  const submitNow1 = (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way.

    const url = 'https://www.omkatech.com/Contact.php';

    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Email", Email);
    formData.append("Code", Code);

    formData.append("Phone", Phone);
    formData.append("Service", Service);
    formData.append("Project", Project);
    formData.append("Pdf", selectedFile.current.files[0]);

    // Log the formData before making the request
    console.log(formData);

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          // Handle success, e.g., show a success message or redirect
        } else {
          // Handle errors, e.g., show an error message
        }
      })
      .catch((error) => {
        // Handle network or other errors
      });

    setCode("");
    setName("");
    setEmail("");
    setService("");
    setPhone("");
    setDocument("");
    setProject("");
  };





  return (
    <div>
      <div class="container-xxl py-5" style={{ marginTop: "-100px" }}>
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 class=" bg-white  text-primary " id="whoweare">
              Contact Us
            </h6>
            <h2 class="display-6 mb-4" id="whoweare">
              Get In Touch
            </h2>
          </div>
          <form style={{ marginTop: "-50px" }} onSubmit={submitNow1}>
            <div class="row g-4">
              <section class="contact-page-sec">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div
                        class="contact-page-form"
                        method="post"
                        style={{ marginTop: "-50px" }}
                      >
                        <div class="row">
                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-input-field">
                              <input
                                type="text"
                                placeholder="Your Name"
                                name="Name"
                                value={Name}
                                onChange={(e) => {
                                  setName(e.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-input-field">
                              <input
                                type="email"
                                placeholder="E-mail"
                                name="Email"
                                required
                                value={Email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-input-field">
                              <input
                                type="text"
                                placeholder="Country Code"
                                name="Name"
                                value={Code}
                                onChange={(e) => {
                                  setCode(e.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-input-field">
                              <input
                                type="number"
                                placeholder="Phone Number"
                                value={Phone}
                                onChange={(e) => {
                                  setPhone(e.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>

                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-input-field">
                              <select
                                placeholder="Select Service"
                                value={Service}
                                onChange={(e) => {
                                  setService(e.target.value);
                                }}
                              >
                                <option value="" disabled selected>
                                  Select Service
                                </option>
                                <option value="Web Development">
                                  {" "}
                                  Website Development
                                </option>
                                <option value="Mobile App Development">
                                  {" "}
                                  Mobile App Development
                                </option>
                                <option value="Designing">
                                  Graphics & UI/UX
                                </option>
                                <option value=" Social Media Marketing">
                                  {" "}
                                  Growth & Marketing
                                </option>
                                <option value="Software Development">
                                  {" "}
                                  Enterprise Software Solution
                                </option>
                                <option value="E-Commerce Web & App">
                                  {" "}
                                  E-Commerce Web & App
                                </option>
                                <option value="CMS DESIGN & DEVELOPMENT">
                                  {" "}
                                  CMS DESIGN & DEVELOPMENT
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="single-input-field">
                              <input
                                id="pdf"
                                type="file"
                                placeholder="Subject"
                                name="subject"
                                ref={selectedFile}
                                value={Document}
                                onChange={(e) => {
                                  setDocument(e.target.value);
                                }}
                                required
                              />
                            </div>
                          </div>
                          <br />
                          <br />
                          <div class="col-md-12 message-input">
                            <div class="single-input-field">
                              <textarea
                                placeholder="Write Your Project Description"
                                name="Project"
                                value={Project}
                                onChange={(e) => {
                                  setProject(e.target.value);
                                }}
                                required
                              ></textarea>
                            </div>
                          </div>
                        
                          <center>
                            {" "}
                            <button
                              class="btn btn-primary rounded-pill py-3 px-5"
                         type="submit"
                              style={{
                                width: "15%",
                                height: "35px",
                                animation: "pulse 1.1s ease infinite",
                              }}
                              rel="noopener noreferrer"
                              id="knowmore4"
                            
                            >
                              
                                {" "}
                                <center id="homeKnow3" style={{color:"white"}}>Submit Now</center>
                            
                            </button>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
             
                  <div class="row">
                    <div class="col-md-4" id="conrow">
                      <div class="c1">
                        <div class="img">
                          <img src={p11} id="dc1" alt="text" />
                        </div>
                        <div class="infos">
                          <div
                            class="name1"
                            style={{ textAlign: "left", fontSize: "17px" }}
                          >
                            <br />
                            <p style={{ color: "black" }}>Phone</p>
                            <span>INDIA &nbsp;&nbsp;: +91 (971) 7511 913</span>
                            <br />
                            <span>
                              Canada : +1 (437) 979-1504
                            </span><br/>
                            <span>
                              USA &nbsp; &nbsp;&nbsp;: &nbsp;+1 (786) 648-2910
                            </span><br/>
                            
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4" id="conrow">
                      <div class="c1">
                        <div class="img">
                          <img src={p2} id="dc1" alt="text" />
                        </div>
                        <div class="infos">
                          <div class="name1" style={{ textAlign: "left" }}>
                            <br />
                            <p style={{ color: "black" }}>E-mail</p>
                            <span>info@omkatech.com</span>
                            <br />
                            <span>admin@omkatech.com</span>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4" id="conrow">
                      <div class="c1">
                        <div class="img">
                          <img src={p3} id="dc1" alt="text" />
                        </div>
                        <div class="infos">
                          <div class="name1">
                            <br/>
                            <p style={{ color: "black" }}>Address</p>
                           <i class="fas fa-map-marker-alt"></i> <span style={{ textAlign: "left" }}>
                            Dallas, TX, USA
                            </span><br/>
                            <i class="fas fa-map-marker-alt"></i> <span style={{ textAlign: "left" }}>
                            Mississauga, ON, Canada
                            </span>
                            <br/>
                            <i class="fas fa-map-marker-alt"></i> <span style={{ textAlign: "left" }}>
                            Delhi, India
                            </span>
                           </div>
                        

                        <br/>
                       
                          </div>
                          <br />
                         <br/><br/> </div>
                     
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
