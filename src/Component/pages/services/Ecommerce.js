import React,{useEffect,useRef} from "react";
import "../../css/bootstrap.min.css";
import Flogo from "../../../images/01 logo.png";
import "../../css/style.css";
import p1 from "../../../images/raedymade/side image section 1.jpg";
import Helmet from "react-helmet";
import one from "../../../images/ecom/01.png";
import two from "../../../images/ecom/02.png";
import three from "../../../images/ecom/03.png";
import four from "../../../images/ecom/04.png";
import five from "../../../images/ecom/05.png";
import six from "../../../images/ecom/06.png";
import seven from "../../../images/ecom/07.png";
import hero from "../../../images/hero-img.jpg";
import i1 from "../../../images/raedymade/03 Icon/01.png";
import i2 from "../../../images/raedymade/03 Icon/02.png";
import i3 from "../../../images/raedymade/03 Icon/03.png";
import Magento from "../../../images/technology/10.png";
import Shopify from "../../../images/technology/07.png";
import Woocom from "../../../images/technology/11.PNG";
import Wix from "../../../images/technology/12.png";
import php from "../../../images/technology/01.png";
import react from "../../../images/technology/04.png";
import node from "../../../images/technology/05.png";
import $ from "jquery";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import GetInTounch from "../GetInTounch";
import EmailForm from "../EmailForm";
const Ecommerce = () => {
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
        {/* <title>
        Ecommerce Website & Apps Development Company- Omka Tech
        </title> */}
        <meta
          name="description" data-react-helmet="true"
          content="Omka Tech is a top-rated Ecommerce Website & Apps Development Company. Our expertise in creating seamless 
          high-performance websites and user-friendly apps can enhance your customer experience and sales. Discover our Ecommerce solutions!"
        />
        <meta
          name="keywords" data-react-helmet="true"
          content="Ecommerce development company, 
          ecommerce development agency, ecommerce website development, 
          ecommerce web development,custom ecommerce development company"
        />
        <link rel="canonical" href="https://www.omkatech.com/services/e-commerce-
web-apps"></link>

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
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Enterprise Software Solution
                </a>
                <a
                  href="/services/e-commerce-web-apps"
                  class="dropdown-item active"
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
      <div class="container-fluid page-header py-5 mb-5 fadeIn" id="EcomBanner">
        <h1 id="ah1">
          E-COMMERCE
          WEBSITE &<br />APPS DEVELPMENT
          <hr id="seohr" />
        </h1>
        <p id="ahh">
          E-Commerce Web And Mobile Apps As <br />
          Per Your Business Requirements{" "}
        </p>
        <div id="bannericon" className="text-left">
          <li>
            <img src={Magento} id="e1" alt="e-commerce web and app service"></img>
          </li>
          <li>
            <img src={Shopify} alt="e-commerce web and app service"></img>
          </li>
          <li>
            <img src={Woocom} alt="e-commerce web and app service"></img>
          </li>
          <li>
            <img src={Wix} alt="e-commerce web and app service"></img>
          </li>
          <li>
            <img src={php} alt="e-commerce web and app service"></img>
          </li>
          <li>
            <img src={react} alt="e-commerce web and app service"></img>
          </li>
          <li>
            <img src={node} alt="e-commerce web and app service"></img>
          </li>
        </div>
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
                <img class="img-fluid" ref={targetDivRef} src={p1} alt="ecommerce web apps development company" />
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="h-100">
                <h5 class="bg-white  text-primary" id="whoweare">
                  WEBSITE DEVELOPMENT
                </h5>
                <h2 class="display-6 mb-4" id="whoweare">
                  Build Your Online Store Now With{" "}
                  <span class="text-primary" id="whoweare">
                    {" "}
                    Our Custom E-Commerce Service{" "}
                  </span>
                </h2>
                <p>To create a successful online store that attracts a large audience and drives conversions, it is crucial to have a strong online presence that aligns with your audience’s expectations. This requires expert knowledge in eCommerce website and mobile app development, with a laser focus on user experience (UX).
                </p>
                <p class="mb-4">
                  In order to capture the attention of your desired audience, your e-commerce store should adhere to industry standards and incorporate the latest design trends, resulting in a visually stunning and conversion-oriented platform.
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
          {" "}
          Having an e-commerce business and looking to increase your business
          sale?
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
              href="/contact-us"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "White" }}
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
            <h6 class=" bg-white  text-primary" id="whoweare">
              Process We Follow
            </h6>
            <h2 class="display-6 mb-4" id="whoweare">
              How We Create An Amazing <br />
              <span class="text-primary">E-Commerce Store for You</span>
            </h2>
          </div>
          <div class="row g-4" id="ecomrow">
            <div class="container-fluid">
              <div class="row mb-5">
                <div class="col-12 col-sm-6 col-md-3 m-auto" id="team3">
                  <div
                    class="car shadow ecomcardh"
                    style={{ border: "1px solid darkgrey", borderRadius: "5%" }}
                  >
                    <div id="teamimgE">
                      <img src={i1} alt="e-commerce web and app service" class="card-img-top1" />
                    </div><br /><br />
                    <div class="card-body">
                      <h3
                        class="text-center"
                        style={{ fontSize: "1.4rem", color: "white" }}
                      >
                        Planning
                      </h3>
                      <br />
                      <div id="ecomcard">
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        &nbsp; Understand your audience
                        <br />
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        &nbsp; Build a well-defined buyer persona
                        <br />
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        &nbsp; Choose the right development platform
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="team3">
                  <div
                    class="car shadow ecomcardh"
                    style={{ border: "1px solid darkgrey", borderRadius: "5%" }}
                  >
                    {" "}
                    <div id="teamimgE">
                      <img src={i2} alt="e-commerce web and app service" class="card-img-top1" />
                    </div><br /><br />
                    <div class="card-body">
                      <h3
                        class="text-center"
                        style={{ fontSize: "1.4rem", color: "white" }}
                      >
                        Implementation
                      </h3>
                      <br />
                      <div id="ecomcard">
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        &nbsp; Draw a development roadmap
                        <br />
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        &nbsp; Implement the right themes
                        <br />
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        &nbsp; Develop, enhance, and deploy the store
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 m-auto" id="team3">
                  <div
                    class="car shadow ecomcardh "
                    style={{ border: "1px solid darkgrey", borderRadius: "5%" }}
                  >
                    <div id="teamimgE">
                      {" "}
                      <img src={i3} alt="e-commerce web and app service" class="card-img-top1" />
                    </div>
                    <br /><br />
                    <div class="card-body">
                      <h3
                        class="text-center"
                        style={{ fontSize: "1.4rem", color: "white" }}
                      >
                        Post-Deployement Support
                      </h3>
                      <br />
                      <div id="ecomcard">
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        &nbsp; Optimization of e-commerce store
                        <br />
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        &nbsp; Monitoring and maintenance
                        <br />
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        &nbsp; Troubleshooting and support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* technology */}
      <div class="container-xxl py-5" style={{ marginTop: "-40px" }}>
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h6 class=" bg-white  text-primary " id="whoweare">
              Technologies We Work
            </h6>
            <h2 class="display-6 mb-4" id="whoweare">
              E-Commerce Development Platforms <br />
              <span class="text-primary" id="whoweare">
                We Use
              </span>
            </h2>
            <br />
            <p>
              We do E-Commerce Website Development with the usage of platforms
              like Magento, Shopify, PHP, WordPress, and Java. For the
              E-Commerce Mobile Apps, we do Native Apps or Flutter Apps.
              <br />
              We help you choose the preferred technology as per your business
              needs and requirements.
            </p>
          </div>
          <br />
          <div class="row g-4">
            <div class="wrapper2">
              <h2> </h2>
              <div class="team">
                <div class="team_member" id="team1">
                  <div class="team_imgE">
                    <img src={one} alt="magento development service" />
                  </div>
                </div>
                <div class="team_member" id="team1">
                  <div class="team_imgE">
                    <img src={two} alt="shopify development" />
                  </div>
                </div>
                <div class="team_member" id="team1">
                  <div class="team_imgE">
                    <img src={three} alt="woo commerce development service" />
                  </div>
                </div>
                <div class="team_member" id="team1">
                  <div class="team_imgE">
                    <img src={four} alt="wix development service" />
                  </div>
                </div>
              </div>
              <br />

              <div class="team">
                <div class="team_member" id="team1">
                  <div class="team_imgE">
                    <img src={five} alt="php development service" />
                  </div>
                </div>
                <div class="team_member" id="team1">
                  <div class="team_imgE">
                    <img src={six} alt="react js development service" />
                  </div>
                </div>
                <div class="team_member" id="team1">
                  <div class="team_imgE">
                    <img src={seven} alt="node js development service" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {why choose Us */}
      <div class="container-xxl py-5" id="chooseEcom">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="h-100">
                <h6 class=" bg-white  text-primary " id="whoweare">
                  Why Choose Us
                </h6>
                <h2 class="display-6 mb-4" id="whoweare">
                  Benefits you get while working with Omka Tech
                </h2>
                <p class="mb-4">Omka Tech team is proud to offer ecommerce website
                  development services to meet your needs. Our team will work with you
                  to develop a design solution for your e-commerce web and apps that
                  speaks to your business purpose</p>
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
                        ✓ Trustworthy Services
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓Global Recognition
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Proven Expertise
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Results-Driven Methods
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Process-Driven Approach
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Agile Development
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
                <img class="img-fluid" ref={targetDivRef1} src={hero} alt="e-commerce web apps development Services" />
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

export default Ecommerce;
