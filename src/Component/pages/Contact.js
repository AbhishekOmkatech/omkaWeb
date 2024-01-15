import React, { useState, useRef } from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";
import { useNavigate } from "react-router-dom";
import Flogo from "../../images/01 logo.png";
import axios from "axios";
import $ from "jquery";
import p11 from "../../images/i1.gif";
import p2 from "../../images/i2.gif";
import p3 from "../../images/i3.gif";
import Helmet from "react-helmet";
import Footer from "./Footer";
import GetInTounch from "./GetInTounch";
import "../css/Inline.css";
const { REACT_APP_API_ENDPOINT } = process.env;
const Contact = () => {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 56) {
        $(".navbar").addClass("bg-dark1");
        $(".navbar").addClass("text-whitee"); // Add text-white class
      } else {
        $(".navbar").removeClass("bg-dark1");
        $(".navbar").removeClass("text-whitee"); // Remove text-white class
      }
    });

    $(".navbar-toggler").click(function () {
      if (!$(".navbar-collapse").hasClass("show")) {
        $(".navbar").addClass("bg-dark1");
        $(".navbar").addClass("text-whitee"); // Add text-white class
      } else {
        if ($(window).scrollTop() < 56) {
          $(".navbar").removeClass("bg-dark1");
          $(".navbar").removeClass("text-whitee"); // Remove text-white class
        }
      }
    });
  });


  // JavaScript to handle the scrolling effect

  let prevScrollPos = window.pageYOffset;
  const topNavbar = document.getElementById("topNavbar");
  const bottomNavbar = document.getElementById("bottomNavbar");

  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      topNavbar.style.transform = "translateY(0)";
      topNavbar.style.opacity = "1";
    } else {
      topNavbar.style.transform = "translateY(-100%)";
      topNavbar.style.opacity = "0";
    }

    prevScrollPos = currentScrollPos;
  };
  const navigate = useNavigate();
  const selectedFile = useRef();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Code, setCode] = useState("");
  const [Phone, setPhone] = useState("");
  const [Service, setService] = useState("");
  const [Price, setPrice] = useState("");
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
      <Helmet>
        <title>Contact us | Omka Tech LLP</title>
        <meta
          name="description" content="Contact us for website design and development company at Omka Tech LLP, we’re here to help. Call +91-9717511913" data-react-helmet="true"
        />
        <meta
          name="keywords"
          content="Omka Tech, Web development company, App development, Ecommerce development" data-react-helmet="true"
        />
      </Helmet>
      {/* navbar */}
      <nav
        id="topNavbar"
        class=""
        data-wow-delay="0.1s"
        style={{ height: "60px", backgroundColor: "white" }}
      >
        <div class="container" >

        <div class="flag-container">
                            <img src='../india.png' class="flag-icon" alt ="india"></img><span style={{ color: "white" }}>|</span>&nbsp;&nbsp;
                            <img src='../us.png' class="flag-icon" alt ="US"></img><span style={{ color: "white" }}>|</span>&nbsp;&nbsp;
                            <img src='../canda.png' class="flag-icon" alt ="Canda"></img>
                        </div>
                    <div className="row" id="gsss" >

                        <div className="col-5"></div>
                        <div className="col-7">
                            <a href="tel:+1 (786)648-29107"> <img src='../c.jpg' id="flag" alt="canda"></img>&nbsp;+1(786) 648-2910</a>&nbsp; |&nbsp;&nbsp;
                            <a href="tel:+1 (437) 979-1504"><img src='../po.jpg' id="flag" alt="US"></img> &nbsp;+1 (437) 979-1504</a>&nbsp; |&nbsp;&nbsp;

                            <a href="tel:+91 9717511913"><img src='../in.jpg' id="flag" alt="india" ></img>&nbsp; +91 9717511913</a>
                        </div>

                    </div>
        </div>
      </nav>
      <nav

        class="navbar navbar-expand-md  navbar-dark py-lg-0 px-lg-5"
        data-wow-delay="0.1s" id="bottomNavbar" style={{ backgroundColor: "#F2F2F2", height: "80px" }}
      >
        <a
          href="/"
          class="navbar-brand ms-3 d-lg-none"
          rel="noopener noreferrer"
        >
          <img
            alt="Omka Tech logo"
            src={Flogo}
            id="hidelogo1"
            style={{ height: "40px", marginLeft: "-20px" }}
          ></img>
        </a>
        <button
          type="button"
          class="navbar-toggler me-3"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav me-auto p-3 p-lg-0">
            <a
              href="/"
              style={{
                height: "56px",
                // marginTop: "4px",
                backgroundColor: "transparent",
                border: "none",
              }}
              rel="noopener noreferrer"
            >
              {" "}
              <img
                alt="Omka Tech logo"
                src={Flogo}
                style={{
                  height: "55px",
                  marginTop: "12px",
                  marginLeft: "-40px",
                }}
                id="hidelogo"
              ></img>
            </a>
            <a
              href="/"
              class="nav-item nav-link "
              id="homeleft"
              rel="noopener noreferrer"
            >
              Home
            </a>
            &nbsp;&nbsp;&nbsp;
            <div class="nav-item dropdown">
              <a
                rel="noopener noreferrer"
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                About Us
              </a>
              <div
                class="dropdown-menu border-0 rounded-0 rounded-bottom m-0"
                style={{ marginTop: "-20px" }}
              >
                <a
                  href="/about-us"
                  class="dropdown-item "
                  rel="noopener noreferrer"
                >
                  Our Company
                </a>
                <a
                  href="/Careers"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                rel="noopener noreferrer"
              >
                Services
              </a>
              <div
                class="dropdown-menu border-0 rounded-0 rounded-bottom m-0"
                style={{ marginTop: "-20px" }}
              >
                <a
                  href="/services/website-development"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Website Development
                </a>
                <a
                  href="/services/mobile-app-development"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Mobile App Development
                </a>
                <a
                  href="/services/graphics-ui-ux"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Graphics & UI/UX
                </a>
                <a
                  href="/services/growth-marketing"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Growth & Marketing
                </a>
                <a
                  href="/services/enterprise-software-solution"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Enterprise Software Solution
                </a>
                <a
                  href="/services/e-commerce-web-apps"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  E-Commerce Web & Apps
                </a>
                <a
                  href="/services/cms-design-development"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  CMS Design & Development
                </a>
                {/* <a href="/Services/ReadyMadeSolution" class="dropdown-item">
               Ready Made Solution
             </a> */}
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;
            <a
              href="/hire-resources"
              class="nav-item nav-link"
              rel="noopener noreferrer"
            >
              Hire Resources
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="/blog" class="nav-item nav-link" rel="noopener noreferrer">
              Blog
            </a>{" "}
            &nbsp;&nbsp;&nbsp;
            <a
              href="/contact-us"
              style={{
                textDecoration: "none",
                color: "White",
                marginTop: "25px",
              }}
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="btn btn-primary rounded-pill active"
                id="quote"
                style={{ animation: "pulse 1.1s ease infinite", color: "white" }}
              >
                Get Quote
              </button>
            </a>


          </div>
        </div>
      </nav>
      <div
        class="container-fluid page-header py-5 mb-5"
        id="ContactBanner"
      ></div>

      {/* conatct */}
      <div class="container-xxl py-5" id="contactformb">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          ><br />
            <h2 class=" text-primary text-white">Connect With Us!!</h2>
          </div>
          <form onSubmit={submitNow1}>
            <div class="row g-4" id="contactdiv">
              <section class="contact-page-sec">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div
                        class="contact-page-form"
                        method="post"
                        style={{ marginTop: "-100px" }}
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
                                <option value=" Web Development">
                                  {" "}
                                  Website Development
                                </option>
                                <option value=" Mobile App Development">
                                  {" "}
                                  Mobile App Development
                                </option>
                                <option value=" Designing">
                                  Graphics & UI/UX
                                </option>
                                <option value="  Social Media Marketing">
                                  {" "}
                                  Growth & Marketing
                                </option>
                                <option value=" Software Development">
                                  {" "}
                                  Enterprise Software Solution
                                </option>
                                <option value="E-Commerce Web & App">
                                  {" "}
                                  E-Commerce Web & App
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
                                id="textarea"
                                name="Project"
                                value={Project}
                                onChange={(e) => {
                                  setProject(e.target.value);
                                }}
                              ></textarea>
                            </div>
                          </div>
                          <br />
                          <br />
                          {/* <div class="form-group row" id="g6">
                            <Recapcha />
                          </div> */}
                          <br />
                          <br />
                          <br />
                          <br />
                          <center>
                            {" "}
                            <button
                              class="btn btn-primary rounded-pill py-3 px-5"
                              id="knowmore4"
                           type="submit"
                            >

                              {" "}
                              <center id="homeKnow3" style={{ color: "white" }}>Submit Now</center>

                            </button>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </form>
        </div>
      </div>

      {/* contact 3 cards */}
      <div class="container-xxl py-5">
        <div class="container">
          <form style={{ marginTop: "-90px" }}>
            <div class="row g-4">
              <section class="contact-page-sec">
                <div class="container">
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
                            </span><br />
                            <span>
                              USA &nbsp; &nbsp;&nbsp;: &nbsp;+1 (786) 648-2910
                            </span><br />

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
                            <br />
                            <p style={{ color: "black" }}>Address</p>
                            <i class="fas fa-map-marker-alt"></i> <span style={{ textAlign: "left" }}>
                              Dallas, TX, USA
                            </span><br />
                            <i class="fas fa-map-marker-alt"></i> <span style={{ textAlign: "left" }}>
                              Mississauga, ON, Canada
                            </span>
                            <br />
                            <i class="fas fa-map-marker-alt"></i> <span style={{ textAlign: "left" }}>
                              Delhi, India
                            </span>
                          </div>


                          <br />

                        </div>
                        <br />
                        <br /><br /> </div>

                    </div>
                  </div>
                </div>
              </section>
            </div>
          </form>
        </div>
      </div>

      {/* footer */}
      <div id="contactfooter">
        <Footer />
      </div>
      <GetInTounch />
    </div>
  );
};

export default Contact;
