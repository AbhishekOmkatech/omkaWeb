import React,{useEffect,useState} from "react";
import axios from "axios";
import Flogo from "../../images/01 logo.png";
import "../css/style.css";
import Helmet from "react-helmet";
import $ from "jquery";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import GetInTounch from "./GetInTounch";
import b1 from "../../images/blog/TRANSFORMATION.png";
import b2 from "../../images/blog/02 Outsourcing-01.jpg";
import b3 from "../../images/blog/03 website design-01.jpg";
import b4 from "../../images/blog/04 ecommerce-01.jpg";
import b5 from "../../images/blog/b11.png";
import b6 from "../../images/blog/OF LOGO.png";
const Blog = () => {
 
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 56) {
        $(".navbar").addClass("bg-dark1");
        $(".navbar").addClass("text-whitee"); // Add text-white className
      } else {
        $(".navbar").removeClass("bg-dark1");
        $(".navbar").removeClass("text-whitee"); // Remove text-white className
      }
    });

    $(".navbar-toggler").click(function () {
      if (!$(".navbar-collapse").hasClass("show")) {
        $(".navbar").addClass("bg-dark1");
        $(".navbar").addClass("text-whitee"); // Add text-white className
      } else {
        if ($(window).scrollTop() < 56) {
          $(".navbar").removeClass("bg-dark1");
          $(".navbar").removeClass("text-whitee"); // Remove text-white className
        }
      }
    });
  });

  const [product, setProducts] = useState([]);

  useEffect(() => {
    const url = 'https://www.omkatech.com/getblogs.php';
    axios.get(url).then((res) => setProducts(res.data));
  }, [product]);
  
  console.log(product)



  // JavaScript to handle the scrolling effect

let prevScrollPos = window.pageYOffset;
const topNavbar = document.getElementById("topNavbar");
const bottomNavbar = document.getElementById("bottomNavbar");

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
// -----------------------------------------------------------------------
// get data 
 const [data, setData] = useState([]);
 useEffect(() => {
  fetch("https://www.omkatech.com/getblogs.php").then((result) => {
    result.json().then((resp) => {
      setData(resp);
    });
  });
}, []);
  console.log(data);

  function Show(title) {

    var cosizek = product.find((item) => {
      return item.Title == title;
    });
  console.log(cosizek)
  //   const title = title;

  
  // axios.get(`https://www.omkatech.com/Blogdetails.php/${title}`).then(
  //     res => console.log(res.data));
  
    // alert(title);
  }
  
  return (
    <div>
      <Helmet>
        <script>{`{"gtag('event', 'conversion', {'send_to': 'AW-676251754/uHhwCNibqokYEOqQu8IC'});"}`}</script>
      </Helmet>
      <Helmet>
        {/* <title>Latest Trends & Updates - Omka Tech Blog</title> */}
        <meta
          name="description"
          content="At Omka Tech Blog, we post the latest trends and updates related to website development, SEO, Digital Maketing and much more. Stay tuned!"
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="nav-item dropdown">
              <a
                href="#"
                rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  Website Development
                </a>
                <a
                  href="/services/mobile-app-development"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  Mobile App Development
                </a>
                <a
                  href="/services/graphics-ui-ux"
                  rel="noopener noreferrer"
                  className="dropdown-item"
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
                  rel="noopener noreferrer"
                  className="dropdown-item"
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
            </a>{" "}
            &nbsp;&nbsp;&nbsp;
            <a
              href="/blog"
              className="nav-item nav-link active"
              rel="noopener noreferrer"
            >
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
          READ OUR LATEST
          <br /> BLOGS
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
          {product.map((item, index) => (
          <div className="col" key={index}>
            <div className="card" id="zom">
              <div className="card-image-wrapper">

                <img src={item.Image} className="card-img-top img-fluid" style={{ height: "230px" }} alt="Product" />

              </div>
              <div className="card-body hj">
                <p className="card-title" style={{ textAlign: "left" ,color:"black"}}><i className="fa fa-calendar"></i> {item.Date}</p>
                <p className="card-text">
                 {item.Title}
                  <br /><br />
                <div  onClick={() => Show(item.Title)} className="btn btn-primary1" rel="noopener noreferrer"id="suri1"><div className="pulsating-circle"></div> &nbsp; &nbsp; &nbsp;Read More</div>
                  
                  
                  
                  </p>
              
              </div>
            </div>
          </div>
              ))}
{/* 
          <div className="col">
            <div className="card" id="zom">
              <div className="card-image-wrapper">
                <img src={b2} className="card-img-top img-fluid" alt="..." />
              </div>
              <div className="card-body hj">
                <p className="card-title" style={{ textAlign: "left" ,color:"black"}}><i className="fa fa-calendar"></i> 30th August 2023</p>
                <p className="card-text"> The Pros and Cons of Outsourcing IT Services for Your Business
                <br /><br />
                <a href="/blog/the-Pros-and-Cons-of-outsourcing-IT-services-for-your-business" className="btn btn-primary" rel="noopener noreferrer"id="suri1"><div className="pulsating-circle"></div> &nbsp; &nbsp; &nbsp;Read More</a></p>
                
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" id="zom">
              <div className="card-image-wrapper">
                <img src={b3} className="card-img-top img-fluid" alt="..." />
              </div>
              <div className="card-body hj">
                <p className="card-title" style={{ textAlign: "left" ,color:"black"}}><i className="fa fa-calendar"></i> 30th August 2023</p>
                <p className="card-text">How Your New Website Design Will Help Your Business Grow?<br /><br />
                <a href="/blog/how-your-new-website-design-will-help-your-business-grow" className="btn btn-primary" rel="noopener noreferrer"id="suri1"><div className="pulsating-circle"></div> &nbsp; &nbsp; &nbsp;Read More</a>
                </p>
               
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" id="zom">
              <div className="card-image-wrapper">
                <img src={b4} className="card-img-top img-fluid" alt="..." />
              </div>
              <div className="card-body hj">
                <p className="card-title" style={{ textAlign: "left" ,color:"black"}}><i className="fa fa-calendar"></i> 30th August 2023</p>
                <p className="card-text">How Ecommerce Website Development Is Necessary for a Business
                  to Succeed?
                  <br /><br />
                  <a href="/blog/how-ecommerce-website-development-is-necessary-for-a-business-to-succeed" rel="noopener noreferrer" className="btn btn-primary" id="suri1"><div className="pulsating-circle"></div> &nbsp; &nbsp; &nbsp;Read More</a>
                </p>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" id="zom">
              <div className="card-image-wrapper">
                <img src={b5} className="card-img-top img-fluid" style={{ height: "220px" }} alt="..." />
              </div>
              <div className="card-body hj">
                <p className="card-title" style={{ textAlign: "left" ,color:"black"}}><i className="fa fa-calendar"></i> 30th August 2023</p>
                <p className="card-text">
                  Top Reasons Why Strategies Fail<br /><br /><br /><br />
                  <a href="/blog/top-reasons-why-strategies-fail" rel="noopener noreferrer" className="btn btn-primary" id="suri1"><div className="pulsating-circle"></div> &nbsp; &nbsp; &nbsp;Read More</a></p>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" id="zom">
              <div className="card-image-wrapper">
                <img src={b6} className="card-img-top img-fluid" style={{ height: "220px" }} alt="..." />
              </div>
              <div className="card-body hj">
                <p className="card-title" style={{ textAlign: "left" ,color:"black"}}><i className="fa fa-calendar"></i> 30th August 2023</p>
                <p className="card-text">
                The Art of Branding: Understanding the 7 Types of Logos<br /><br /><br />
                  <a href="/blog/the-art-of-branding:-understanding-the-7-types-of-Logos" rel="noopener noreferrer" className="btn btn-primary" id="suri1"><div className="pulsating-circle"></div> &nbsp; &nbsp; &nbsp;Read More</a></p>

              </div>
            </div>
          </div> */}
        </div>
      </div>
      
      {/* ------------------------------------------------------------------- */}
      {/* conatct */}
      <br /><br /><br /><br />
      <ContactForm />
      {/* footer */}
      <Footer />

      <GetInTounch />
    </div>
  );
};

export default Blog;

// https://codepen.io/Jemimaabu/pen/GyBeye
