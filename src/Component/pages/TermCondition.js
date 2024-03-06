import React from "react";

import { Helmet } from "react-helmet";
import Flogo from "../../images/01 logo.png";
import "../css/bootstrap.min.css";
import "../css/style.css";
import $ from "jquery";
import Footer from "./Footer";
import GetInTounch from "./GetInTounch";

const TermCondition = () => {
  
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
        <title>Terms & Conditions Of Omkatech Noida-India</title>
        <meta
          name="description" data-react-helmet="true"
          content="We’re a website development company in Noida. Omka Tech offers SEO-friendly, mobile-responsive websites with 24/7 support. Open your online store with us."
        />
        <meta
          name="keywords" data-react-helmet="true"
          content="Website Design, Web design, Web Development Company, Website Development Company"
        />
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
      </nav>
      <nav

className="navbar navbar-expand-md  navbar-dark py-lg-0 px-lg-5"
data-wow-delay="0.1s" id="bottomNavbar" style={{ backgroundColor: "#F2F2F2", height: "80px" }}
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
          className="dropdown-item "
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
        className="btn btn-primary rounded-pill active"
        id="quote"
        style={{ animation: "pulse 1.1s ease infinite", color: "white" }}
      >
        Get Quote
      </button>
    </a>


  </div>
</div>
</nav>
      {/* header */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        id="TermBanner"
      >
        <br />
        <h1 id="ah">
          Terms & <br />
          conditions
          <hr id="ahr" />
        </h1>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="display-6 mb-4">
              <span style={{ color: "#04165D" }}>Terms & Conditions</span>
            </h1>
          </div>
          <div className="row g-4" style={{ lineHeight: "normal" }}>
            <h3 className=" bg-white  text-primary ">The Content Writing</h3>

            <li id="whoweare1">
              {" "}
              OMKA TECH agrees to create written material for insertion on
              Client’s website upon the appeal of the Client and per the
              approved terms.
            </li>
            <li id="whoweare1">
              {" "}
              OMKA TECH agrees to use rational care to ensure that all facts and
              statements in the work are correct and that the work does not
              trespass upon{" "}
              <span style={{ marginLeft: "20px" }}>
                {" "}
                any copyright, or any other right of a third party.
              </span>
            </li>
            <li id="whoweare1">
              OMKA TECH admits that Client has the right to edit the work in a
              time frame agreed and that OMKA TECH will collaborate with Client
              in editing and{" "}
              <span style={{ marginLeft: "20px" }}>
                {" "}
                rereading the work erstwhile to publication.
              </span>
            </li>
            <li id="whoweare1">
              Client agrees that they are accountable for studying the final
              draft for correctness to include spelling and grammatical errors,
              statements and{" "}
              <span style={{ marginLeft: "20px" }}>
                assertions. OMKA TECH is not liable for errors discovered after
                the website gets live.
              </span>
            </li>
          </div>
          <br />
          <br />
          <div className="row g-4" style={{ lineHeight: "normal" }}>
            <h3 className=" bg-white  text-primary ">Web Design and Development</h3>

            <li id="whoweare1">
              {" "}
              OMKA TECH approves design and develop a website at Client’s
              request and will deliver the job by to the settled conditions.
            </li>
            <li id="whoweare1">
              {" "}
              Client is solely responsible for describing the detailed
              structure, number of pages required, and other relevant terms and
              conditions.
            </li>
            <li id="whoweare1">
              Client agrees to supply the OMKA TECH with satisfactory
              photography or imagery to use in the design.
            </li>
            <li id="whoweare1">
              Client is responsible for obtaining and buying a domain name. OMKA
              TECH may at its discretion instruct Client on suitable names.
            </li>
            <li id="whoweare1">
              Client hereby admits that OMKA TECH is not accountable for any
              errors, grammatical or otherwise found in the material provided by
              client
            </li>
            <li id="whoweare1">
              OMKA TECH agrees to resolve any errors or implement revisions
              requested by Client. Client agrees that a maximum of three
              revisions are available &nbsp;&nbsp;&nbsp;&nbsp; (depending on
              package). Major changes in design won’t be done in revisions.
            </li>
            <li id="whoweare1">
              Client acknowledges that any change requests after final approval
              has been given to OMKA TECH or after website is live will be
              charged. OMKA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TECH will not begin
              work on following change requests until full payment has been
              received.
            </li>
            <li id="whoweare1">
              Client admits that OMKA TECH will add a “Web Design” by “OMKA
              TECH” link to the footnote section of each website they work on.
              This is branding &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of OMKA TECH and to
              eliminate it will charge.
            </li>
            <li id="whoweare1">
              Due to business nature, OMKA TECH will not be liable if your
              website got hacked, lost rankings or errors etc.
            </li>
          </div>
          <br />
          <br />
          <div className="row g-4" style={{ lineHeight: "normal" }}>
            <h3 className=" bg-white  text-primary ">
              Mobile App Designing and Development
            </h3>
            <li id="whoweare1">
              OMKA TECH approves design and develop a mobile app at Client’s
              request and will deliver the job by to the settled conditions.
            </li>
            <li id="whoweare1">
              Client is solely responsible for describing the detailed
              structure, number of screens required, and other relevant terms
              and conditions.
            </li>
            <li id="whoweare1">
              Client agrees to supply the OMKA TECH with satisfactory
              photography or imagery to use in the design.
            </li>
            <li id="whoweare1">
              Client is responsible for obtaining and buying the App Store and
              Play Store accounts. OMKA TECH may at its discretion instruct
              Client on a suitable &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name for the
              Application.
            </li>

            <li id="whoweare1">
              Client hereby admits that OMKA TECH is not accountable for any
              errors, grammatical or otherwise found in the material provided by
              the client.
            </li>
            <li id="whoweare1">
              OMKA TECH agrees to resolve any errors or implement revisions
              requested by Client. Client agrees that a maximum of three
              revisions are available &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (depending
              on package). Major changes in design won’t be done in revisions.
            </li>
            <li id="whoweare1">
              Client acknowledges that any change requests after final approval
              has been given to OMKA TECH or after mobile apps are live will be
              charged.{" "}
              <span style={{ marginLeft: "25px" }}>
                {" "}
                OMKA TECH will not begin work on the following change requests
                until full payment has been received.
              </span>
            </li>
            <li id="whoweare1">
              Client admits that OMKA TECH will add a “Mobile App Designed” by
              “OMKA TECH” link to the footnote section of each mobile app they
              work on.{" "}
              <span style={{ marginLeft: "25px" }}>
                This is the branding of OMKA TECH and to eliminate it will
                charge.
              </span>
            </li>
            <li id="whoweare1">
              Due to its business nature, OMKA TECH will not be liable if your
              mobile app got hacked, lost rankings or errors, etc.
            </li>
          </div>
          <br />
          <br />
          <div className="row g-4" style={{ lineHeight: "normal" }}>
            <h3 className=" bg-white  text-primary ">Logo And Graphic Design</h3>

            <li id="whoweare1">
              {" "}
              We try to create unique logos and provide our recommendations. Our
              logo designs are built based on research & concept building & we
              assure{" "}
              <span style={{ marginLeft: "25px" }}>
                {" "}
                you of an alternate logo design if a Trademark on the logo is
                rejected due to any reason.
              </span>
            </li>
            <li id="whoweare1">
              If you face any problem during trademark registration, then you
              are free to contact us, and we will offer you some other
              variations that you can{" "}
              <span style={{ marginLeft: "23px" }}>
                {" "}
                choose. However, we do not have access to all the existing logos
                like the trademark registry has and it is nearly impossible to
                be 100% certain that{" "}
              </span>
              <span style={{ marginLeft: "23px" }}>
                the chosen design is in no way a loose match of an existing
                design.
              </span>
            </li>
          </div>
          <br />
          <br />
          <div className="row g-4" style={{ lineHeight: "normal" }}>
            <p>
              <span className="text-primary">
                <b>Note – </b>
              </span>
              Any terms agreed in final proposal/email will also be considered
              along with terms mentioned in this term page
            </p>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
      <GetInTounch />
    </div>
  );
};

export default TermCondition;
