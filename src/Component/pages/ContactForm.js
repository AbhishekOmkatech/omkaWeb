import React, { useRef, useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import p11 from "../../images/i1.gif";
import p2 from "../../images/i2.gif";
import p3 from "../../images/i3.gif";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { REACT_APP_API_ENDPOINT } = process.env;
const ContactForm = () => {
  
  const selectedFile = useRef();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Code, setCode] = useState("");
  const [Phone, setPhone] = useState("");
  const [Service, setService] = useState("");
  const [Project, setProject] = useState("");
  const [Document, setDocument] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
 
 


  
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
      setShowPopup(true);
    setCode("");
    setName("");
    setEmail("");
    setService("");
    setPhone("");
    setDocument("");
    setProject("");
    // alert("Thank you for reaching out. Our team will be in touch with you within 24 hours.");
    setCaptchaValue('');
   
  };
  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  }
  
  const handlePopupClose = () => {
    setShowPopup(false);
  };

 


  return (
    
      <div className="container-xxl py-5" style={{ marginTop: "-180px" }}>
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px",marginTop:"46px" }}
          >
            <h6 className=" bg-white  text-primary " id="whoweare">
              Contact Us
            </h6>
            <h2 className="display-6 mb-4" id="whoweare">
              Get In Touch
            </h2>
          </div>
          <form style={{ marginTop: "-50px" }} onSubmit={submitNow1}>
            <div className="row g-4">
              <section className="contact-page-sec">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div
                        className="contact-page-form"
                        method="post"
                        style={{ marginTop: "-50px" }}
                      >
                        <div className="row">
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="single-input-field">
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
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="single-input-field">
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
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="single-input-field">
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
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="single-input-field">
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

                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="single-input-field">
                              <select
                                placeholder="Select Service"
                                value={Service}
                                onChange={(e) => {
                                  setService(e.target.value);
                                }}
                              >
                                <option value="" disabled >
                                  Select Service
                                </option>
                                <option value="Web Development">
                                 
                                  Website Development
                                </option>
                                <option value="Mobile App Development">
                                  
                                  Mobile App Development
                                </option>
                                <option value="Designing">
                                  Graphics & UI/UX
                                </option>
                                <option value=" Social Media Marketing">
                                 
                                  Growth & Marketing
                                </option>
                                <option value="Software Development">
                                  
                                  Enterprise Software Solution
                                </option>
                                <option value="E-Commerce Web & App">
                                  
                                  E-Commerce Web & App
                                </option>
                                <option value="CMS DESIGN & DEVELOPMENT">
                                 
                                  CMS DESIGN & DEVELOPMENT
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="single-input-field">
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
                                
                              />
                            </div>
                          </div>
                          <br />
                          <br />
                          <div className="col-md-12 message-input">
                            <div className="single-input-field">
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
                          <ReCAPTCHA
        sitekey="6Le5RX0pAAAAAPssR7cQeJT_xtjaqVxycMQ89cWc"
        onChange={handleCaptchaChange}
      />
      </center>
                          <center>
                           
                            <button
                              className="btn btn-primary rounded-pill py-3 px-5"
                         type="submit"
                              style={{
                                width: "15%",
                                height: "35px",
                                animation: "pulse 1.1s ease infinite",
                              }}
                              rel="noopener noreferrer"
                              id="knowmore4"
                              disabled={!captchaValue}
                            >

                              
                                <center id="homeKnow3" style={{color:"white"}} >Submit Now</center>
                                
                            </button>
                          </center>
                          {showPopup && (
           <div className="thank-you-page">
           <h1 className="thank-you-text">Thank You!</h1>
           <span className="main-text modal-sub-heading">Your details have been successfully submitted.</span>
           <button className="thank-you-btn" onClick={handlePopupClose}>OK</button>
         </div>
         
          )}
                        </div>
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  <br />
                  
             
                  <div className="row">
                    <div className="col-md-4" id="conrow">
                      <div className="c1">
                        <div className="img">
                          <img src={p11} id="dc1" alt="text" />
                        </div>
                        <div className="infos">
                          <div
                            className="name1"
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
                    <div className="col-md-4" id="conrow">
                      <div className="c1">
                        <div className="img">
                          <img src={p2} id="dc1" alt="text" />
                        </div>
                        <div className="infos">
                          <div className="name1" style={{ textAlign: "left" }}>
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

                    <div className="col-md-4" id="conrow">
                      <div className="c1">
                        <div className="img">
                          <img src={p3} id="dc1" alt="text" />
                        </div>
                        <div className="infos">
                          <div className="name1">
                            <br/>
                            <p style={{ color: "black" }}>Address</p>
                           <i className="fas fa-map-marker-alt"></i> <span style={{ textAlign: "left" }}>
                            Dallas, TX, USA
                            </span><br/>
                            <i className="fas fa-map-marker-alt"></i> <span style={{ textAlign: "left" }}>
                            Mississauga, ON, Canada
                            </span>
                            <br/>
                            <i className="fas fa-map-marker-alt"></i> <span style={{ textAlign: "left" }}>
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
 
  );
};

export default ContactForm;
