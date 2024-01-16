import React, { useEffect, useRef } from "react";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import p1 from "../../../images/enterprise/section 1.jpg";
import Flogo from "../../../images/01 logo.png";
import one from "../../../images/enterprise/01.png";
import two from "../../../images/enterprise/02.png";
import three from "../../../images/enterprise/03.png";
import four from "../../../images/enterprise/04.png";
import five from "../../../images/enterprise/05.png";
import six from "../../../images/enterprise/06.png";
import hero from "../../../images/enterprise/section 2.jpg";
import req from "../../../images/1req.png";
import uiux from "../../../images/2uiux.png";
import proto from "../../../images/3proto.png";
import app from "../../../images/4app.png";
import test from "../../../images/5test.png";
import $ from "jquery";
import Helmet from "react-helmet";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import GetInTounch from "../GetInTounch";
import EmailForm from "../EmailForm";
const SoftwareDev = () => {
  // left side
  const targetDivRef = useRef(null);
  const handleScroll = () => {
    const targetDiv = targetDivRef.current;
    if (targetDiv && isElementInViewport(targetDiv)) {
      targetDiv.classList.add('ani1');
    }
  };

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])



// -----------------------------------------------------------------------------
 // right side
 const targetDivRef1 = useRef(null);
 const handleScroll1 = () => {
   const targetDiv1 = targetDivRef1.current;
   if (targetDiv1 && isElementInViewport1(targetDiv1)) {
     targetDiv1.classList.add('ani2');
   }
 };

 const isElementInViewport1 = (el) => {
   const rect = el.getBoundingClientRect();
   return rect.top >= 0 && rect.bottom <= window.innerHeight;
 };

 useEffect(() => {
   window.addEventListener('scroll', handleScroll1);
   return () => {
     window.removeEventListener('scroll', handleScroll1);
   };
 }, [])


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

  return (
    <div>
      <Helmet>
        <script>{`{"gtag('event', 'conversion', {'send_to': 'AW-676251754/uHhwCNibqokYEOqQu8IC'});"}`}</script>
      </Helmet>
      <Helmet>
        {/* <title>Enterprise Software Solutions in USA - Omka Tech"</title> */}
        <meta
          name="description" data-react-helmet="true"
          content="Omka Tech is providing a gamut of Enterprise Software Solutions and helps you open to endless 
          business opportunities. Our experts can help you to take an edge with our customized, creative and innovative solutions"
        />
        <meta
          name="keywords" data-react-helmet="true"
          content="Enterprise software solution company, 
          software solution, enterprise software development services, enterprise 
          software development."
        />
        <link rel="canonical" href="https://www.omkatech.com/services/enterprise-
software-solution"></link>

        <meta name="robots" content="index, follow" />
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
        class="navbar navbar-expand-md fixed-top navbar-dark py-lg-0 px-lg-5"
        data-wow-delay="0.1s" id="bottomNavbar" style={{ backgroundColor: "#F2F2F2", height: "80px" }}
      >
        <a
          href="/"
          class="navbar-brand ms-3 d-lg-none"
          rel="noopener noreferrer"
        >
          <img
            alt="Omka Tech logo"
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
          <div class="navbar-nav me-auto p-3 p-lg-0" >
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
                {/* <a
                  href="/Main"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  CaseStudy
                </a> */}
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
                  href="/services/growth-marketing"
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Growth & Marketing
                </a>
                <a
                  href="/services/enterprise-software-solution"
                  class="dropdown-item active"
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
              href="/Contact-Us"
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
                style={{ animation: "pulse 1.1s ease infinite", color: "white" }}
              >
                Free 30-Min Consultation
              </button>
            </a>

          </div>
        </div>
      </nav>
      <div class="container-fluid page-header py-5 mb-5 fadeIn" id="SoftBanner">
        <h1 id="sh">
          enterprise software
          <br /> solution
          <hr id="shr" />
        </h1>
        <p id="shh">
          custom software solutions for your
          <br />
          customized business
        </p>
      </div>
      <br />
      <EmailForm />
      <br />
      {/* Aboutus */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="img-border">
                <img class="img-fluid" ref={targetDivRef} src={p1} alt="enterprise software solutions company in usa" />
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="h-100">
                <h5 class=" bg-white  text-primary" id="whoweare">
                  Software Development
                </h5>
                <h2 class="display-6 mb-4" id="whoweare">
                  Custom Software Solutions for your{" "}
                  <span class="text-primary" id="whoweare">
                    {" "}
                    Enterprise Business{" "}
                  </span>
                </h2>
                <p>
                  We offer a wide range of software solution services that
                  meet your specific business needs. In today’s highly volatile
                  and competitive market landscape, custom software development
                  helps you to achieve the desired business proficiency. We help
                  organizations become a lasting success by re-engineering
                  enterprise software development solutions of different
                  complexity levels. We support your business infrastructure
                  with scalable software that improves key facts of your
                  organization.
                </p>
                <p class="mb-4">
                  We have been in this industry for a very long time and
                  therefore we have the expertise of handling software
                  development projects of diverse complexity levels, making us
                  the right fit for all your business-related needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* service call */}
      <div
        class="containe"
        id="homecall"
        style={{ backgroundColor: "#04165D", width: "100%" }}
      >
        <br /> <br />
        <h2
          class="text-white animated zoomIn"
          style={{
            fontWeight: "bold",
            marginTop: "-11px",
          }}
          id="homeh2"
        >
          Connet with us for all your Business Enterprise related requirements.
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
            <br />
            <a
              href="/Contact-Us"
              style={{ textDecoration: "none", color: "White" }}
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="btn btn-primary rounded-pill"
                id="buttonH1"
                style={{ animation: "pulse 1.1s ease infinite", color: "white" }}
              >
                Schedule A Call
              </button>
            </a>
          </h4>
        </h2>
      </div>

      <br />
      {/* services */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 class=" bg-white text-primary" id="whoweare">
              Process We Follow
            </h6>
            <h2 class="display-6 mb-4" id="whoweare">
              Get a product As Unique As
              <span className="text-primary" id="whoweare">
                {" "}
                Your Idea
              </span>
            </h2>
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
                        alt="enterprise solution service"
                      ></img>
                    </i>
                  </div>
                </div>
                <div class="col-6 text-left">
                  <h4>Product market fit analysis</h4>
                  <p>
                    We gather your requirement and do some market analysis to
                    make sure that your product is unique and fits the
                    requirement.
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
                  <h4> Software design system</h4>
                  <p style={{ textAlign: "right" }}>
                    We use the latest technologies and tools for designing the
                    software
                  </p>
                </div>
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div class="circle">
                    <i class="fa fa-chec">
                      <img
                        src={uiux}
                        style={{ marginLeft: "-3px" }}
                        alt="enterprise solution service"
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
                        alt="enterprise solution service"
                      ></img>
                    </i>
                  </div>
                </div>
                <div class="col-6 text-left">
                  <h4>Custom Software development</h4>
                  <p>
                    Once the development mode starts we make sure that
                    everything is as per the client's requirement and also can
                    be changed from the CMS at any point in time
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
                  <h4>Software Testing & Deployment</h4>
                  <p style={{ textAlign: "right" }}>
                    The product is tested by our expert team from scratch and
                    once all is approved the software is deployed over the
                    server.
                  </p>
                </div>
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div class="circle">
                    <i class="fa fa-chec">
                      {" "}
                      <img
                        src={app}
                        style={{ marginLeft: "-3px" }}
                        alt="enterprise solution service"
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
                      <img src={test} alt="enterprise solution service"></img>
                    </i>
                  </div>
                </div>
                <div class="col-6 text-left">
                  <h4> Maintenance</h4>
                  <p>
                    All big things need maintenance and so does a website or
                    software, we are here for all the support 24*7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* ------------------------------------------------------------- */}
      {/* technology */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 class=" bg-white text-primary" id="whoweare">
              Our Industry Capabilities
            </h6>
            <h2 class="display-6 mb-4" id="whoweare">
              We build custom technology solutions for{" "}
              <span className="text-primary" id="whoweare">
                All Industries
              </span>
            </h2>
          </div>
          <div class="row g-4">
            <div class="container-fluid">
              <div class="row mb-5">
                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num">
                  <div
                    class="car shadow"
                    style={{
                      border: "1px solid darkgrey",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={one}
                      alt="School Management System"
                      class="card-img-top"
                      style={{
                        marginLeft: "0px",
                        marginTop: "10px",
                        height: "54px",
                        width: "54px",
                      }}
                    /><br></br><br/>
                    <div class="card-body">
                      <h3 class="text-center" style={{ fontSize: "1rem" }}>
                        School Management <br />
                        System
                      </h3>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num">
                  <div
                    class="car shadow"
                    style={{
                      border: "1px solid darkgrey",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={two}
                      alt="healthcare management software"
                      class="card-img-top"
                      style={{
                        marginLeft: "0px",
                        marginTop: "10px",
                        height: "54px",
                        width: "54px",
                      }}
                    /><br/><br/>
                    <div class="card-body">
                      <h3 class="text-center" style={{ fontSize: "1rem" }}>
                        Healthcare Management Software
                      </h3>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num">
                  <div
                    class="car shadow"
                    style={{
                      border: "1px solid darkgrey",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={three}
                      alt="online teaching portal"
                      class="card-img-top"
                      style={{
                        marginLeft: "0px",
                        marginTop: "10px",
                        height: "54px",
                        width: "54px",
                      }}
                    /><br/><br/>
                    <div class="card-body">
                      <h3 class="text-center" style={{ fontSize: "1rem" }}>
                        Online Teaching
                        <br /> Portal
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num">
                  <div
                    class="car shadow"
                    style={{
                      border: "1px solid darkgrey",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={four}
                      alt="banking & insurance software"
                      class="card-img-top"
                      style={{
                        marginLeft: "0px",
                        marginTop: "10px",
                        height: "54px",
                        width: "54px",
                      }}
                    /><br/><br/>
                    <div class="card-body">
                      <h3 class="text-center" style={{ fontSize: "1rem" }}>
                        Banking & Insurance Software
                      </h3>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num">
                  <div
                    class="car shadow"
                    style={{
                      border: "1px solid darkgrey",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={five}
                      alt="employee management portal"
                      class="card-img-top"
                      style={{
                        marginLeft: "0px",
                        marginTop: "10px",
                        height: "54px",
                        width: "54px",
                      }}
                    /><br/><br/>
                    <div class="card-body">
                      <h3 class="text-center" style={{ fontSize: "1rem" }}>
                        Employee Management Portal (HRMS)
                      </h3>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="num">
                  <div
                    class="car shadow"
                    style={{
                      border: "1px solid darkgrey",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={six}
                      alt="product data & inventory management"
                      class="card-img-top"
                      style={{
                        marginLeft: "0px",
                        marginTop: "10px",
                        height: "54px",
                        width: "54px",
                      }}
                    /><br/><br/>
                    <div class="card-body">
                      <h3 class="text-center" style={{ fontSize: "1rem" }}>
                        Product Data & Inventory Management (SEM)
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {why choose Us */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="h-100">
                <h6 class="bg-white text-primary" id="whoweare">
                  Why Choose Us
                </h6>
                <h2 class="display-6 mb-4" id="whoweare">
                  We are the most trusted{" "}
                  <span className="text-primary" id="whoweare">
                    Development Company{" "}
                  </span>
                </h2>
                <p class="mb-4">Omka Tech is the best enterprise software solution company that
                  creates high quality software. We work with our clients to understand
                  their business and brand, then create tailored solutions that speak for
                  themselves. Our team of developers knows how to bring clarity and
                  meaning to your ideas in the website or mobile application</p>
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
                        ✓ Quality Product
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Quick Development
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Latest technology stack
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Complete transparency{" "}
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Custom CRM services
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Consultancy services
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
                <img class="img-fluid"ref={targetDivRef1} src={hero} alt="most trusted development company" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* conatct */}
      <ContactForm />
      {/* footer */}
      <Footer />

      <GetInTounch />
    </div>
  );
};

export default SoftwareDev;
