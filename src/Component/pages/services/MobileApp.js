import React,{useEffect,useRef} from "react";
import Flogo from "../../../images/01 logo.png";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import p1 from "../../../images/mobile app.jpg";
import Helmet from "react-helmet";
import CourseCard from "./CourseCard";
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
import PageTitles from './PageTitles';


const MobileApp = () => {

    // useEffect(() => {
    //   document.title = PageTitles['/services/mobile-app-development'];
    // }, []);

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
        {/* <title>Best Mobile App Development Company in USA - Omka Tech"</title> */}
        <meta
          name="description" data-react-helmet="true"
          content="We at Omka Tech, design, develop and deploy custom mobile apps tailored to your business needs. Whether it's iOS, Android, or cross-platform solutions, we ensure user-friendly, feature-rich, and visually stunning applications that engage and retain your audience."
        />
        <meta
          name="keywords" data-react-helmet="true"
          content="Custom mobile app development, mobile app 
          development, Apps Development, application development, Mobile 
          application development"
        />
        <link rel="canonical" href="https://www.omkatech.com/services/mobile-app-
development"></link>

        <meta name="robots" content="index, follow" />
      </Helmet>
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
                            <a href="tel:+1 (437) 255-9950"><img src='../po.jpg' id="flag" alt="US"></img> &nbsp;+1 (437) 255-9950</a>&nbsp; |&nbsp;&nbsp;

                            <a href="tel:+91 9717511913"><img src='../in.jpg' id="flag" alt="india" ></img>&nbsp; +91 9717511913</a>
                        </div>

                    </div>
        </div>
      </nav><br />
      {/* navbar */}
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
              rel="noopener noreferrer"
              style={{
                height: "56px",
                // marginTop: "4px",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <img
                src={Flogo}
                style={{
                  height: "55px",
                  marginTop: "10px",
                  marginLeft: "-40px",
                }}
                id="hidelogo"
                alt="Omka Tech logo"
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
                  className="dropdown-item active"
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
        id="MobileBanner"
      >
        <h1 id="ah" style={{ fontSize: "63px" }}>
          custom mobile
          <br />
          app development
          <hr id="ahr" />
        </h1>
        <p id="ahh">
          experience a World className <br />
          mobile app development service
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
                <img className="img-fluid" ref={targetDivRef} src={p1} alt="mobile app development service" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h5 className=" bg-white  text-primary " id="whoweare">
                  MOBILE APP DEVELOPMENT
                </h5>
                <h2 className="display-6 mb-4" id="whoweare">
                  AFFORDABLE, FEATURE RICH, CUSTOMIZED,{" "}
                  <span className="text-primary" id="whoweare">
                    EASY TO USE MOBILE APPS{" "}
                  </span>
                </h2>
                <p>
                  We develop mobile apps for various operating systems and
                  mobile platforms, Catering to your diverse business needs and
                  helping you grow in the industry. Android, iOS, or Hybrid,
                  whatever it may be and we are here to help you with our
                  efficient mobile solutions.We are the best
                  custom mobile app development.
                </p>
                <p >
                  We also build cross-platform mobile applications that will
                  work on any device or platform. Companies and organizations
                  choosing OMKA TECH to develop the best-suited custom mobile
                  application for their business needs can be assured that the
                  final end product, no matter on which technology it's built
                  on, will be secure, scalable, agile, and sustainable in
                  whatever environment it's hosted.
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
        <h3
          className="text-white animated zoomIn"
          style={{
            fontWeight: "bold",
            marginTop: "-11px",
          }}
          id="homeh2"
        >
          Let’s Grow your Business by developing your Dream Mobile App!
          <br />{" "}
          <p
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
          </p>
        </h3>
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
            <h6 className=" bg-white text-primary " id="whoweare">
              Process We Follow
            </h6>
            <h2 className="display-6 mb-4" id="whoweare">
              Competence to provide Customized{" "}
              <span className="text-primary" id="whoweare">
                Mobile App Solution
              </span>
            </h2>
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
                      <img
                        src={req}
                        style={{ marginLeft: "-3px" }}
                        alt="mobile app development service"
                      ></img>
                    </i>
                  </div>
                </div>
                <div className="col-6 text-left ">
                  <h4>Requirement Analysis</h4>
                  <p>
                    We gather the requirement of the product and also provide
                    our feedback on the same
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
                  <h4> UI/UX Designing </h4>
                  <p style={{ textAlign: "right" }}>
                    We use the latest technologies and tools for the designing
                    like Figma
                  </p>
                </div>
                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div className="circle">
                    <i className="fa fa-chec">
                      <img
                        src={uiux}
                        style={{ marginLeft: "-3px" }}
                        alt="mobile app development service"
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
                        alt="mobile app development service"
                      ></img>
                    </i>
                  </div>
                </div>
                <div className="col-6 text-left">
                  <h4>Prototyping</h4>
                  <p>
                    After designing, prototyping of the application is the major
                    step where all the final screens are prepared to be sent to
                    the development team.
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
                  <h4>App Development</h4>
                  <p style={{ textAlign: "right" }}>
                    The development team begins the screen-by-screen
                    functionality creation on the preferred platforms
                  </p>
                </div>
                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div className="circle">
                    <i className="fa fa-chec">
                      {" "}
                      <img
                        src={app}
                        style={{ marginLeft: "-3px" }}
                        alt="mobile app development service"
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
                      <img src={test} alt="mobile app development service"></img>
                    </i>
                  </div>
                </div>
                <div className="col-6 text-left">
                  <h4> Testing</h4>
                  <p>
                    We test each and every component to make sure that our
                    solution fits the requirement and we provide a bug-free app.{" "}
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
                    We make the final upload of the App on Android and iOS
                    stores and provide knowledge transfer to the client for the
                    control and administer the solution.
                  </p>
                </div>
                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div className="circle">
                    <i className="fa fa-chec">
                      {" "}
                      <img
                        src={dep}
                        style={{ marginLeft: "-3px" }}
                        alt="mobile app development service"
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
            style={{ maxWidth: "600px" }}
          >
            <h6 className=" bg-white  text-primary " id="whoweare">
              Technologies We Work
            </h6>
            <h2 className="display-6 mb-4" id="whoweare">
              Take a peek at some of our{" "}
              <span id="whoweare" className="text-primary">
                Core Technologies{" "}
              </span>
            </h2>
          </div>
          <div className="row g-4">
            <CourseCard />
          </div>
        </div>
      </div>
      {/* {why choose Us */}
      <div className="container-xxl py-5 " style={{ marginTop: "-40px" }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className=" bg-white text-primary " id="whoweare">
                  Why Choose Us
                </h6>
                <h2 className="display-6 mb-4" id="whoweare">
                  Benefits you get while working with{" "}
                  <span className="text-primary" id="whoweare">
                    Omka Tech
                  </span>
                </h2>
                <p className="mb-4">Omka Tech provides mobile app and web development services.
                  Our goal is to provide you with the best development solutions possible that
                  are both functional, efficient and easy to use. We take a strategic approach
                  to creating unique brand identities by working with the industry's best
                  developers.</p>
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
                        ✓ User Friendly Apps
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        {" "}
                        ✓ 100% Transparency{" "}
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        {" "}
                        ✓ Free 100 Day Support{" "}
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        {" "}
                        ✓ On-Time Delivery
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        {" "}
                        ✓ Complete Source code{" "}
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        {" "}
                        ✓ Agile Development
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        {" "}
                        ✓ Cross Platform Apps
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
                <img className="img-fluid" ref={targetDivRef1} src={hero} alt="mobile app development with Omka Tech" />
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
      <GetInTounch />
    </div>
  );
};

export default MobileApp;
