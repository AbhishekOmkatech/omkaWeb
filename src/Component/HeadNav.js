import React from 'react'
import $ from "jquery";
import Flogo from "../images/01 logo.png";
import { useEffect } from 'react';
const HeadNav = () => {


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

  // let prevScrollPos = window.pageYOffset;
  // const topNavbar = document.getElementById("topNavbar");
  // const bottomNavbar = document.getElementById("bottomNavbar");

  // window.onscroll = () => {
  //     const currentScrollPos = window.pageYOffset;

  //     if (prevScrollPos > currentScrollPos) {
  //         topNavbar.style.transform = "translateY(0)";
  //         topNavbar.style.opacity = "1";
  //     } else {
  //         topNavbar.style.transform = "translateY(-100%)";
  //         topNavbar.style.opacity = "0";
  //     }

  //     prevScrollPos = currentScrollPos;
  // };

  return (
    <div>
      <nav
        id="topNavbar"
        className=""
        data-wow-delay="0.1s"
        style={{ height: "60px", backgroundColor: "white" }}
      >

        <div className="container" style={{ height: "10px" }} >

          <div className="flag-container">
            <img src='../india.png' className="flag-icon" alt="india"></img><span style={{ color: "white" }}>|</span>&nbsp;&nbsp;
            <img src='../us.png' className="flag-icon" alt="US"></img><span style={{ color: "white" }}>|</span>&nbsp;&nbsp;
            <img src='../canda.png' className="flag-icon" alt="Canda"></img>
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
            style={{ height: "40px" }}
          ></img>
        </a>
        <button type="button" class="navbar-toggler me-3 collapsed" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
          </button>
       
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav  p-lg-0">

            <a
              href="/"
              style={{
                // height: "56px",
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
                  marginTop: "12px",
                  marginLeft: "-60px",
                }}
                id="hidelogo"
              ></img>
            </a>
            <a
              href="/"
              className="nav-item nav-link active"
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
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Case Study
                </a> */}

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
                {/* <a href="/Services/ReadyMadeSolution" class="dropdown-item">
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
            {/* <a href="/blog" className="nav-item nav-link" rel="noopener noreferrer">
              Blog
            </a> */}
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
                style={{ animation: "pulse 1.1s ease infinite", color: "white", borderRadius: "4px" }}
              >
                Free 30-Min Consultation
              </button>
            </a>


          </div>
        </div>
      </nav>
    </div>
  )
}

export default HeadNav
