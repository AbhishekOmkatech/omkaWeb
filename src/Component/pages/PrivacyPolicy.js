import Flogo from "../../images/01 logo.png";
import "../css/bootstrap.min.css";
import "../css/style.css";
import $ from "jquery";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import GetInTounch from "./GetInTounch";

const PrivacyPolicy = () => {

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
        <title>Privacy Policy Of Omkatech Noida-India</title>
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
        class=""
        data-wow-delay="0.1s"
        style={{ height: "60px", backgroundColor: "white" }}
      >
        <div class="container" >

          <div class="flag-container">
            <img src='../india.png' class="flag-icon" alt="india"></img><span style={{ color: "white" }}>|</span>&nbsp;&nbsp;
            <img src='../us.png' class="flag-icon" alt="US"></img><span style={{ color: "white" }}>|</span>&nbsp;&nbsp;
            <img src='../canda.png' class="flag-icon" alt="Canda"></img>
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
        data-wow-delay="0.1s" id="bottomNavbar" style={{ backgroundColor: "#F2F2F2", height: "80px" }}
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
                  class="dropdown-item "
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
                  href="/services/designing"
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
                class="btn btn-primary rounded-pill active"
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
        class="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        id="PrivacyBanner"
      >
        <br />
        <h1 id="ah">
          Privacy Policy
          <hr id="hhr" />
        </h1>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 class="display-6 mb-4">
              Privacy Policy for{" "}
              <span style={{ color: "#04165D" }}> OMKA TECH</span>
            </h1>
          </div>
          <div class="row g-4" style={{ lineHeight: "normal" }}>
            <p>
              At Omka Tech, accessible from{" "}
              <a href="https://omkatech.com" rel="noopener noreferrer">
                https://omkatech.com
              </a>
              , one of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by Omka Tech and how we use it. If you have
              additional questions or require more information about our Privacy
              Policy, do not hesitate to contact us. This Privacy Policy applies
              only to our online activities and is valid for visitors to our
              website with regards to the information that they shared and/or
              collect in Omka Tech. This policy is not applicable to any
              information collected offline or via channels other than this
              website.{" "}
            </p>
            <h3 class=" bg-white  text-primary ">Consent</h3>
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
            <h4 class=" bg-white  text-primary ">Information we collect</h4>
            <p>
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <h4 class="   text-primary ">How we use your information</h4>
            <h6 class="  text-primary ">
              We use the information we collect in various ways, including to:
            </h6>
            <li id="whoweare1">Provide, operate, and maintain our website</li>
            <li id="whoweare1">Improve, personalize, and expand our website</li>
            <li id="whoweare1">
              {" "}
              Understand and analyze how you use our website
            </li>
            <li id="whoweare1">
              Develop new products, services, features, and functionality
            </li>
            <li id="whoweare1" style={{ textAlign: "justify" }}>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other{" "}
              <span style={{ marginLeft: "27px" }}>
                information relating to the website, and for marketing and
                promotional purposes
              </span>
            </li>
            <li id="whoweare1">Send you emails</li>
            <li id="whoweare1">Find and prevent fraud</li>
            <h4 class=" bg-white  text-primary ">Log Files</h4>
            <p>
              Omka Tech follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services' analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>
            <h4 class=" bg-white  text-primary ">Cookies and Web Beacons</h4>
            <p>
              Like any other website, Omka Tech uses 'cookies'. These cookies
              are used to store information including visitors' preferences, and
              the pages on the website that the visitor accessed or visited. The
              information is used to optimize the users' experience by
              customizing our web page content based on visitors' browser type
              and/or other information.
            </p>
            <h4 class=" bg-white  text-primary ">
              Advertising Partners Privacy Policies
            </h4>
            <p>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of Omka Tech.
            </p>
            <p>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on Omka Tech,
              which are sent directly to users' browser. They automatically
              receive your IP address when this occurs. These technologies are
              used to measure the effectiveness of their advertising campaigns
              and/or to personalize the advertising content that you see on
              websites that you visit.
            </p>
            <p>
              Note that Omka Tech has no access to or control over these cookies
              that are used by third-party advertisers.
            </p>
            <h4 class=" bg-white  text-primary ">
              Third Party Privacy Policies
            </h4>
            <p>
              Omka Tech's Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.
            </p>
            <p>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>
            <h4 class=" bg-white  text-primary ">
              GDPR Data Protection Rights
            </h4>
            <p>
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following :
            </p>
            <p>
              {" "}
              The right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </p>
            <p>
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </p>
            <p>
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </p>
            <p>
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </p>
            <p>
              The right to object to processing – You have the right to object
              to our processing of your personal data, under certain conditions.
            </p>
            <p>
              The right to data portability – You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions. If you
              make a request, we have one month to respond to you. If you would
              like to exercise any of these rights, please contact us.
            </p>
            <h4 class=" bg-white  text-primary ">Children's Information</h4>
            <p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>
            <p>
              Omka Tech does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records
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

export default PrivacyPolicy;
