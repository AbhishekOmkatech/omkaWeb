import React from "react";
import Flogo from "../../images/01 (1).PNG";
import pdf from "../../images/pdffile.png";
import PDF from "../../images/Omkatech Portfolio.pdf";
import google from "../../images/socialicon/google.jpg";
import glassdoor from "../../images/socialicon/glassdoor.png";
import goodfirm from "../../images/socialicon/goodfrim.jpg";
import appl from "../../images/socialicon/app.png";
import clutch from "../../images/socialicon/clutch.jpg";
import cb from "../../images/socialicon/cb.png";
import amibition from "../../images/socialicon/ambition.png";
import insta from "../../images/socialicon/insta.png";
import fb from "../../images/socialicon/fb.png";
import li from "../../images/socialicon/li.png";
import pin from "../../images/socialicon/pin.png";
import yt from "../../images/socialicon/yt.png";
import twitter from "../../images/socialicon/twitter.png";
import be from '../../images/socialicon/be.png'
import d from '../../images/socialicon/d.png'
const Footer = () => {
  return (
    <div>
      <div
        class="container-fluid bg-dark text-body footer wow fadeIn"
        data-wow-delay="0.1s" id="jhu"
      >
        
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <div
                class="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <img src={Flogo} id="suru2" alt="Omka Tech logo"></img>
                <h1></h1>
                <a
                  href="https://www.pinterest.com/omkatech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={pin} id="re11" alt="text"></img>
                </a>
                <a
                  href="https://twitter.com/omka_tech"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={twitter} id="re11" alt="text"></img>
                </a>
                <a
                  href="https://dribbble.com/OMKATECH"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={d} id="re11" alt="text"></img>
                </a>
                <a
                  href="https://www.facebook.com/omkatech"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={fb} id="re11" alt="text"></img>
                </a>
               
                <br />
                <a
                  href="https://www.linkedin.com/company/omkatech/"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={li} id="re11" alt="text"></img>
                </a>
               
                <a
                  href="https://www.instagram.com/omkatech/"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={insta} id="re11" alt="text"></img>
                </a>
                <a
                  href="https://www.behance.net/omkatech"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={be} id="re11" alt="text"></img>
                </a>
                <a
                  href="https://youtube.com/channel/UCXSgkWQ9gScl-UH_Xhfq28g"
                  target="_blank"
                  rel="noopener"
                >
                  <img src={yt} id="re11" alt="text"></img>
                </a>
                <br />
                <br />
                <img src={pdf} id="pdf1" alt="text"></img>&nbsp;&nbsp;&nbsp;
                <a href={PDF} target="_blank" rel="noopener">
                  <span class="text-light" id="company">
                    COMPANY PROFILE
                  </span>
                </a>
                
              </div><br/>
              <a href='//www.dmca.com/Protection/Status.aspx?ID=ff7c6219-80ff-4146-b2cb-04374246c28d' target="__blank" title='DMCA.com Protection Status' class='dmca-badge'> <img src ='https://images.dmca.com/Badges/dmca-badge-w100-2x1-02.png?ID=ff7c6219-80ff-4146-b2cb-04374246c28d'  alt='DMCA.com Protection Status'  style={{width:"100px",height:"50px"}}/></a> 
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Quick Links</h5>
              <a
                class="btn btn-link"
                href="/about-us"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                About Us
              </a>
              <a
                class="btn btn-link"
                href="/contact-us"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </a>

              <a
                class="btn btn-link"
                href="/privacy-policy"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                Privacy Policy
              </a>
              <a
                class="btn btn-link"
                href="/term-condition"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                Terms & Conditions
              </a>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Services</h5>
              <div class="row g-2">
                <a
                  href="/Services/Website-Development"
                  class="btn btn-link"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Web Development
                </a>
                <a
                  href="/services/mobile-app-development"
                  class="btn btn-link"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Mobile App Development
                </a>
                <a
                  href="/services/designing"
                  class="btn btn-link"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Graphics & UI/UX
                </a>
                <a
                  href="/services/social-media-marketing"
                  class="btn btn-link"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Growth & Marketing
                </a>
                <a
                  href="/services/enterprise-software-solution"
                  class="btn btn-link"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  Enterprise Software Solution
                </a>
                <a
                  href="/services/e-commerce-web-apps"
                  class="btn btn-link"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  E-Commerce Web & Apps
                </a>
                <a
                  href="/services/cms-design-development"
                  class="btn btn-link"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  CMS Design & Development
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-light mb-4">Performance Acknowledgement</h5>
              <div
                class="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <a
                  href="https://www.google.com/search?q=omkatech&rlz=1C1RXQR_enIN954IN954&oq=omkatech+&aqs=chrome..69i57j35i39j69i60l2j69i65j69i60l2.4979j0j4&sourceid=chrome&ie=UTF-8#lrd=0x390cdd5e7380709f:0xec61f76c9bb449c8,1,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={google} id="re1" alt="text"></img>
                </a>

                <a
                  href="https://www.glassdoor.com/Overview/Working-at-Omka-Tech-EI_IE8394472.11,20.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={glassdoor} id="re1" alt="text"></img>
                </a>

                <a
                  href="https://www.crunchbase.com/organization/omka-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={cb} id="re1" alt="text"></img>
                </a>
                <br />

                <a
                  href="https://www.goodfirms.co/company/omka-tech-llp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={goodfirm} id="re1" alt="text"></img>
                </a>

                <a
                  href="https://clutch.co/profile/omka-tech#summary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={clutch} id="re1" alt="text"></img>
                </a>

                <a
                  href="https://www.ambitionbox.com/overview/omka-tech-overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={amibition} id="re1" alt="text"></img>
                </a>
                <a
                  href="https://www.appfutura.com/companies/omka-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={appl} id="re1" alt="text"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center   ">
                Copyright &copy; 2023{" "}
                <a href="https://omkatech.com/" rel="noopener noreferrer">
                  Omka Tech
                </a>
                . All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
