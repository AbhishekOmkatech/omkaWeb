import React from "react";
import Flogo from "../../images/01 logo.png";
import Helmet from "react-helmet";
import thnq from "../../images/thq.png";
import "../css/style.scss";
import Footer from "../pages/Footer.js";
import { useLocation } from "react-router-dom";

const Thankyou = (e) => {

  return (
    <div>
      <Helmet>
        <script>{`{"gtag('event', 'conversion', {'send_to': 'AW-676251754/uHhwCNibqokYEOqQu8IC'});"}`}</script>
      </Helmet>
      <Helmet>
        <title>Thankyou For Visit - Omka Tech</title>
        <meta
          name="description"
          content="We’re a website development company in Noida. Omka Tech offers SEO-friendly, mobile-responsive websites with 24/7 support. Open your online store with us."
        />
        <meta name="keywords" content="Omka Tech, Web development company" />
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
     
     class="navbar navbar-expand-md  navbar-dark py-lg-0 px-lg-5"
     data-wow-delay="0.1s"    id="bottomNavbar" style={{ backgroundColor: "#F2F2F2", height: "80px" }}
   >
     <a
       href="/"
       class="navbar-brand ms-3 d-lg-none"
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
           class="nav-item nav-link "
           id="homeleft"
           rel="noopener noreferrer"
         >
           Home
         </a>
         &nbsp;&nbsp;&nbsp;
         <div class="nav-item dropdown">
           <a
             rel="noopener noreferrer"
             href="#"
             class="nav-link dropdown-toggle"
             data-bs-toggle="dropdown"
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
             class="nav-link dropdown-toggle"
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
               href="/services/graphics-ui-ux"
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
             Get Quote
           </button>
         </a>


       </div>
     </div>
   </nav>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1
        style={{
          Color: "black",
          fontWeight: "bold",
          wordSpacing: "40",
          lineHeight: "1.5",
        }}
      >
        Thank You for submitting your Details !!
      </h1>
      <h5 id="thnkh5">
        Wondering what’s next? We understand your curiosity and would like to
        provide you with an overview of the upcoming process. Here’s how it will
        unfold.
      </h5>
      <br />

      <br />
      <img src={thnq} id="thqimg" alt="text"></img>
      <br />
      <br />
      <br />
      <br />
      <ol class="numbered">
        <li>
          <h4>Business Analysis</h4>
          <h6 id="thqh6">
            Our team of business analysts will meet with you to discuss and
            define the project requirements and scope in detail.
          </h6>
        </li>
        <li>
          <h4>Project Proposal</h4>
          <h6 id="thqh6">
            Based on the analysis, our team will provide you with a detailed
            project proposal that includes cost estimates, project plans, and
            timelines. Once you approve it, the project will start.
          </h6>
        </li>
        <li>
          <h4>Project Initiation</h4>
          <h6 id="thqh6">
            A dedicated project manager will be assigned as a single point of
            contact, along with a designer and developers who will start working
            on the project.
          </h6>
        </li>
      </ol>

      <br />
      <Footer />
    </div>
  );
};

export default Thankyou;
