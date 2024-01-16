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
                  class="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Mobile App Development
                </a>
                <a
                  href="/Services/graphics-ui-ux"
                  class="dropdown-item active"
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
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;
            <a
              href="/Hire-Resources"
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
      </nav><br />
      <div
        class="container-fluid page-header py-5 mb-5 fadeIn "
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
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="img-border">
                <img class="img-fluid" ref={targetDivRef} src={p1} alt="professional web designing company in usa" />
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="h-100">
                <h5 class=" bg-white  text-primary " id="whoweare">
                  GRAPHICS & UI/UX DESIGNING
                </h5>
                <h2 class="display-6 mb-4" id="whoweare">
                  We Bring your imagination from{" "}
                  <span class="text-primary" id="whoweare">
                    Canvas to Reality!!{" "}
                  </span>
                </h2>
                <p>
                  We help brands achieve significance in a complex,
                  consumer-driven, technology-enabled world. Our professional
                  graphic designers are proficient in different design tools and
                  have remarkable experience in handling design projects.
                </p>
                <p class="mb-4">
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
          Are you looking for the best designing team in the market?
          <br />{" "}
          <p
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
          </p>
        </h2>
      </div>

      <br />
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 class=" bg-white  text-primary " id="whoweare">
              Approach We Follow
            </h6>
            <h2 class="display-6 mb-4" id="whoweare">
              We Just Don’t Design, We Build
              <span className="text-primary"> Customer Experience</span>
            </h2>
          </div>
          <div class="row g-4">
            {" "}
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
                        alt="graphic designing service"
                      ></img>
                    </i>
                  </div>
                </div>
                <div class="col-6 text-left">
                  <h4> Defining & Analyzing</h4>
                  <p>
                    It is important to analyze the requirement and define the
                    major sections for the design.
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
                  <h4> User-Centric Designs </h4>
                  <p style={{ textAlign: "right" }}>
                    We start by creating a pen-paper sketch keeping in mind the
                    user experience and building it keeping ourselves in place
                    of a user .
                  </p>
                </div>
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div class="circle">
                    <i class="fa fa-chec">
                      <img
                        src={uiux}
                        style={{ marginLeft: "-3px" }}
                        alt="graphic designing service"
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
                        alt="graphic designing service"
                      ></img>
                    </i>
                  </div>
                </div>
                <div class="col-6 text-left">
                  <h4>Getting Client Feedback</h4>
                  <p>
                    Before working on the colors we take client feedback on the
                    functionality included making sure the design screens are
                    accurate.
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
                  <h4>Color Filling</h4>
                  <p style={{ textAlign: "right" }}>
                    We then start using the color codes in the application where
                    the color filling is done and the final product is created.
                  </p>
                </div>
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div class="circle">
                    <i class="fa fa-chec">
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
                      <img src={dep} alt="graphic designing service"></img>
                    </i>
                  </div>
                </div>
                <div class="col-6 text-left">
                  <h4> Prototyping</h4>
                  <p>
                    Before providing it to the development team, the prototyping
                    of the application is done where all the final stage screens
                    are created with the content.
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
                  <h4> Final Feedback before Development</h4>
                  <p style={{ textAlign: "right" }}>
                    We then take the final feedback from the client. Though the
                    feedback is taken at each and every stage of project
                    creation to make sure the product is as per the requirement.
                  </p>
                </div>
                <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                  <div class="circle">
                    <i class="fa fa-chec">
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
      <div class="container-xxl py-5" style={{ marginTop: "-40px" }}>
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 class=" bg-white  text-primary " id="whoweare">
              Services We Provide
            </h6>
            <h2 class="display-6 mb-4" id="whoweare">
              Ourshine With{" "}
              <span className="text-primary" id="whoweare">
                Interactive & Engaging Designs
              </span>
            </h2>
          </div>
          <br />
          <br />
          <div class="row g-4" id="back">
            <div class="wrapper2">
              <h2> </h2>
              <div class="team">
                <div class="team_member" id="team1">
                  <div class="team_img">
                    <img src={web} alt="website design service" />
                  </div>
                  <h3 className="text-primary">Website Design</h3>
                </div>
                <div class="team_member" id="team1">
                  <div class="team_img">
                    <img src={mobile} alt="mobile app design service" />
                  </div>
                  <h3 className="text-primary">Mobile App Design</h3>
                </div>
                <div class="team_member" id="team1">
                  <div class="team_img">
                    <img src={icon} alt="Icon Designing service" />
                  </div>
                  <h3 className="text-primary">Icon Designing</h3>
                </div>
              </div>
              <br />{" "}
              <div class="team">
                <div class="team_member" id="team1">
                  <div class="team_img">
                    <img src={Flyer} alt="flyer & brochure service" />
                  </div>
                  <h3 className="text-primary">Flyer & Brochure</h3>
                </div>
                <div class="team_member" id="team1">
                  <div class="team_img">
                    <img src={brand} alt="brand design service" />
                  </div>
                  <h3 className="text-primary">Brand Design</h3>
                </div>
                <div class="team_member" id="team1">
                  <div class="team_img">
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
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="h-100">
                <h6 class=" bg-white text-primary" id="whoweare">
                  Why Choose Us
                </h6>
                <h2 class="display-6 mb-4" id="whoweare">
                  Benefits you get while working with{" "}
                  <span className="text-primary" id="whoweare">
                    Omka Tech
                  </span>
                </h2>
                <p class="mb-4">Omka Tech is a website designing company that aims to create a
                  simple and powerful website for our customers with the help of the
                  industry's best designers. With our services, you'll get high quality digital
                  design that speaks for itself</p>
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
                <img class="img-fluid" ref={targetDivRef1} src={hero} alt="website designing with Omka Tech" />
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
