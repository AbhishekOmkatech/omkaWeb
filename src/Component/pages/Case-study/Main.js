import React from 'react'
import Flogo from "../../../images/01 logo.png";
import Helmet from "react-helmet";
import $ from "jquery";
import ContactForm from '../ContactForm';
import Footer from '../Footer';
const Main = () => {
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 56) {
                $(".navbar").addClass("bg-dark1");
            } else {
                $(".navbar").removeClass("bg-dark1");
            }
        });
        $(".navbar-toggler").click(function () {
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

    return (
        <div>

            <Helmet>
                <script>{`{"gtag('event', 'conversion', {'send_to': 'AW-676251754/uHhwCNibqokYEOqQu8IC'});"}`}</script>
            </Helmet>
            <Helmet>
                <title>Blog - Omka Tech</title>
                <meta
                    name="description"
                    content="At OMKA TECH we provide end to end business solutions for our clients. We help our clients convert their REQUIREMENT DOCUMENT TO THE FUNCTIONAL TECHNOLOGY."
                />
                <meta name="keywords" content="Omka Tech, Web development company" />
                <link rel="canonical" href="https://www.omkatech.com/blog"></link>

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
                    <div classNameName="row" id="gsss" >

                        <div classNameName="col-5"></div>
                        <div classNameName="col-7">
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
               href="/services/designing"
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
                id="BlogBanner"
            >
                <h1 id="ahblog">
                    CASE STUDY
                    <hr id="ahr" />
                </h1>
                <br />
                <h2 id="cmsa">
                    Where we keep you updated with the
                    <br /> real world updated
                </h2>
            </div>
            <br />
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col" id='df'>
                        <div className="card">
                            <div className="card-image-wrapper">
                                <a href='/CaseOne'> <img src="https://www.code-brew.com/wp-content/uploads/2020/12/mcaa.jpg" className="card-img-top img-fluid" alt="..." /></a>
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-image-wrapper">
                                <a href=''> <img src="https://www.code-brew.com/wp-content/uploads/2020/12/mcaa.jpg" className="card-img-top img-fluid" alt="..." /></a>
                            </div>
                            <div className="card-body">


                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-image-wrapper">
                                <a href=''> <img src="https://www.code-brew.com/wp-content/uploads/2020/12/mcaa.jpg" className="card-img-top img-fluid" alt="..." /></a>
                            </div>
                            <div className="card-body">


                            </div>
                        </div>
                    </div>
                    {/* <div className="col">
                        <div className="card">
                            <div className="card-image-wrapper">
                                <a href=''> <img src="https://www.code-brew.com/wp-content/uploads/2020/12/mcaa.jpg" className="card-img-top img-fluid" alt="..." /></a>
                            </div>
                            <div className="card-body">


                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-image-wrapper">
                                <a href=''> <img src="https://www.code-brew.com/wp-content/uploads/2020/12/mcaa.jpg" className="card-img-top img-fluid" alt="..." /></a>
                            </div>
                            <div className="card-body">


                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <br />
            <br /><br /><br /><br />
            <ContactForm /><Footer />
        </div>
    )
}

export default Main
