import React, { useState, useRef,useEffect } from "react";
import "../../css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Flogo from "../../../images/01 logo.png";
import "../../css/style.css";
import Helmet from "react-helmet";
import $ from "jquery";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import GetInTounch from "../GetInTounch";
import axios from "axios";
import po from '../../../images/popup.PNG'

const { REACT_APP_API_ENDPOINT } = process.env;

const Job = () => {

 
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

  const [product, setProducts] = useState([]);

  useEffect(() => {
    const url = 'https://www.omkatech.com/getCareers.php';
    axios.get(url).then((res) => setProducts(res.data));
  }, [product]);
  
  console.log(product)

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
  // popup
  const navigate = useNavigate();
  const selectedFile = useRef();
  const [NameP, setNameP] = useState("");
  const [PhoneP, setPhoneP] = useState("");
  const [EmailP, setEmailP] = useState("");
  const [Resume, setResume] = useState("");
  const [show, setShow] = useState(true);

  const submitNow1 = (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way.
  
    const url = 'https://www.omkatech.com/career.php';
  
    const formData = new FormData();
    formData.append("Name", NameP);
    formData.append("Email", EmailP);
    formData.append("Phone", PhoneP);

    formData.append("Resume", selectedFile.current.files[0]);
  
    // Log the formData before making the request
    console.log(formData);
  
    fetch(url, {
        method: 'POST',
        body: formData,
    })
        .then((res) => {
            if (res.ok) {
                // Handle success, e.g., show a success message or redirect
            } else {
                // Handle errors, e.g., show an error message
            }
        })
        .catch((error) => {
            // Handle network or other errors
        });
  
        setNameP("");
        setEmailP("");
        setEmailP("");
        setPhoneP("");
        setResume("");
  };

 

  return (
    <div>
      <Helmet>
        <script>{`{"gtag('event', 'conversion', {'send_to': 'AW-676251754/uHhwCNibqokYEOqQu8IC'});"}`}</script>
      </Helmet>
      <Helmet>
        <title>Careers - Omka Tech</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Omka Tech and give a boost to your professional journey. Join a dynamic team of experts, unleash your creativity, and help businesses thrive in the digital landscape!" data-react-helmet="true"
        />
        <meta
          name="keywords" data-react-helmet="true"
          content="Website Design, Web design, Web Development Company, Website Development Company"
        />
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
        id="bottomNavbar"
        className="navbar navbar-expand-md fixed-top navbar-dark py-lg-0 px-lg-5"
        data-wow-delay="0.1s" style={{ backgroundColor: "#F2F2F2", height: "80px" }}
      >
        <a
          href="/"
          className="navbar-brand ms-3 d-lg-none"
          rel="noopener noreferrer"
        >
          <img
            src={Flogo}
            style={{ height: "40px", marginLeft: "-20px" }}
            alt="Omka Tech logo"
            id="hidelogo1"
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
            &nbsp;&nbsp;&nbsp;
            <div className="nav-item dropdown">
              <a
                rel="noopener noreferrer"
                href="#"
                className="nav-link dropdown-toggle active"
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
                  className="dropdown-item active"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
                <a
                  href="/Main"
                  className="dropdown-item"
                  rel="noopener noreferrer"
                >
                  Case Study
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
                  className="dropdown-item "
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
        id="careerBanner"
      >
        <h1 id="ahblog">
          CAREERS
          <hr id="ahr" />
        </h1>
        <br />
        <h2 id="cmsa">
          Unlock Your Potential, Achieve Your
          <br /> Dreams : Build a Rewarding Career.
        </h2>
      </div>
      <br />

      <br />
       {/* job list*/}
       {product.map((item, index) => (
      <div className="container-xxl py-5" key={index}>
       
        <div className="container" >
          <div className="row g-5">
            <div id="careerJobb">
              <div id="careerJob1">
                <h2 className="text-light" id="careerh1">
                {/* Front End Developer (On- Site) */}{item.Title}
                </h2>
              </div>
              {item.Description !== null ? (
  <div>
    <h4 className="" id="skillshead">
      Job Description:
    </h4>
    <p style={{ padding: "10px", margin: "20px" }}>{item.Description}</p>
  </div>
) : (
  <div>
    {console.log("no")}
  </div>
)}

              {/* <h4 className="" id="skillshead">
              Job Description:
              </h4>

<p style={{padding:"10px",margin:"20px"}}>{item.Description}</p> */}
{/* We are looking for an experienced Front-End Developer to join our dynamic team. As a Front-End Developer, you will play a pivotal role in designing and implementing user-friendly web applications. Your expertise in a range of technologies and platforms is essential to our success. */}

<h4 className="" id="skillshead">
Skills Required:
              </h4>
               <div dangerouslySetInnerHTML={{ __html: item.Skills }} />
           
              {/* <ul id="skillUl">
                <li>
                  ➜ 3+ years of experience as a Front End Developer
                </li>
                <li>
                  ➜ Proficiency in React JS and Vue JS for building interactive user interfaces.
                </li>
                <li>➜ Familiarity with PHP and WordPress for content management and custom plugin development.
                  .</li>
                <li>➜ Experience working with Git for version control and collaboration on GitHub.

                </li>
                <li> ➜ Knowledge with Google Cloud Platform.</li>
                <li> ➜ AWS experience, including deployment and maintenance of web applications.</li>
                <li> ➜ Strong problem-solving and debugging skills.</li>
                <li> ➜ Knowledge of responsive web design and mobile-first development.</li>
                <li> ➜ Good communication skills and the ability to work in a collaborative team environment.</li>
                <li> ➜ Creativity and attention to detail for delivering visually appealing and functional web solutions.</li>
                <li> ➜ Solid understanding of web performance optimization and best practices.</li>
              </ul> */}



              <ul id="skillUl">
                <br />
                <h5 id="position">Positions: {item.Position}| Experience: {item.Experience}</h5>
                <br />
                <button
                  className="btn btn-primary rounded-pill"
                  style={{ height: "45px", color: "white" }}
                  data-target="#myModal"
                  role="button"
                  data-toggle="modal"
                >
                  Apply Now ➜
                </button>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
       ))}
      
{/* 
          <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div id="careerJobb">
              <div id="careerJob1">
                <h2 classNameName="text-light" id="careerh1">
               Social Media Executive (On- Site)
                </h2>
              </div>
<h4 classNameName="" id="skillshead">
Requirement Responsibilities:
              </h4>
              <ul id="skillUl">
                <li>
                  ➜ Bachelor’s / Masters degree in Communications, Marketing, English, Journalism, Engineering, or related field.
                </li>
                <li>
                  ➜ At least 3 year of experience in handling social media platforms, copy writing and making content.
                </li>
                <li>➜ Understand and implement social media strategies to increase brand awareness, engagement, and sales.
                  .</li>
                <li>➜ Should be able to manage multiple social media platforms like Meta, LinkedIn, YouTube, Google, etc.

                </li>
                <li> ➜ Familiarity with keyword placement and other SEO-based content writing.</li>
                <li> ➜ Develop the content strategy which is aligned with short-term and long-term keyword targets.</li>
                <li> ➜ Will be required to write content on all kinds of subjects in the form of Blogs, Social Media Posts, Articles, etc.</li>
                <li> ➜ Research and gather useful information and write relevant content as per the style, tone, and requirements.</li>
                <li> ➜ Develop engaging and attractive posts which could attract the attention of readers.</li>
                <li> ➜ Proficiency in crafting SEO-centric content and digital content trends.</li>
                <li> ➜ Ability to transform technical concepts into engaging, digestible content.</li>
                  <li> ➜ Familiarity with various content creation tools and platforms.</li>
                <li> ➜ Good Communication Skills</li>
              </ul>



              <ul id="skillUl">
                <br />
                <h5 id="position">Positions: 01 | Experience: 3+ year</h5>
                <br />
                <button
                  className="btn btn-primary rounded-pill"
                  style={{ height: "45px", color: "white" }}
                  data-target="#myModal"
                  role="button"
                  data-toggle="modal"
                >
                  Apply Now ➜
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div id="careerJobb">
              <div id="careerJob1">
                <h2 classNameName="text-light" id="careerh1">
                  Business Development Executive (On- Site)
                </h2>
              </div>
              <h4 classNameName="" id="skillshead">
                Role Description:
              </h4>

<p style={{padding:"10px",margin:"20px"}}>This is a full-time on-site role for a Business Development Executive. The Business Development Executive will be responsible for new business development and effective business communication, establishing and maintaining a strong network of client relationships, creating and developing sales strategies, and collaborating with other teams to drive growth and achieve sales targets.</p>
<h4 classNameName="" id="skillshead">
Job Description :
              </h4>
              <ul id="skillUl">
                <li>
                  ➜ Must be conversant with the ITbusiness development process including initiating calls, understanding requirements, proposals, price negotiation, deal closure, contract, etc.
                </li>
                <li>
                  ➜ Candidates should have prior experience acquiring projects related to e-commerce, websites, mobile applications (iOS & Android),SEO etc.
                </li>
                <li>➜ Making the presentation/proposals to the clients, negotiating rates, and following up till the closure.</li>
                <li>➜ Interacting and maintaining good relationships with new and existing clients and generating business from both.
                </li>
              </ul>
              <h4 classNameName="" id="skillshead">
                Required Candidate profile:
              </h4>
              <ul id="skillUl">
                <li>
                  ➜ 1yr+ of relevant experience.
                </li>
                <li>
                  ➜ Bachelor's degree or relevant experience.
                </li>
                <li>➜ Candidate must be an open learner and possess good IT sales knowledge.</li>
                <li>➜ Excellent English communication skills are required.</li>
                <li>➜ Ability to approach any situation with patience and very strong empathy.</li>
                <li>➜ Must be a team player with the ability to work independently, prioritize tasks, and meet targets/deadlines.</li>
              </ul>
              <br />




              <ul id="skillUl">
                <br />
                <h5 id="position">Positions: 01 | Experience: 1+ year</h5>
                <br />
                <button
                  class="btn btn-primary rounded-pill"
                  style={{ height: "45px", color: "white" }}
                  data-target="#myModal"
                  role="button"
                  data-toggle="modal"
                >
                  Apply Now ➜
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
   
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div id="careerJobb">
              <div id="careerJob1">
                <h2 className="text-light" id="careerh1">
                Email Marketing Executive (On- Site)
                </h2>
              </div>

              <h4 className="" id="skillshead">
                Job Description:
                
              </h4>

<p style={{padding:"10px",margin:"20px"}}>We are looking for a strategic, analytical, and creative Email Marketing Specialist to take the lead with our email marketing strategies. You will be responsible for planning and executing a wide range of email marketing campaigns to support lead generation, customer engagement, and retention. This role requires a deep understanding of customer segmentation, journey mapping, and dynamic and personalized communication implementation.</p>

<h4 className="" id="skillshead">
Skills Required:
              </h4>
              <ul id="skillUl">
                <li>
                  ➜ Extensive knowledge of Sales and Market.
                </li>
                <li>
                  ➜ Extensive knowledge of Website Development and Mobile Application.
                </li>
                <li>➜ Proven work experience as an Email Marketing Specialist.
                  .</li>
                <li>➜ Experience of 2+ years.
                </li>
                <li> ➜ Extensive knowledge of Data research and mining.</li>
                <li> ➜ Proven track record of exceeding Pre-Sales/Lead.</li>
                <li> ➜ Ability to work under tight deadlines</li>
                <li> ➜ Excellent planning, organization, and computer skills.</li>
                <li> ➜ Proficiency in marketing automation technology.</li>
                <li> ➜ Excellent written communication and copywriting skills.</li>
              </ul>
              <h4 className="" id="skillshead">
              Roles & Responsibilities:
              </h4>
              <ul id="skillUl">
                <li>
                  ➜ Generate potential clients through emails and innovative and latest lead generation platforms.

                </li>
                <li>
                  ➜ Must have worked on email marketing software, template creation, and sending bulk emails.
                </li>
                <li>➜ Managing the contact database and assisting with lead generation activities.</li>
                <li>➜ Have to target the USA, UK, and Australian markets.</li>
                <li>➜ Should have knowledge about emailing.</li>
                <li>➜ Research, recommend, and execute strategies for client growth.</li>
              </ul>
              <br />
              <h4 className="" id="skillshead">
              Perks and Benefits:
              </h4>
              <ul id="skillUl">
                <li>
                  ➜ Great work/life balance.

                </li>
                <li>
                  ➜ Salary range- As per company norms + Incentives on Closures.
                </li>
                <li>➜ 5 Working days (Working Days: Mon-Fri)</li>
                <li>➜ Fantastic team and fun work environment</li>
                <li>➜ Flexible working hour.</li>
            
              </ul>
              <br />




              <ul id="skillUl">
                <br />
                <h5 id="position">Positions: 01 | Experience:  2+ years.</h5>
                <br />
                <button
                  class="btn btn-primary rounded-pill"
                  style={{ height: "45px", color: "white" }}
                  data-target="#myModal"
                  role="button"
                  data-toggle="modal"
                >
                  Apply Now ➜
                </button>
              </ul>
              <br /><br />
            </div>
          </div>
        </div>
      </div> */}
      {/* popupform */}
      {show && (
        <div
          class="modal fade"
          id="myModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div
                  className="contact-page-form"
                  method="post"
                  style={{ marginTop: "-20px" }}
                >
                  <form onSubmit={submitNow1}>
                    <div className="containerB" style={{backgroundColor:"white"}}>
                      {" "}
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                      <div className="brand-logoB"> <img src={po}></img></div>
                      <div className="brand-titleB">Apply Now!!</div>
                      <div className="inputsB">
                        <label id="Booklabel">Name</label> :&nbsp;
                        <input
                          type="text"
                          placeholder="Enter Full Name"
                          id="inputBook"
                          value={NameP}
                          onChange={(e) => {
                            setNameP(e.target.value);
                          }}
                          required
                        />{" "}
                        <label id="Booklabel">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email
                        </label>{" "}
                        :&nbsp;&nbsp;
                        <input
                          type="email"
                          placeholder="Enter Email"
                          id="inputBook"
                          value={EmailP}
                          onChange={(e) => {
                            setEmailP(e.target.value);
                          }}
                          required
                        />{" "}
                        <br />
                        <label id="Booklabel">Phone</label> :&nbsp;
                        <input
                          type="number"
                          placeholder="Enter Phone"
                          id="inputBook"
                          value={PhoneP}
                          onChange={(e) => {
                            setPhoneP(e.target.value);
                          }}
                          required
                        />
                        <label id="Booklabel">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resume
                        </label>{" "}
                        :&nbsp;
                        <input
                          type="file"
                          placeholder="Enter Project Details"
                          id="inputBook"
                          value={Resume}
                          ref={selectedFile}
                          name="Project"
                          onChange={(e) => {
                            setResume(e.target.value);
                          }}
                          required
                        />
                        <button type="submit" id="bookNow" >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <br />
      <br />
      {/* conatct */}
      <ContactForm />
      {/* footer */}
      <Footer />

      {/* get in touch */}
      <GetInTounch />
    </div>
  );
};

export default Job;
