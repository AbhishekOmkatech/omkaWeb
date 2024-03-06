import React,{useEffect,useRef} from "react";
import Flogo from "../../../images/01 logo.png";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import p1 from "../../../images/Graphics design/section 1.jpg";
import hero from "../../../images/hero-img.jpg";
import req from "../../../images/Graphics design/Approach we follow icon/01.PNG";
import uiux from "../../../images/Graphics design/Approach we follow icon/02.PNG";
import proto from "../../../images/Graphics design/Approach we follow icon/03.png";
import app from "../../../images/Graphics design/Approach we follow icon/04.png";
import dep from "../../../images/3proto.png";
import web from "../../../images/Graphics design/01  Website Design.png";
import mobile from "../../../images/Graphics design/02 Mobile app design.png";
import icon from "../../../images/Graphics design/03 Icon and logo design.png";
import brand from "../../../images/Graphics design/04 Brand design.png";
import Flyer from "../../../images/Graphics design/05 Flyer and Brochures.png";
import imge from "../../../images/Graphics design/06 Image editing.png";
import $ from "jquery";
import Helmet from "react-helmet";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import GetInTounch from "../GetInTounch";
import EmailForm from "../EmailForm";
const Designing = () => {
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
        <title>Top Graphic Designing Agency in USA - Omka Tech</title>
       
        <meta data-react-helmet="true"
          name="description"
          content="Omka Tech is one of the best graphic designing agency in the world, offering wide range of services such as creative and custom graphic designing and UI&UX designing. Discover our services today!"
        />
        <meta data-react-helmet="true"
          name="keywords"
          content="Graphics Design Agency, Graphic Designer USA, 
          Graphic Design Company, Web Designing Company"
        />
        <link rel="canonical" href="https://www.omkatech.com/services/designing"></link>

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
                            <a href="tel:+1 (437) 255-9950"><img src='../po.jpg' id="flag" alt="US"></img> &nbsp;+1 (437) 255-9950</a>&nbsp; |&nbsp;&nbsp;

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
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Mobile App Development
                </a>
                <a
                  href="/Services/graphics-ui-ux"
                  className="dropdown-item active"
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
              href="/Hire-Resources"
              className="nav-item nav-link"
              rel="noopener noreferrer"
            >
              Hire Resources
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="/blog" className="nav-item nav-link" rel="noopener noreferrer">
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
                className="btn btn-primary "
                id="quote"
                style={{ animation: "pulse 1.1s ease infinite", color: "white",borderRadius:"2px" }}
              >
                Free 30-Min Consultation
              </button>
            </a>


          </div>
        </div>
      </nav><br />
      <div
        className="container-fluid page-header py-5 mb-5 fadeIn "
        id="DesignBanner"
      >
        <h1 id="ah">
          Graphics Design
          <br />Agency
          <hr id="ahr" />
        </h1>
        <p id="ahh">
          creative user-friendly designs<br></br> for your business presence
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
                <img className="img-fluid" ref={targetDivRef} src={p1} alt="professional web designing company in usa" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h5 className=" bg-white  text-primary " id="whoweare">
                  GRAPHICS & UI/UX DESIGNING
                </h5>
                <h2 className="display-6 mb-4" id="whoweare">
                  We Bring your imagination from{" "}
                  <span className="text-primary" id="whoweare">
                    Canvas to Reality!!{" "}
                  </span>
                </h2>
                <p>
                  We help brands achieve significance in a complex,
                  consumer-driven, technology-enabled world. Our professional
                  graphic designers are proficient in different design tools and
                  have remarkable experience in handling design projects.
                </p>
                <p className="mb-4">
                  Our unique graphic designs create visual concepts that inspire
                  and captivate customers, which helps in making your business
                  become a brand. We have established ourselves as one of the
                  leading innovative Graphics Design agency catering to
                  clients across the globe.
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
          Are you looking for the best designing team in the market?
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
        </h2>
      </div>

      <br />
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 className=" bg-white  text-primary " id="whoweare">
              Approach We Follow
            </h6>
            <h2 className="display-6 mb-4" id="whoweare">
              We Just Don’t Design, We Build
              <span className="text-primary"> Customer Experience</span>
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
                        alt="graphic designing service"
                      ></img>
                    </i>
                  </div>
                </div>
                <div className="col-6 text-left">
                  <h4> Defining & Analyzing</h4>
                  <p>
                    It is important to analyze the requirement and define the
                    major sections for the design.
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
                  <h4> User-Centric Designs </h4>
                  <p style={{ textAlign: "right" }}>
                    We start by creating a pen-paper sketch keeping in mind the
                    user experience and building it keeping ourselves in place
                    of a user .
                  </p>
                </div>
                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div className="circle">
                    <i className="fa fa-chec">
                      <img
                        src={uiux}
                        style={{ marginLeft: "-3px" }}
                        alt="graphic designing service"
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
                        alt="graphic designing service"
                      ></img>
                    </i>
                  </div>
                </div>
                <div className="col-6 text-left">
                  <h4>Getting Client Feedback</h4>
                  <p>
                    Before working on the colors we take client feedback on the
                    functionality included making sure the design screens are
                    accurate.
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
                  <h4>Color Filling</h4>
                  <p style={{ textAlign: "right" }}>
                    We then start using the color codes in the application where
                    the color filling is done and the final product is created.
                  </p>
                </div>
                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div className="circle">
                    <i className="fa fa-chec">
                      {" "}
                      <img
                        src={app}
                        style={{ marginLeft: "-3px" }}
                        alt="graphic designing service"
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
                      <img src={dep} alt="graphic designing service"></img>
                    </i>
                  </div>
                </div>
                <div className="col-6 text-left">
                  <h4> Prototyping</h4>
                  <p>
                    Before providing it to the development team, the prototyping
                    of the application is done where all the final stage screens
                    are created with the content.
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
                  <h4> Final Feedback before Development</h4>
                  <p style={{ textAlign: "right" }}>
                    We then take the final feedback from the client. Though the
                    feedback is taken at each and every stage of project
                    creation to make sure the product is as per the requirement.
                  </p>
                </div>
                <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div className="circle">
                    <i className="fa fa-chec">
                      {" "}
                      <img
                        src={proto}
                        style={{ marginLeft: "-3px" }}
                        alt="graphic designing service"
                      ></img>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* technology */}
      <div className="container-xxl py-5" style={{ marginTop: "-40px" }}>
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 className=" bg-white  text-primary " id="whoweare">
              Services We Provide
            </h6>
            <h2 className="display-6 mb-4" id="whoweare">
              Ourshine With{" "}
              <span className="text-primary" id="whoweare">
                Interactive & Engaging Designs
              </span>
            </h2>
          </div>
          <br />
          <br />
          <div className="row g-4" id="back">
            <div className="wrapper2">
              <h2> </h2>
              <div className="team">
                <div className="team_member" id="team1">
                  <div className="team_img">
                    <img src={web} alt="website design service" />
                  </div>
                  <h3 className="text-primary">Website Design</h3>
                </div>
                <div className="team_member" id="team1">
                  <div className="team_img">
                    <img src={mobile} alt="mobile app design service" />
                  </div>
                  <h3 className="text-primary">Mobile App Design</h3>
                </div>
                <div className="team_member" id="team1">
                  <div className="team_img">
                    <img src={icon} alt="Icon Designing service" />
                  </div>
                  <h3 className="text-primary">Icon Designing</h3>
                </div>
              </div>
              <br />{" "}
              <div className="team">
                <div className="team_member" id="team1">
                  <div className="team_img">
                    <img src={Flyer} alt="flyer & brochure service" />
                  </div>
                  <h3 className="text-primary">Flyer & Brochure</h3>
                </div>
                <div className="team_member" id="team1">
                  <div className="team_img">
                    <img src={brand} alt="brand design service" />
                  </div>
                  <h3 className="text-primary">Brand Design</h3>
                </div>
                <div className="team_member" id="team1">
                  <div className="team_img">
                    <img src={imge} alt="image editing services" />
                  </div>
                  <h3 className="text-primary">Image Editing</h3>
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
                  Why Choose Us
                </h6>
                <h2 className="display-6 mb-4" id="whoweare">
                  Benefits you get while working with{" "}
                  <span className="text-primary" id="whoweare">
                    Omka Tech
                  </span>
                </h2>
                <p className="mb-4">Omka Tech is a website designing company that aims to create a
                  simple and powerful website for our customers with the help of the
                  industry's best designers. With our services, you'll get high quality digital
                  design that speaks for itself</p>
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
                        ✓ We Create Experiences
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ We Ask, Listen and Understand
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ We provide quick responses and feedbacks
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ We are On Time and On Budget
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ We Provide Competitive Pricing{" "}
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ We Work in Small Teams
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
                <img className="img-fluid" ref={targetDivRef1} src={hero} alt="website designing with Omka Tech" />
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

export default Designing;
