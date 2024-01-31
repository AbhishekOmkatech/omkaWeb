import React, { useEffect, useState ,useRef} from "react";
import "../Component/css/bootstrap.min.css";
import "../Component/css/style.css";
import i4 from "../images/about.jpg";
import web from "../images/02-1.webp";
import mobile from "../images/03-mobile-app.webp";
import Marketing from "../images/05-growth-and-marketing.webp";
import UI from "../images/04-graphics-and-ui-ux.webp";
import Software from "../images/06-enterprise-software-solution.webp";
import customers from "../images/07-ready-made-solution.webp";
import cms from "../images/02-cms-design-development.webp";
import ecom from "../images/01-e-commerce-web-apps.webp";
import hero from "../images/hero-img.webp";
import { Helmet } from 'react-helmet';
import CookieConsent from "react-cookie-consent";
import FlowChart from "./FlowChart";
import Homeform from "./pages/Homeform";
import homea from "../images/WebpImg/homea.webp";
import Footer from "./pages/Footer";
import ContactForm from "./pages/ContactForm";
import GetInTouch from "./pages/GetInTounch";
import "./css/Inline.css";
import Tools from "./Tools";
import HeadBlog from "./pages/Blog/HeadBlog";
import HeadNav from "./HeadNav";
import Youtube from "./Youtube";
import Connect from "./pages/Connect";
import Modal1 from "../Modal";
import Marquee from "./pages/Marquee";


const Header1 = () => {
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

  const [show, setShow] = useState(false)
  const [hide, setHide] = useState(true)
  function show1() {
    setShow(true);
    setHide(false)
  }
  function show2() {
    setShow(false);
    setHide(true)
  }

  return (
    <div >
      <Helmet>
        <script>{`{"gtag('event', 'conversion', {'send_to': 'AW-676251754/uHhwCNibqokYEOqQu8IC'});"}`}</script>
     
        {/* <title>Omka Tech - Crafting Digital Excellence: Your Premier Website Development Partner
        </title> */}
          {/* Experience top-notch custom website development with our expert team.
          Elevate your online presence and drive digital success with tailored solutions. Discover our services today! */}
      <h1>Experience World Class IT Services</h1>
   
        <meta
          name="description"
          content="Experience top-notch custom website development with our expert team. Elevate your online presence and drive digital success with tailored solutions. Discover our services today!" data-react-helmet="true"
        />
        <meta
          name="keywords"
          content="Custom Website Development, Website Design, 
          Web design, Web Development Company, Website Development 
          Company, website developer near me" data-react-helmet="true"
        />

        <link rel="canonical" href="https://www.omkatech.com/" data-react-helmet="true" />

        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Omka Tech - Top Custom Website Development Company
          " data-react-helmet="true"
        />
        <meta
          property="og:description"
          content="Omka Tech is a top custom website development and ecommerce company providing web design, development, ecommerce SEO with 24x7 support and maintenance." data-react-helmet="true"
        />
        <meta property="og:url" content="https://www.omkatech.com/" data-react-helmet="true" />
        <meta property="og:site_name" content="Omka Tech" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/omkatech"
        />
        <meta
          property="article:modified_time"
          content="2022-11-22T11:41:06+00:00"
        />


        <meta property="og:image" content="https://lh3.googleusercontent.com/p/AF1QipO6RNv1HC9GcS0BAeE5CDedh_pU0RRWj2-eo8eI=s680-w680-h510" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta
          property="og:image:type"
          content="image/jpeg"
        />{" "}
      </Helmet>
<HeadNav/>
      {/* <HeadNav /> */}
      <div className="container-fluid page-header py-3 mb-5 fadeIn " id="HBanner">
        <div className="container text-center py-5" id="dummyHead">
          <div className="dummyHead">
            <h3 id="headh2">DREAM IT.BUILD IT.LAUNCH IT.GROW IT.</h3>
            <br /><br />
            <p id="headpara">
              We offer comprehensive business solutions that address all your
              needs in one place.
              <br /> Our specialized services include custom web and mobile
              application development ,<br /> designed specifically to meet the
              unique requirements of your business.
            </p>
            <img src={homea} id="homea" alt="web design and development company in usa"></img>
            <Modal1 />
          </div>
        </div>
        <h4 id="ahh">The World Revolves around technology</h4>
      </div>
      <Homeform></Homeform>
      <br />
      {/* Aboutus */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="img-border">
                <img className="img-fluid" ref={targetDivRef} src={i4} alt="web design and development company in usa" />
              </div>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h6 className="bg-white  text-primary " id="whoweare">
                  WHO WE ARE
                </h6>

                <h2 className="display-6 mb-4" id="whoweare" style={{ fontSize: "30px" }}>
                  Experience World Class IT Services and

                  <h1 className="text-primary" id="whoweare" style={{ fontSize: "30px" }}>
                   
                    Custom Website
                    Development
                  </h1>
                </h2>
                <p className="mb-4">
                  We offer a complete suite of integrated IT services , custom website
                  development, encompassing website and mobile application design and
                  development. Our team utilizes cutting-edge technology to
                  develop and implement mission-critical business applications
                  for clients across the globe.
                </p>
                <p className="mb-4">
                  At Omka Tech, our priority is to deliver high-quality
                  solutions on time, every time. We value client satisfaction
                  above all else, recognizing that our success is directly
                  linked to our clients’ success.
                </p>


                <button
                  className="btn btn-primary rounded-pill py-3 px-5"
                  href=""
                  id="knowmore"
                  rel="noopener noreferrer"
                >
                  <a href="/about-us" rel="noopener noreferrer" style={{ color: "white" }}>
                    {" "}
                    <center id="homeKnow">Know More</center>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
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
            <h5 className=" bg-white text-primary" id="whoweare">
              SERVICES
            </h5>
            <h3 className="display-6 mb-4" id="whoweare">
              The World Revolves around
              <span style={{ color: "#04165D" }} id="whoweare">
                Technology
              </span>
            </h3>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href="/services/website-development" rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={web} alt="web development service" />
                <h4 className="mb-0" id="h4hover">
                  WEBSITE DEVELOPMENT
                </h4>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href="/services/mobile-app-development" rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={mobile} alt="mobile app development service" />
                <h4 className="mb-0" id="h4hover">
                  MOBILE APP DEVELOPMENT
                </h4>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href="/services/graphics-ui-ux" rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={UI} alt="graphic designing service" />
                <h4 className="mb-0" id="h4hover">
                  GRAPHICS & UI/UX DESIGNING
                </h4>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href="/services/growth-marketing" rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={Marketing} alt="growth and marketing service" />
                <h4 className="mb-0" id="h4hover">
                  GROWTH & MARKETING
                </h4>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href="/services/enterprise-software-solution" rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={Software} alt="enterprise solution service" />
                <h4 className="mb-0" id="h4hover">
                  ENTERPRISE SOLUTION
                </h4>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href="/services/e-commerce-web-apps" rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={ecom} alt="e-commerce web and app service" />

                <h4 className="mb-0" id="h4hover">
                  E-COMMERCE WEB & APPS
                </h4>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href="/services/cms-design-development" rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={cms} alt="cms design and development service" />

                <h4 className="mb-0" id="h4hover">
                  CMS DESIGN & DEVELOPMENT
                </h4>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <a
                className="service-item d-block rounded text-center h-100 p-4"
                href="/" rel="noopener noreferrer"
              >
                <img className="img-fluid rounded mb-4" src={customers} alt="Ready made solution service" />

                <h4 className="mb-0" id="h4hover">
                  READY MADE SOLUTION
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Connect />
      <br />
      {/* {why choose Us */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="h-100">
                <h6 className=" bg-white  text-primary " id="whoweare">
                  WHY OMKA TECH
                </h6>
                <h2 className="display-6 mb-4" id="whoweare">
                  Why People Trust Us?
                  <span style={{ color: "#04165D" }} id="whoweare">
                    Learn About Us!
                  </span>
                </h2>
                <p className="mb-4">
                At OMKA TECH, we specialize in delivering comprehensive business solutions to our clients. Our process involves converting their requirement documents into functional technologies, ensuring that their needs are met effectively. Here are the key aspects of our services:
                </p>
                <div className="row g-4">
                  <div className="col-12">
                    <div className="skill">
                      <div className="d-flex justify-content-between">
                        {/* <p class="mb-2">Digital Marketing</p><br/><br/> */}
                      </div>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓  Contractual Agreement

                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Business Advisory and Adaptive Development

                      </h6>
                    
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Comprehensive Cyber Defense

                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Competent and Enthusiastic Team

                      </h6>
                     
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Full Accountability, and Complete Ownership
                      </h6>
                      <h6
                        style={{ color: "#6F7378", textAlign: "left" }}
                        id="whoweare"
                      >
                        ✓ Post-Implementation Assistance & Support
                      </h6>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="skill">
                      <div className="d-flex justify-content-between">
                        {/* <p class="mb-2">SEO & Backlinks</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="skill">
                      <div className="d-flex justify-content-between">
                        {/* <p class="mb-2">Design & Development</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid "  ref={targetDivRef1} src={hero} alt="Omka Tech delivering comprehensive business 
solutions to his clients" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee /><br /><br /><br />
      {/* process */}
      <div className="container-xxl py-5 s3" >
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h2 className="display-6 mb-4" id="whoweare">
              Our Work
              <span style={{ color: "#04165D" }} id="whoweare">
                Process
              </span>
            </h2>
          </div>
          <div className="row g-4">
            <FlowChart />
          </div>
        </div>
      </div>
      <br /><br />
      <Tools />
      {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
      <div className="container-xxl py-5" id="homeclient">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h2 className="display-6 mb-4 homeclient1" id="whoweare">
              What Our Client Say
              <span style={{ color: "#04165D" }} id="whoweare">
                About Us
              </span>
            </h2>
          </div>
        </div>
      </div>
      <Youtube />
      <div className="container-xxl" id="elfsight">
        <div className="container">
          <div className="row g-5">

            <div className="elfsight-app-f2184c12-c34e-45de-a57d-8f06dbd39cc8"></div>
           
          </div></div>
        <br />
      </div>
      <br />
      <br />
      <HeadBlog />
      <br />
      <br />
      {/* conatct */}
      <ContactForm />
      {/* footer */}
      <Footer />
      {/* {hide && <>


        <div id="mybutton">
          <button class="feedback" onClick={show1} >Special&nbsp;&nbsp; <i class="fa fa-angle-up" style={{ fontSize: "25px" }}></i></button>

        </div></>}


      {show && <>


        <div id="mybutton1">
          <button class="feedback1" onClick={show2}>Special&nbsp;&nbsp; <i class="fa fa-angle-down" style={{ fontSize: "25px" }}></i></button><div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container">
                  <div class="row">
                    <div class="col-4"><img src="https://img.freepik.com/premium-photo/businessman-using-tech-devices-icons-thin-line-interface_117023-904.jpg" id="sdd"></img></div>
                    <div class="col-4"><img src="https://img.freepik.com/premium-photo/businessman-using-tech-devices-icons-thin-line-interface_117023-904.jpg" id="sdd"></img></div>
                    <div class="col-4"><img src="https://img.freepik.com/premium-photo/businessman-using-tech-devices-icons-thin-line-interface_117023-904.jpg" id="sdd"></img></div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="row">
                    <div class="col-4"><img src="https://img.freepik.com/premium-photo/businessman-using-tech-devices-icons-thin-line-interface_117023-904.jpg" id="sdd"></img></div>
                    <div class="col-4"><img src="https://img.freepik.com/premium-photo/businessman-using-tech-devices-icons-thin-line-interface_117023-904.jpg" id="sdd"></img></div>
                    <div class="col-4"><img src="https://img.freepik.com/premium-photo/businessman-using-tech-devices-icons-thin-line-interface_117023-904.jpg" id="sdd"></img></div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="row">
                    <div class="col-4"><img src="https://img.freepik.com/premium-photo/businessman-using-tech-devices-icons-thin-line-interface_117023-904.jpg" id="sdd"></img></div>
                    <div class="col-4"><img src="https://img.freepik.com/premium-photo/businessman-using-tech-devices-icons-thin-line-interface_117023-904.jpg" id="sdd"></img></div>
                    <div class="col-4"><img src="https://img.freepik.com/premium-photo/businessman-using-tech-devices-icons-thin-line-interface_117023-904.jpg" id="sdd"></img></div>
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" id="arrow" aria-hidden="true" style={{ color: "black", backgroundColor: "darkblue" }}></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" id="arrow" aria-hidden="true" style={{ color: "white", backgroundColor: "darkblue" }}></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

        </div></>
        } */}
      <GetInTouch />
      <CookieConsent
        enableDeclineButton
        declineButtonStyle={{
          color: "white",
          backgroundColor: "black",
          fontSize: "13px",
        }}
        buttonStyle={{
          color: "white",
          backgroundColor: "black",
          fontSize: "13px",
        }}
      >
        {" "}
        <h6 style={{ color: "white", fontWeight: "lighter" }}>
          We use cookies on our website to give you the most relevant experience
          by remembering your preferences and repeat visits. By clicking “Accept
          All”, you consent to the use of ALL the cookies. However, you may
          visit "Cookie Settings" to provide a controlled consent.
        </h6>
      </CookieConsent>
    </div>
  );
};
export default Header1;
