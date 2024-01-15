import React, { useState, useRef } from "react";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import Flogo from "../../../images/01 logo.png";
import p1 from "../../../images/raedymade/Section 1.PNG";
import web from "../../../images/1.jpg";
import mobile from "../../../images/2.jpg";
import Marketing from "../../../images/3.jpg";
import UI from "../../../images/4.jpg";
import hero from "../../../images/raedymade/section 2.jpg";
import req from "../../../images/raedymade/01.png";
import uiux from "../../../images/raedymade/02.png";
import proto from "../../../images/3proto.png";
import app from "../../../images/4app.png";
import test from "../../../images/5test.png";
import dep from "../../../images/6dep.png";
import axios from "axios";
import $ from "jquery";
import Swal from "sweetalert2";
import p11 from "../../../images/i1.gif";
import p2 from "../../../images/i2.gif";
import p3 from "../../../images/i3.gif";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import GetInTounch from "../GetInTounch";
const Ready = () => {
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 56) {
        $(".navbar").addClass("bg-dark1");
      } else {
        $(".navbar").removeClass("bg-dark1");
      }
    });
    $(".navbar-toggler").click(function() {
      if (!$(".navbar-collapse").hasClass("show")) {
        $(".navbar").addClass("bg-dark1");
      } else {
        if ($(window).scrollTop() < 56) {
          $(".navbar").removeClass("bg-dark1");
        } else {
        }
      }
    });
  });
  const [Email1, setEmail1] = useState("");
  const [message, setMess] = useState("");
  const submitNow1 = (e) => {
    if (Email1 === "") {
      setMess("Required *");
    } else {
      const url = "https://omkatech.com/Contact.php/";
      let formData = new FormData();

      formData.append("Email", Email1);

      axios
        .post(url, formData)
        .then(
          Swal.fire({
            icon: "success",
            // title: 'Password Changed',
            text:
              "Thanks for submitting your details. We will reach out to you as soon as possible. Have a nice day!",
          })
        )
        .catch((error) => console.log(error));
      setEmail1("");
      e.preventDefault();
    }
  };

  return (
    <div>
      {/* navbar */}
      <nav
        class="navbar navbar-expand-md fixed-top navbar-dark py-lg-0 px-lg-5"
        data-wow-delay="0.1s"
      >
        <a
          href="/"
          class="navbar-brand ms-3 d-lg-none"
          rel="noopener noreferrer"
        >
          <img
            alt="omkatech logo"
            src={Flogo} id="hidelogo1"
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
              <img
                alt="omkatech logo"
                src={Flogo}
                style={{
                  height: "55px",
                  marginTop: "10px",
                  marginLeft: "-40px",
                }}
                id="hidelogo"
              ></img>
            </a>
            <a
              href="/"
              class="nav-item nav-link"
              id="homeleft"
              rel="noopener noreferrer"
            >
              Home
            </a>
            &nbsp;&nbsp;&nbsp;
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                rel="noopener noreferrer"
              >
                About Us
              </a>
              <div
                class="dropdown-menu border-0 rounded-0 rounded-bottom m-0"
                style={{ marginTop: "-20px" }}
              >
                <a
                  href="/about-us"
                  class="dropdown-item"
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
                class="nav-link dropdown-toggle active"
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
                  class="dropdown-item "
                  rel="noopener noreferrer"
                >
                  Mobile App Development
                </a>
                <a
                  href="/Services/graphics-ui-ux"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Graphics & UI/UX
                </a>
                <a
                  href="/services/social-media-marketing"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Growth & Marketing
                </a>
                <a
                  href="/services/growth-marketing"
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
                <a
                  href="/Services/ReadyMadeSolution"
                  class="dropdown-item active"
                  rel="noopener noreferrer"
                >
                  Ready Made Solution
                </a>
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
                class="btn btn-primary rounded-pill"
                id="quote"
                style={{ animation: "pulse 1.1s ease infinite" ,color:"white"}}
              >
                Get Quote
              </button>
            </a>
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
        </div>
      </nav>
      <div class="container-fluid page-header py-5 mb-5 " id="ReadyBanner">
        <div class="container text-center py-5">
          <h1 class="display-4 text-white animated slideInDown mb-3"></h1>
        </div>
      </div>
      <div style={{ marginTop: "-10px" }} id="GetFree">
        <h6 style={{ fontWeight: "bold", color: "black", textAlign: "center" }}>
          GET FREE CONSULTATION{" "}
        </h6>

        <br />
        <br />
        <div class="position-relative mx-auto" id="getdiv">
          <center>
            <input
              class="form-control form-rounded bg-transparent border-secondary w-100 py-3 ps-4 pe-5 text-center"
              type="text"
              value={Email1}
              id="inputbox"
              onChange={(e) => {
                setEmail1(e.target.value);
              }}
              placeholder="Your email"
              style={{ borderRadius: "1.3rem", height: "37.6px" }}
              required={true}
            />
            <button
              type="button"
              id="homeB"
              class="btn btn-primary rounded-pill"
              onClick={submitNow1}
            >
              SUBMIT
            </button>
          </center>{" "}
          <span style={{ color: "black", fontSize: "18px" }}>{message}</span>
        </div>
      </div>
      {/* Aboutus */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="img-border">
                <img class="img-fluid" src={p1} alt="ready made solution service" />
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="h-100">
                <h6 class=" bg-white  text-primary" id="whoweare">
                  READY MADE SOLUTION
                </h6>
                <h1 class="display-6 mb-4" id="whoweare">
                  Get your software in less{" "}
                  <span class="text-primary" id="whoweare">
                    {" "}
                    Time and Cost{" "}
                  </span>
                </h1>
                <p>
                  Check our ready-made solutions - software systems that our
                  company is ready to implement in a short time to solve the
                  most complex tasks. Although starting from scratch with custom
                  development will give you more control over functionality,
                  it’s often a very time-consuming and expensive way to get your
                  solution delivered.
                </p>
                <p class="mb-4">
                  We have a number of pre-existing solutions which we have
                  custom developed for other clients which may already fit some
                  of your requirements. A custom software development process is
                  used when off-the-shelf software doesn’t fit your needs and
                  when you want to quickly get your website live to the users at
                  an effective cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service call */}
      <div
        class="containe"
        id="homecall"
        style={{ backgroundColor: "#04165D", width: "100%" }}
      >
        <br />{" "}
        <h2
          class="text-white animated zoomIn"
          style={{
            fontWeight: "bold",
            marginTop: "-8px",
          }}
          id="homeh2"
        >
          Are you ready to save your time and money ? Share your industry with
          us
          <br />{" "}
          <h4
            id="homeh4"
            class="text-white animated zoomIn"
            style={{
              textAlign: "center",

              fontWeight: "normal",
            }}
          >
            Reach out to us.
            <br />
            <br />{" "}
            <a
              href="/Contact"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "White" }}
            >
              <button
                type="button"
                class="btn btn-primary rounded-pill"
                id="buttonH1"
                style={{ animation: "pulse 1.1s ease infinite" ,color:"white"}}
              >
                Schedule A Call
              </button>
            </a>
          </h4>
        </h2>
      </div>
      {/* services */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 class=" bg-white  text-primary" id="whoweare">
              Process We Follow
            </h6>
            <h1 class="display-6 mb-4" id="whoweare">
              Let’s get you the best solution for
              <span className="text-primary" id="whoweare">
                {" "}
                Your Business
              </span>
            </h1>
          </div>
          <div class="row g-4">
            <div class="container">
              {/* 1 */}
              <div class="row align-items-center connecting-lines d-flex">
                <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                  <div class="circle">
                    <i class="fa fa-chec">
                      {" "}
                      <img
                        src={req}
                        style={{ marginLeft: "-3px" }}
                        alt="ready made solution service"
                      ></img>
                    </i>
                  </div>
                </div>
                <div class="col-6">
                  <h4>Understanding Your Industry</h4>
                  <p>
                    We understand your industry requirement and provide you a
                    solution similar to the same.
                  </p>
                </div>
              </div>

              <div class="row timeline">
                <div class="col-2">
                  <div class="corner top-right"></div>
                </div>
                <div class="col-8">
                  <hr />
                </div>
                <div class="col-2">
                  <div class="corner left-bottom"></div>
                </div>
              </div>
              {/* 2 */}
              <div class="row align-items-center justify-content-end connecting-lines d-flex">
                <div class="col-6 text-right">
                  <h4>Demo Calls</h4>
                  <p style={{ textAlign: "right" }}>
                    We get on a call to show what we have and to discuss your
                    requirement in more detail.
                  </p>
                </div>
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div class="circle">
                    <i class="fa fa-chec">
                      <img
                        src={uiux}
                        style={{ marginLeft: "-3px" }}
                        alt="ready made solution service"
                      ></img>
                    </i>
                  </div>
                </div>
              </div>

              <div class="row timeline">
                <div class="col-2">
                  <div class="corner right-bottom"></div>
                </div>
                <div class="col-8">
                  <hr />
                </div>
                <div class="col-2">
                  <div class="corner top-left"></div>
                </div>
              </div>
              {/* 3 */}
              <div class="row align-items-center connecting-lines d-flex">
                <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                  <div class="circle">
                    <i class="fa fa-chec">
                      {" "}
                      <img
                        src={proto}
                        style={{ marginLeft: "-3px" }}
                        alt="ready made solution service"
                      ></img>
                    </i>
                  </div>
                </div>
                <div class="col-6">
                  <h4> Doing Customizations</h4>
                  <p>
                    We make the customizations required in the portal which
                    including adding or deleting the functionality.
                  </p>
                </div>
              </div>
              <div class="row timeline">
                <div class="col-2">
                  <div class="corner top-right"></div>
                </div>
                <div class="col-8">
                  <hr />
                </div>
                <div class="col-2">
                  <div class="corner left-bottom"></div>
                </div>
              </div>
              {/* 4 */}
              <div class="row align-items-center justify-content-end connecting-lines d-flex">
                <div class="col-6 text-right">
                  <h4> Final Testing</h4>
                  <p style={{ textAlign: "right" }}>
                    A final testing and client call is done to make sure before
                    the deployment all is as per you.
                  </p>
                </div>
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div class="circle">
                    <i class="fa fa-chec">
                      {" "}
                      <img
                        src={app}
                        style={{ marginLeft: "-3px" }}
                        alt="ready made solution service"
                      ></img>
                    </i>
                  </div>
                </div>
              </div>
              <div class="row timeline">
                <div class="col-2">
                  <div class="corner right-bottom"></div>
                </div>
                <div class="col-8">
                  <hr />
                </div>
                <div class="col-2">
                  <div class="corner top-left"></div>
                </div>
              </div>
              {/* 5 */}
              <div class="row align-items-center connecting-lines d-flex">
                <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                  <div class="circle">
                    <i class="fa fa-chec">
                      {" "}
                      <img src={test} alt="ready made solution service"></img>
                    </i>
                  </div>
                </div>
                <div class="col-6">
                  <h4>Deployment </h4>
                  <p>
                    We then deploy the software to your server and make the
                    software live for your customers.
                  </p>
                </div>
              </div>
              <div class="row timeline">
                <div class="col-2">
                  <div class="corner top-right"></div>
                </div>
                <div class="col-8">
                  <hr />
                </div>
                <div class="col-2">
                  <div class="corner left-bottom"></div>
                </div>
              </div>
              {/* 6 */}
              <div class="row align-items-center justify-content-end connecting-lines d-flex">
                <div class="col-6 text-right">
                  <h4> Support & Maintenance</h4>
                  <p style={{ textAlign: "right" }}>
                    We are available 24*7 for all the support and maintenance
                    needs.
                  </p>
                </div>
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div class="circle">
                    <i class="fa fa-chec">
                      {" "}
                      <img
                        src={dep}
                        style={{ marginLeft: "-3px" }}
                        alt="ready made solution service"
                      ></img>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* technology */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 class=" bg-white text-primary" id="whoweare">
              BENEFITS OF READY-MADE SOLUTIONS
            </h6>
            <h1 class="display-6 mb-4" id="whoweare">
              Choosing us to{" "}
              <span class="text-primary" id="whoweare">
                Save Time And Money
              </span>{" "}
              is a best decision
            </h1>
          </div>
          <div class="row g-4">
            <div class="container-fluid">
              <div class="row mb-5">
                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={web} alt="ready made solution service" class="card-img-top" />
                    <div class="card-body">
                      <p style={{ textAlign: "center" }}>
                        Using an existing solution saves you a lot of time and
                        money
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={mobile} alt="ready made solution service" class="card-img-top" />
                    <div class="card-body">
                      <p style={{ textAlign: "center" }}>
                        It gives a faster way to work out on what you want
                        rather than just visualizing it up.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={Marketing} alt="ready made solution service" class="card-img-top" />
                    <div class="card-body">
                      <p style={{ textAlign: "center" }}>
                        You can delete any unwanted existing functions or put
                        them aside for future use..
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num">
                  <div
                    class=" car shadow"
                    style={{ border: "1px solid darkgrey" }}
                  >
                    <img src={UI} alt="ready made solution service" class="card-img-top" />
                    <div class="card-body">
                      <p style={{ textAlign: "center" }}>
                        If we have built it before, we can even add new
                        functions in no time for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {why choose Us */}
      <div class="container-xxl py-5" id="condiv1">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="h-100">
                <h6 class=" bg-white text-primary" id="whoweare">
                  OUR SOLUTIONS INCLUDE
                </h6>
                <h1 class="display-6 mb-4" id="whoweare">
                  Benefits you get while working with
                  <span class="text-primary" id="whoweare">
                    {" "}
                    OMKA TECH
                  </span>
                </h1>
                <p class="mb-4"></p>
                <div class="row g-4">
                  <div class="col-12">
                    <div class="skill">
                      <div class="d-flex justify-content-between">
                        {/* <p class="mb-2">Digital Marketing</p><br/><br/> */}
                      </div>

                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Informative Website
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ eCommerce Portal
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Inventory Management System
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Healthcare Portal
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ School and College Management Software
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ HRMS Employee Portal
                      </h6>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="skill">
                      <div class="d-flex justify-content-between">
                        {/* <p class="mb-2">SEO & Backlinks</p> */}
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="skill">
                      <div class="d-flex justify-content-between">
                        {/* <p class="mb-2">Design & Development</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="img-border">
                <img class="img-fluid" src={hero} alt="ready made solution service" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
      <GetInTounch />
    </div>
  );
};
export default Ready;
