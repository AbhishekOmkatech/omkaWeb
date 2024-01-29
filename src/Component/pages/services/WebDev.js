import React,{useState,useEffect,useRef} from "react";
import "../../css/bootstrap.min.css";
import Flogo from "../../../images/01 logo.png";
import "../../css/style.css";
import p1 from "../../../images/02 section 1.jpg";
import Helmet from "react-helmet";
import php from "../../../images/technology/01.png";
import laravel from "../../../images/technology/02.png";
import code from "../../../images/technology/03.png";
import react from "../../../images/technology/04.png";
import node from "../../../images/technology/05.png";
import python from "../../../images/technology/06.png";
import Shopify from "../../../images/technology/07.png";
import Wordpress from "../../../images/technology/08.png";
import Angular from "../../../images/technology/09.png";
import Magento from "../../../images/technology/10.png";
import hero from "../../../images/hero-img.jpg";
import req from "../../../images/1req.png";
import uiux from "../../../images/2uiux.png";
import proto from "../../../images/3proto.png";
import app from "../../../images/4app.png";
import test from "../../../images/5test.png";
import dep from "../../../images/6dep.png";
import $ from "jquery";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import GetInTounch from "../GetInTounch";
import EmailForm from "../EmailForm";
const WebDev = () => {
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
        {/* <title>Website & Web App Development Company - Omka Tech
         </title> */}
        <meta
          name="description" data-react-helmet="true"
          content="We at Omka Tech, craft high performance web designs and cutting-edge web applications which are user-friendly, responsive and SEO optimized to boost your digital presence."
        />
        <meta
          name="keywords" data-react-helmet="true"
          content="web development company USA, website 
          development company in USA, web app development, web app developer,
          Web development, website development"
        />
        <link rel="canonical" href="https://www.omkatech.com/services/website-
development"></link>

        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* navbar */}
      <nav
        id="topNavbar"
        className=""
        data-wow-delay="0.1s"
        style={{ height: "60px", backgroundColor: "white" }}
      >
        <div className="container">
         
        <div className="flag-container">
                            <img src='../india.png' className="flag-icon" alt ="india"></img><span style={{ color: "white" }}>|</span>&nbsp;&nbsp;
                            <img src='../us.png' className="flag-icon" alt ="US"></img><span style={{ color: "white" }}>|</span>&nbsp;&nbsp;
                            <img src='../canda.png' className="flag-icon" alt ="Canda"></img>
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
        className="navbar navbar-expand-md fixed-top navbar-dark py-lg-0 px-lg-5"
        data-wow-delay="0.1s" id="bottomNavbar" style={{ backgroundColor: "#F2F2F2", height: "80px" }}
      >
        <a
          href="/"
          className="navbar-brand ms-3 d-lg-none"
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
          className="navbar-toggler me-3"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav me-auto p-3 p-lg-0" >
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
              className="nav-item nav-link"
              id="homeleft"
              rel="noopener noreferrer"
            >
              Home
            </a>
            &nbsp;&nbsp;&nbsp;
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                rel="noopener noreferrer"
              >
                About Us
              </a>
              <div
                className="dropdown-menu border-0 rounded-0 rounded-bottom m-0"
                style={{ marginTop: "-20px" }}
              >
                <a
                  href="/about-us"
                  className="dropdown-item"
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
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle active"
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
                  className="dropdown-item active"
                  rel="noopener noreferrer"
                >
                  Website Development
                </a>
                <a
                  href="/services/mobile-app-development"
                  className="dropdown-item "
                  rel="noopener noreferrer"
                >
                  Mobile App Development
                </a>
                <a
                  href="/Services/graphics-ui-ux"
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
                className="btn btn-primary rounded-pill"
                id="quote"
                style={{ animation: "pulse 1.1s ease infinite", color: "white" }}
              >
                Free 30-Min Consultation
              </button>
            </a>

          </div>
        </div>
      </nav>
      <div className="container-fluid page-header py-5 mb-5 fadeIn" id="webBanner">
        <h1 id="ah1">
          WEBSITES &<br /> WEB APP
          <br />
          development
          <hr id="ahr" />
        </h1>
        <p id="ahh">
          We Develop Customized Websites & <br />
          Web Apps For All Your Business Need
        </p>
      </div>
      <br />
      <EmailForm />
      <br />
      {/* Aboutus */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="img-border">
                <img className="img-fluid" ref={targetDivRef} src={p1} alt="world className web design and development company 
in usa" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h5 className="bg-white  text-primary" id="whoweare">
                  WEBSITE DEVELOPMENT
                </h5>
                <h2 className="display-6 mb-4" id="whoweare">
                  Agile Web Solutions To Boost{" "}
                  <span className="text-primary" id="whoweare">
                    {" "}
                    Your Brand Growth{" "}
                  </span>
                </h2>
                <p>
                  Website and Web App Development is the first impression of any
                  business and we totally understand that. There is a huge
                  demand for web applications like CRM (customer relationship
                  management) which allows business people to enhance their
                  sales and build long-term customer relationships.
                  <br />
                  The first impression you make on your potential customers is
                  through your official website and Omka Tech understands that
                  this first impression better be impressive.
                </p>  <p>
                  Omka Tech team of professional web app developers is located near
                  you and is ready to help you create the website of your dreams. With years
                  of experience in the industry, we give you the best outsourcing.
                </p>


              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* service call */}
      <div
        className="containe"
        id="homecall"
        style={{ backgroundColor: "#04165D", width: "100%" }}
      >
        <br />{" "}
        <h2
          className="text-white animated zoomIn"
          style={{
            fontWeight: "bold",
            marginTop: "-8px",
          }}
          id="homeh2"
        >
          Want to develop a web platform to smooth out the business process?
          <br />{" "}
          <h4
            id="homeh4"
            className="text-white animated zoomIn"
            style={{
              textAlign: "center",

              fontWeight: "normal",
            }}
          >
            Reach out to us.
            <br />
            <br />
            <a
              href="/contact-us"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "White" }}
            >
              <button
                type="button"
                className="btn btn-primary rounded-pill"
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
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h5 className=" bg-white  text-primary" id="whoweare">
              Process We Follow
            </h5>
            <h3 className="display-6 mb-4" id="whoweare">
              Get Customized Web Portals For Precise{" "}
              <span className="text-primary"> Business Needs</span>
            </h3>
          </div>
          <div className="row g-4">
            {" "}
            <div className="container">
              {/* 1 */}
              <div className="row align-items-center connecting-lines d-flex">
                <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                  <div className="circle">
                    <i className="fa fa-chec">
                      {" "}
                      <img src={req} alt="text"></img>
                    </i>
                  </div>
                </div>
                <div className="col-6 text-left">
                  <h4>Requirement Analysis</h4>
                  <p>
                    We analyze the purpose of the product, the target audiences
                    and do in-depth research with the help of brilliant tools.
                  </p>
                </div>
              </div>

              <div className="row timeline">
                <div className="col-2">
                  <div className="corner top-right"></div>
                </div>
                <div className="col-8">
                  <hr />
                </div>
                <div className="col-2">
                  <div className="corner left-bottom"></div>
                </div>
              </div>
              {/* 2 */}
              <div className="row align-items-center justify-content-end connecting-lines d-flex">
                <div className="col-6 text-right">
                  <h4> Defining</h4>
                  <p style={{ textAlign: "right" }}>
                    We draft the used cases and check the feasibility of the
                    product by building storyboards for each case.
                  </p>
                </div>
                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div className="circle">
                    <i className="fa fa-chec">
                      <img
                        src={uiux}
                        style={{ marginLeft: "-3px" }}
                        alt="web development service"
                      ></img>
                    </i>
                  </div>
                </div>
              </div>

              <div className="row timeline">
                <div className="col-2">
                  <div className="corner right-bottom"></div>
                </div>
                <div className="col-8">
                  <hr />
                </div>
                <div className="col-2">
                  <div className="corner top-left"></div>
                </div>
              </div>
              {/* 3 */}
              <div className="row align-items-center connecting-lines d-flex">
                <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                  <div className="circle">
                    <i className="fa fa-chec">
                      {" "}
                      <img
                        src={proto}
                        style={{ marginLeft: "-3px" }}
                        alt="web development service"
                      ></img>
                    </i>
                  </div>
                </div>
                <div className="col-6 text-left">
                  <h4>Designing</h4>
                  <p>
                    We then create final designs of various screens using smart
                    tools.
                  </p>
                </div>
              </div>
              <div className="row timeline">
                <div className="col-2">
                  <div className="corner top-right"></div>
                </div>
                <div className="col-8">
                  <hr />
                </div>
                <div className="col-2">
                  <div className="corner left-bottom"></div>
                </div>
              </div>
              {/* 4 */}
              <div className="row align-items-center justify-content-end connecting-lines d-flex">
                <div className="col-6 text-right">
                  <h4>Implementation</h4>
                  <p style={{ textAlign: "right" }}>
                    The development team is introduced that starts developing
                    the solution according to the designs.
                  </p>
                </div>
                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div className="circle">
                    <i className="fa fa-chec">
                      {" "}
                      <img
                        src={app}
                        style={{ marginLeft: "-3px" }}
                        alt="web development service"
                      ></img>
                    </i>
                  </div>
                </div>
              </div>
              <div className="row timeline">
                <div className="col-2">
                  <div className="corner right-bottom"></div>
                </div>
                <div className="col-8">
                  <hr />
                </div>
                <div className="col-2">
                  <div className="corner top-left"></div>
                </div>
              </div>
              {/* 5 */}
              <div className="row align-items-center connecting-lines d-flex">
                <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                  <div className="circle">
                    <i className="fa fa-chec">
                      {" "}
                      <img src={test} alt="web development service"></img>
                    </i>
                  </div>
                </div>
                <div className="col-6 text-left">
                  <h4> Testing</h4>
                  <p>
                    We test each and every component to make sure that our
                    solution fits the requirement.
                  </p>
                </div>
              </div>
              <div className="row timeline">
                <div className="col-2">
                  <div className="corner top-right"></div>
                </div>
                <div className="col-8">
                  <hr />
                </div>
                <div className="col-2">
                  <div className="corner left-bottom"></div>
                </div>
              </div>
              {/* 6 */}
              <div className="row align-items-center justify-content-end connecting-lines d-flex">
                <div className="col-6 text-right">
                  <h4> Deployment & Maintenance</h4>
                  <p style={{ textAlign: "right" }}>
                    We make the final delivery and provide knowledge transfer to
                    the client for the control and administer the solution.
                  </p>
                </div>
                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div className="circle">
                    <i className="fa fa-chec">
                      {" "}
                      <img
                        src={dep}
                        style={{ marginLeft: "-3px" }}
                        alt="web development service"
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

      {/* technology */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h6 className=" bg-white  text-primary " id="whoweare">
              Technologies We Work
            </h6>
            <h2 className="display-6 mb-4" id="whoweare">
              Take a peek at some of our{" "}
              <span className="text-primary" id="whoweare">
                {" "}
                Core Technologies
              </span>
            </h2>
          </div>
          <div className="row g-4" id="coretech">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              id="webcard"
              data-wow-delay="0.1s"
            >
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href=""
                rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={php} alt="core php service" />
                <h4 className="mb-0" id="h4hover">
                  Core PHP
                </h4>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              id="webcard"
              data-wow-delay="0.3s"
            >
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href=""
                rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={laravel} alt="laravel service" />
                <h4 className="mb-0" id="h4hover">
                  Laravel
                </h4>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              id="webcard"
              data-wow-delay="0.5s"
            >
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href=""
                rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={code} alt="codeigniter service" />
                <h4 className="mb-0" id="h4hover">
                  Codeigniter
                </h4>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              id="webcard"
              data-wow-delay="0.1s"
            >
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href=""
                rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={react} alt="reactjs service" />
                <h4 className="mb-0" id="h4hover">
                  React JS
                </h4>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              id="webcard"
              data-wow-delay="0.3s"
            >
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href=""
                rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={node} alt="nodejs service" />
                <h4 className="mb-0" id="h4hover">
                  Node JS
                </h4>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              id="webcard"
              data-wow-delay="0.5s"
            >
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href=""
                rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={python} alt="python service" />
                <h4 className="mb-0" id="h4hover">
                  Python
                </h4>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              id="webcard"
              data-wow-delay="0.1s"
            >
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href=""
                rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={Shopify} alt="shopify service" />
                <h4 className="mb-0" id="h4hover">
                  Shopify
                </h4>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              id="webcard"
              data-wow-delay="0.3s"
            >
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href=""
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid rounded mb-4"
                  src={Wordpress}
                  alt="wordpress service"
                />
                <h4 className="mb-0" id="h4hover">
                  Wordpress
                </h4>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              id="webcard"
              data-wow-delay="0.5s"
            >
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href=""
                rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={Angular} alt="angular service" />
                <h4 className="mb-0" id="h4hover">
                  Angular
                </h4>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              id="webcard"
              data-wow-delay="0.5s"
            >
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href=""
                rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={Magento} alt="magento service" />
                <h4 className="mb-0" id="h4hover">
                  Magento
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* {why choose Us */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className=" bg-white  text-primary " id="whoweare">
                  Why Choose Us
                </h6>
                <h1 className="display-6 mb-4" id="whoweare">
                  Benefits you get while working with Omka Tech
                </h1>
                <p className="mb-4">Omka Tech provides professional web development services to
                  our clients and we've delivered a wide range of projects in development.
                  We are the leader in our field with over 8-9 years of experience. we have
                  web app developers, which are experts in their fields and they make any
                  website in a time frame. </p>
                <div className="row g-4">
                  <div className="col-12">
                    <div className="skill">
                      <div className="d-flex justify-content-between">
                        {/* <p className="mb-2">Digital Marketing</p><br/><br/> */}
                      </div>

                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ SEO Friendly Website
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Responsive Web Design
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Attractive & Professional
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ User Friendly
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Speed Optimization
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Professional Website Content
                      </h6>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="skill">
                      <div className="d-flex justify-content-between">
                        {/* <p className="mb-2">SEO & Backlinks</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="skill">
                      <div className="d-flex justify-content-between">
                        {/* <p className="mb-2">Design & Development</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid" ref={targetDivRef1} src={hero} alt="high quality work with Omka Tech" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* conatct */}
      <ContactForm />
      {/* footer */}
      <Footer />

      {/* get in touch */}
      <GetInTounch />
    </div>
  );
};

export default WebDev;
