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
import ReCAPTCHA from 'react-google-recaptcha';

const { REACT_APP_API_ENDPOINT } = process.env;
const Contact = () => {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 56) {
        $(".navbar").addClass("bg-dark1");
        $(".navbar").addClass("text-whitee"); // Add text-white className
      } else {
        $(".navbar").removeClass("bg-dark1");
        $(".navbar").removeClass("text-whitee"); // Remove text-white className
      }
    });

    $(".navbar-toggler").click(function () {
      if (!$(".navbar-collapse").hasClass("show")) {
        $(".navbar").addClass("bg-dark1");
        $(".navbar").addClass("text-whitee"); // Add text-white className
      } else {
        if ($(window).scrollTop() < 56) {
          $(".navbar").removeClass("bg-dark1");
          $(".navbar").removeClass("text-whitee"); // Remove text-white className
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
  const [captchaValue, setCaptchaValue] = useState(null);



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
  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  }


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
        className=""
        data-wow-delay="0.1s"
        style={{ height: "60px", backgroundColor: "white" }}
      >
        <div className="container" >

          <div className="flag-container">
            <img src='../india.png' className="flag-icon" alt="india"></img><span style={{ color: "white" }}>|</span>&nbsp;&nbsp;
            <img src='../us.png' className="flag-icon" alt="US"></img><span style={{ color: "white" }}>|</span>&nbsp;&nbsp;
            <img src='../canda.png' className="flag-icon" alt="Canda"></img>
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

        className="navbar navbar-expand-md  navbar-dark py-lg-0 px-lg-5"
        data-wow-delay="0.1s" id="bottomNavbar" style={{ backgroundColor: "#F2F2F2", height: "80px" }}
      >
        <a
          href="/"
          className="navbar-brand ms-3 d-lg-none"
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
          className="navbar-toggler me-3"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav me-auto p-3 p-lg-0">
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
              className="nav-item nav-link "
              id="homeleft"
              rel="noopener noreferrer"
            >
              Home
            </a>
            &nbsp;&nbsp;&nbsp;
            <div className="nav-item dropdown">
              <a
                rel="noopener noreferrer"
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                About Us
              </a>
              <div
                className="dropdown-menu border-0 rounded-0 rounded-bottom m-0"
                style={{ marginTop: "-20px" }}
              >
                <a
                  href="/about-us"
                  className="dropdown-item "
                  rel="noopener noreferrer"
                >
                  Our Company
                </a>
                <a
                  href="/Careers"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
                <a
                  href="/Main"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  CaseStudy
                </a>
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                rel="noopener noreferrer"
              >
                Services
              </a>
              <div
                className="dropdown-menu border-0 rounded-0 rounded-bottom m-0"
                style={{ marginTop: "-20px" }}
              >
                <a
                  href="/services/website-development"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Website Development
                </a>
                <a
                  href="/services/mobile-app-development"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Mobile App Development
                </a>
                <a
                  href="/services/graphics-ui-ux"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Graphics & UI/UX
                </a>
                <a
                  href="/services/growth-marketing"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Growth & Marketing
                </a>
                <a
                  href="/services/enterprise-software-solution"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Enterprise Software Solution
                </a>
                <a
                  href="/services/e-commerce-web-apps"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  E-Commerce Web & Apps
                </a>
                <a
                  href="/services/cms-design-development"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  CMS Design & Development
                </a>
                {/* <a href="/Services/ReadyMadeSolution" className="dropdown-item">
               Ready Made Solution
             </a> */}
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;
            <a
              href="/hire-resources"
              className="nav-item nav-link"
              rel="noopener noreferrer"
            >
              Hire Resources
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="/blog" className="nav-item nav-link" rel="noopener noreferrer">
              Blog
            </a>
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
                className="btn btn-primary active"
                id="quote"
                style={{ animation: "pulse 1.1s ease infinite", color: "white", borderRadius: "2px" }}
              >
                Free 30-Min Consultation
              </button>
            </a>


          </div>
        </div>
      </nav>
      <div
        className="container-fluid page-header py-5 mb-5"
        id="ContactBanner"
      ></div>

      {/* conatct */}
      <div className="container-xxl py-5" id="contactformb">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          ><br />
            <h2 className=" text-primary text-white">Connect With Us!!</h2>
          </div>
          <form onSubmit={submitNow1}>
            <div className="row g-4" id="contactdiv">
              <section className="contact-page-sec">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div
                        className="contact-page-form"
                        method="post"
                        style={{ marginTop: "-100px" }}
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
                                <option value=" Web Development">

                                  Website Development
                                </option>
                                <option value=" Mobile App Development">

                                  Mobile App Development
                                </option>
                                <option value=" Designing">
                                  Graphics & UI/UX
                                </option>
                                <option value="  Social Media Marketing">

                                  Growth & Marketing
                                </option>
                                <option value=" Software Development">

                                  Enterprise Software Solution
                                </option>
                                <option value="E-Commerce Web & App">

                                  E-Commerce Web & App
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
                                required
                              />
                            </div>
                          </div>
                          <br />
                          <br />
                          <div className="col-md-12 message-input">
                            <div className="single-input-field">
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
                          {/* <div className="form-group row" id="g6">
                            <Recapcha />
                          </div> */}
                          <br />
                          <br />
                          <br />
                          <br />
                          <div className="arrange " style={ {textAlign: "-webkitCenter",width:"100%"
}} >
                              <div style={{ width:"100%", height: "78px"   }} ><ReCAPTCHA
                                sitekey="6Le5RX0pAAAAAPssR7cQeJT_xtjaqVxycMQ89cWc"
                                onChange={handleCaptchaChange}
                              /></div>
                            </div>

                          <center>

                            <button
                              className="btn btn-primary rounded-pill py-3 px-5"
                              id="knowmore4"
                              type="submit"
                            >


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
      <div className="container-xxl py-5">
        <div className="container">
          <form style={{ marginTop: "-90px" }}>
            <div className="row g-4">
              <section className="contact-page-sec">
                <div className="container">
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
                            </span><br />
                            <span>
                              USA &nbsp; &nbsp;&nbsp;: &nbsp;+1 (786) 648-2910
                            </span><br />

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
                            <br />
                            <p style={{ color: "black" }}>Address</p>
                            <i className="fas fa-map-marker-alt"></i> <span style={{ textAlign: "left" }}>
                              Dallas, TX, USA
                            </span><br />
                            <i className="fas fa-map-marker-alt"></i> <span style={{ textAlign: "left" }}>
                              Mississauga, ON, Canada
                            </span>
                            <br />
                            <i className="fas fa-map-marker-alt"></i> <span style={{ textAlign: "left" }}>
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
