import React, { useState,useEffect,useRef } from "react";
import "../../css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Flogo from "../../../images/01 logo.png";
import "../../css/style.css";
import p1 from "../../../images/marketing/section 1.jpg";
import Helmet from "react-helmet";
import hero from "../../../images/marketing/section 2.jfif";
import web from "../../../images/marketing/01.PNG";
import mobile from "../../../images/marketing/02.PNG";
import Marketing from "../../../images/marketing/03.png";
import UI from "../../../images/marketing/04.png";
import email from "../../../images/marketing/05.png";
import seo from "../../../images/marketing/06.png";

import $ from "jquery";
import Footer from "../Footer";

import ContactForm from "../ContactForm";
import GetInTounch from "../GetInTounch";
const SocialMedia = () => {
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

  // popup
  const [NameP, setNameP] = useState("");
  console.log(NameP);
  const [PhoneP, setPhoneP] = useState("");
  const [WebUrl, setURL] = useState("");
  const [EmailP, setEmailP] = useState("");
  const [ProjectP, setProjectP] = useState("");
  const [show1, setShow1] = useState(true);

  const navigate = useNavigate();

  const submitNow1 = (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way.
navigate("/Thankyou")
    const url = 'https://www.omkatech.com/Marketing.php';
    const formData = new FormData();
    formData.append("Name", NameP);
    formData.append("Email", EmailP);
    formData.append("WebURL", WebUrl);
    formData.append("Phone", PhoneP);
    formData.append("Project", ProjectP);

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

    setNameP("");
    setEmailP("");
    setURL("");
    setPhoneP("");
    setProjectP("");
  };




  return (
    <div>
      <Helmet>
        <script>{`{"gtag('event', 'conversion', {'send_to': 'AW-676251754/uHhwCNibqokYEOqQu8IC'});"}`}</script>
      </Helmet>
      <Helmet>
        {/* <title>Top Digital Marketing Company in USA - Omka Tech</title> */}
        <meta
          name="description" data-react-helmet="true"
          content="Omka Tech is one of World's leading digital marketing agencies offering services like SEO, SMO, PPC, content marketing and social media marketing. Hire our services to boost your business rapidly!"
        />
        <meta
          name="keywords" data-react-helmet="true"
          content="Digital marketing company, best Digital 
          marketing company, Marketing agency, Digital marketing agency, digital 
          marketing company in usa, digital marketing services in usa."
        />
        <link rel="canonical" href="https://www.omkatech.com/services/social-media-
marketing"></link>

        <meta name="robots" content="index, follow" />
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
      <br />
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
                  href="/Services/graphics-ui-ux"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Graphics & UI/UX
                </a>
                <a
                  href="/services/growth-marketing"
                  className="dropdown-item active"
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
                className="btn btn-primary "
                id="quote"
                style={{ animation: "pulse 1.1s ease infinite", color: "white",borderRadius:"2px" }}
              >
                Free 30-Min Consultation
              </button>
            </a>

          </div>
        </div>
      </nav>
      <div
        className="container-fluid page-header py-5 mb-5 fadeIn"
        id="MarketingBanner"
      >
        <div className="container text-center py-5">
          <h2 className="display-4 text-white animated slideInDown mb-3"></h2>
        </div>
      </div>
      <br />
      <button
        type="button"
        className="btn btn-primary rounded-pill"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        style={{ animation: "pulse 1.1s ease infinite", fontSize: "14px", color: "white" }}
      >
        GET FREE WEBSITE HEALTH AUDIT REPORT NOW
      </button>

      <br />
      {/* abouts */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="img-border">
                <img className="img-fluid"  ref={targetDivRef} src={p1} alt="top social media marketing agency in usa" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h1 className=" bg-white  text-primary" id="whoweare" style={{ fontSize: "15px" }}>
                  DIGITAL MARKETING SERVICE IN USA
                </h1>
                <h2 className="display-6 mb-4" id="whoweare">
                  More Traffic, More Conversions
                  <span className="text-primary" id="whoweare">
                    , More Results
                  </span>
                </h2>
                <p>
                  Our Digital Marketing Services are unique to the industry with
                  verifiable results. Every digital marketing strategy would
                  likely comprise various digital marketing channels. Because
                  every business is unique, so you won't market yourself like
                  anyone else and that's why we don't offer a
                  'one-size-fits-all' solution.
                </p>
                <p className="mb-4">
                  nstead, we offer a wide range of digital marketing services
                  for our clients, enabling them to select the ones that are the
                  best for their business or to enlist the help of our team in
                  crafting a solution which best suits your needs and goals.Our
                  SEO team has a track record of improving the organic ranking
                  of a website with strategic on- and offsite marketing tactics.
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
        <br /> <br />
        <h2
          className="text-white animated zoomIn"
          style={{
            fontWeight: "bold",
            marginTop: "-11px",
          }}
          id="homeh2"
        >
          {" "}
          Are you looking for unique digital marketing services with verifiable
          results?
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
              rel="noopener noreferrer"
              href="/contact-us"
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
            style={{ maxWidth: "600px",marginTop:"44px" }}
          >
            <h6 className=" bg-white  text-primary" id="whoweare">
              Services We Provide
            </h6>
            <h2 className="display-6 mb-4" id="whoweare">
              No one visits the{" "}
              <span id="whoweare" className="text-primary">
                Website
              </span>{" "}
              if they are not aware.
            </h2>
          </div>
          <div className="row g-4">
            <div className="container-fluid">
              <div className="row mb-5">
                <div className="col-12 col-sm-6 col-md-3 m-auto" id="team2">
                  <div
                    className="car shadow"
                    style={{ border: "1px solid darkgrey", borderRadius: "5%" }}
                  >
                    <img
                      src={web}
                      alt="search engine optimization service"
                      className="card-img-top"
                      id="teamimg"
                    /><br /><br />
                    <div className="card-body">
                      <h3 className="text-center" style={{ fontSize: "1rem" }}>
                        Search Engine Optimization
                        <br />
                        (SEO)
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3 m-auto" id="team2">
                  <div
                    className="car shadow"
                    style={{ border: "1px solid darkgrey", borderRadius: "5%" }}
                  >
                    <img
                      src={mobile}
                      alt="social media optimization service"
                      className="card-img-top"
                      id="teamimg"
                    /><br /><br />
                    <div className="card-body">
                      <h3 className="text-center" style={{ fontSize: "1rem" }}>
                        Social Media Optimization
                        <br />
                        (SMO)
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3 m-auto" id="team2">
                  <div
                    className="car shadow"
                    style={{ border: "1px solid darkgrey", borderRadius: "5%" }}
                  >
                    <img
                      src={Marketing}
                      alt="pay-per-click advertising service"
                      className="card-img-top"
                      id="teamimg"
                    /><br /><br />
                    <div className="card-body">
                      <h3 className="text-center" style={{ fontSize: "1rem" }}>
                        Pay-Per-Click Advertising
                        <br />
                        (PPC)
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12 col-sm-6 col-md-3 m-auto" id="team2">
                  <div
                    className="car shadow"
                    style={{ border: "1px solid darkgrey", borderRadius: "5%" }}
                  >
                    <img
                      src={UI}
                      alt="content marketing service"
                      className="card-img-top"
                      id="teamimg"
                    /><br /><br />
                    <div className="card-body">
                      <h3 className="text-center" style={{ fontSize: "1rem" }}>
                        Content Marketing
                      </h3>
                    </div>
                    <br />
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3 m-auto" id="team2">
                  <div
                    className="car shadow"
                    style={{ border: "1px solid darkgrey", borderRadius: "5%" }}
                  >
                    <img
                      src={email}
                      alt="email marketing service "
                      className="card-img-top"
                      id="teamimg"
                    /><br /><br />
                    <div className="card-body">
                      <h3 className="text-center" style={{ fontSize: "1rem" }}>
                        Email Marketing
                      </h3>
                    </div>
                    <br />
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3 m-auto" id="team2">
                  <div
                    className="car shadow"
                    style={{ border: "1px solid darkgrey", borderRadius: "5%" }}
                  >
                    <img
                      src={seo}
                      alt="social media marketing service"
                      className="card-img-top"
                      id="teamimg"
                    /><br /><br />
                    <div className="card-body">
                      <h3 className="text-center" style={{ fontSize: "1rem" }}>
                        Social Media Marketing
                        <br />
                        (SMM)
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
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className=" bg-white text-primary" id="whoweare">
                  What We Do?
                </h6>
                <h2 className="display-6 mb-4" id="whoweare">
                  We create Strategies to reach
                  <span className="text-primary" id="whoweare">
                    {" "}
                    Target Audiences
                  </span>
                </h2>
                <p className="mb-4">Omka Tech is the best social media marketing company that offers
                  high-quality digital marketing services. We are passionate about building
                  innovative digital solutions that bring your business to the next level.</p>
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
                        {" "}
                        ✓ Drive quality traffic to your site
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        {" "}
                        ✓ Boost the popularity of your product{" "}
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        {" "}
                        ✓ Generate considerable interest in your business
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        {" "}
                        ✓ Increase ranking on various platforms
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        {" "}
                        ✓ Help establish a business reputation{" "}
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        {" "}
                        ✓ Increase revenue and sales
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        {" "}
                        ✓ Position you as an expert in the field(s)
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
                <img className="img-fluid" ref={targetDivRef1} src={hero} alt="reach the target audience with social media 
marketing service" />
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
      <div>
        {show1 && (
          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div
                    className="contact-page-form"
                    method="post"
                    style={{ marginTop: "-20px" }}
                  >
                    <form onSubmit={submitNow1}>
                      <div className="containerBb" style={{ backgroundColor: "white" }}>
                        {" "}
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-hidden="true"
                        >
                          ×
                        </button>
                        <div className="brand-logoBb1"></div>
                        <div className="brand-titleBb">Book Now</div>
                        <div className="inputsBb">
                          <label id="Booklabelb">Name</label> :&nbsp;
                          <input
                            type="text"
                            placeholder="Enter Full Name"
                            id="inputBookb"
                            value={NameP}
                            onChange={(e) => {
                              setNameP(e.target.value);
                            }}
                            required
                          />{" "}
                          <label id="Booklabelb">&nbsp;Email</label>{" "}
                          :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="email"
                            placeholder="Enter Email"
                            id="inputBookb"
                            value={EmailP}
                            onChange={(e) => {
                              setEmailP(e.target.value);
                            }}
                            required
                          />{" "}
                          <label id="Booklabelb">Phone</label> :&nbsp;
                          <input
                            type="text"
                            placeholder="Enter Phone"
                            id="inputBookb"
                            value={PhoneP}
                            onChange={(e) => {
                              setPhoneP(e.target.value);
                            }}
                            required
                          />
                          <label id="Booklabelb">&nbsp;URL</label>{" "}
                          :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="text"
                            placeholder="Enter URL"
                            id="inputBookb"
                            value={WebUrl}
                            onChange={(e) => {
                              setURL(e.target.value);
                            }}
                            required
                          />
                          <label id="Booklabelb">&nbsp;Project</label> :&nbsp;
                          <textarea
                            type="text"
                            placeholder="Enter Project"
                            id="inputBookb1"
                            value={ProjectP}
                            name="Project"
                            onChange={(e) => {
                              setProjectP(e.target.value);
                            }}
                          />
                          <button
                            type="submit"
                            id="bookNowb"

                          >
                            <a
                              href=""
                              style={{ color: "white" }}
                              rel="noopener noreferrer"
                            >
                              Submit{" "}
                            </a>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialMedia;
