import React,{useState,useEffect,useRef} from "react";
import Flogo from "../../images/01 logo.png";
import "../css/style.css";
import p1 from "../../images/aboutSec.jfif";
import Helmet from "react-helmet";
import Test from "./Test";
import one from "../../images/whyChooseus/01.png";
import two from "../../images/whyChooseus/02.png";
import three from "../../images/whyChooseus/03.png";
import four from "../../images/whyChooseus/04.png";
import five from "../../images/whyChooseus/05.png";
import six from "../../images/whyChooseus/06.png";
import seven from "../../images/whyChooseus/07.png";
import eight from "../../images/whyChooseus/08.png";
import $ from "jquery";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import GetInTounch from "./GetInTounch";
import EmailForm from "./EmailForm";
import TestiMonials from "../../components/TestiMonials/TestiMonials";
import Testimonials from "./Testimonials";
import "../css/Inline.css";
const About = () => {
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
        <title>About Us - Omka Tech</title>
        <meta
          name="description"
          content="At OMKA TECH we provide end to end business solutions for our clients. We help our clients convert their REQUIREMENT DOCUMENT TO THE FUNCTIONAL TECHNOLOGY." data-react-helmet="true"
        />
        <meta name="keywords" content="Omka Tech, Web development company" data-react-helmet="true" />
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
      <nav
     
     className="navbar navbar-expand-md  navbar-dark py-lg-0 px-lg-5"
     data-wow-delay="0.1s"    id="bottomNavbar" style={{ backgroundColor: "#F2F2F2", height: "80px" }}
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
               className="dropdown-item active"
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
             Get Quote
           </button>
         </a>


       </div>
     </div>
   </nav>
      <div
        className="container-fluid page-header py-5 mb-5 fadeIn "
        id="AboutusBanner"
      >
        <h1 id="ah">
          About us
          <hr id="ahr" />
        </h1>
        <h2 id="ahh">The World Revolves around technology</h2>
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
                <img className="img-fluid" ref={targetDivRef} src={p1} alt="benefits you get while working with Omka Tech" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className=" bg-white  text-primary " id="whoweare">
                  ABOUT US
                </h6>
                <h1 className="display-6 mb-4" id="whoweare">
                  OMKA TECH BELIEVES THAT THE WORLD{" "}
                  <span className="text-primary" id="whoweare">
                    REVOLVES AROUND TECHNOLOGY{" "}
                  </span>
                </h1>
                <p>
                  At OMKA TECH we provide end to end business solutions for our
                  clients. We help our clients convert their REQUIREMENT
                  DOCUMENT TO THE FUNCTIONAL TECHNOLOGY.
                </p>
                <p className="mb-4">
                  From start to finish, we take full responsibility for the
                  development of each project, ensuring that it meets the
                  client’s specific needs and preferences. We work closely with
                  our clients throughout the entire Agile Development process to
                  provide the best possible business solution for their
                  organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*our expertise */}

      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 className=" bg-white  text-primary" id="whoweare">
              OUR CORE EXPERTISE
            </h6>
            <h2 className="display-6 mb-4" id="whoweare">
              Reasons why you should&nbsp;
              <span style={{ color: "#04165D" }}>Trust Us</span>
            </h2>
          </div>
          <div className="row g-4">
            <Test />
          </div>
        </div>
      </div>
      {/* technology */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 className=" bg-white text-primary" id="whoweare">
              Why Choose OMKA TECH
            </h6>
            <h2 className="display-6 mb-4" id="whoweare">
              Experience a World className
              <br />
              <span style={{ color: "#04165D" }} id="whoweare">
                {" "}
                IT Service
              </span>
            </h2>
          </div>
          <div className="row g-4">
            <div className="wrapper">
              <div className="team" id="teamm">
                <div className="team_member" id="g5">
                  <div className="team_img">
                    <img src={one} alt="Team_image" />
                  </div>
                  <h3 id="g3">Free Cost- Analysis</h3>
                  <p id="g4">
                    The quote for the project is free of cost. You can come to
                    us for the quote and also using our experience in this
                    industry we also suggest to make your business a great
                    success and that too for free.
                  </p>
                </div>
                <div className="team_member" id="g5">
                  <div className="team_img">
                    <img src={two} alt="Team_image" />
                  </div>
                  <h3 style={{ color: "black", fontWeight: "bold" }}>
                    Complete Source Code
                  </h3>
                  <p style={{ color: "darkgray", textAlign: "center" }}>
                    We do not keep any ownership/ credentials for the project.
                    Once the project is complete, we provide the complete source
                    code to the client.
                  </p>
                </div>
                <div className="team_member" id="g5">
                  <br />
                  <div className="team_img">
                    <img src={three} alt="Team_image" />
                  </div>
                  <h3 style={{ color: "black", fontWeight: "bold" }}>User-Friendly Designs</h3>
                  <p style={{ color: "darkgray", textAlign: "center" }}>
                    Our designs are unique yet attractive and designing is done
                    in such a way so that it can be used effortlessly
                  </p>
                </div>
                <div className="team_member" id="g5">
                  <div className="team_img">
                    <img src={four} alt="Team_image" />
                  </div>
                  <h3 style={{ color: "black", fontWeight: "bold" }}>
                    Superior Quality
                  </h3>
                  <p style={{ color: "darkgray", textAlign: "center" }}>
                    Our experience and professional team develop the superior
                    quality code and mentions comment while writing so that it's
                    easy for anyone to understand the code.
                  </p>
                </div>
                <div className="team_member" id="g5">
                  <div className="team_img">
                    <img src={five} alt="Team_image" />
                  </div>
                  <h3 style={{ color: "black", fontWeight: "bold" }}>
                    Full Customization
                  </h3>
                  <p style={{ color: "darkgray", textAlign: "center" }}>
                    Your project should be developed as per you only, Hence we
                    do customized development to bring the end product best
                    suited to the client and their business need.
                  </p>
                </div>
                <div className="team_member" id="g5">
                  <div className="team_img">
                    <img src={six} alt="Team_image" />
                  </div>
                  <h3 style={{ color: "black", fontWeight: "bold" }}>
                    Hand-Holding Approach
                  </h3>
                  <p style={{ color: "darkgray", textAlign: "center" }}>
                    - We keep in touch from the start of the project till the
                    client is satisfied with our work. We go hand in hand with
                    our clients so that we can help each other grow
                  </p>
                </div>
                <div className="team_member" id="g5">
                  <div className="team_img">
                    <img src={seven} alt="Team_image" />
                  </div>
                  <h3 style={{ color: "black", fontWeight: "bold" }}>
                    White Label
                  </h3>
                  <p style={{ color: "darkgray", textAlign: "center" }}>
                    We just develop/produce, you can re-brand the project
                  </p>
                </div>
                <div className="team_member" id="g5">
                  <div className="team_img">
                    <img src={eight} alt="Team_image" />
                  </div>
                  <h3 style={{ color: "black", fontWeight: "bold" }}>
                    24*7 Customer Support
                  </h3>
                  <p style={{ color: "darkgray", textAlign: "center" }}>
                    We provide 24*7 email/message/call support to our clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestiMonials />
      <Testimonials />
      <br />
      <br />
      <br />
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

export default About;

// https://codepen.io/Jemimaabu/pen/GyBeye
