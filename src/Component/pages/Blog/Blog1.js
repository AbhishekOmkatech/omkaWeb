import React, { useState, useEffect } from "react";
import Flogo from "../../../images/01 logo.png";
import "../../css/style.css";
import Helmet from "react-helmet";
import Footer from "../Footer";
import GetInTounch from "../GetInTounch";
import b1 from "../../../images/blog/b2.webp";
import b2 from "../../../images/blog/b1.png"
import axios from "axios";
// blogimg
import blog1 from '../../../images/blog/TRANSFORMATION.png'
import blog2 from '../../../images/blog/02 Outsourcing-01.jpg'
import blog3 from '../../../images/blog/03 website design-01.jpg'
import blog4 from '../../../images/blog/04 ecommerce-01.jpg'
import blog5 from '../../../images/blog/b11.png'
import $ from 'jquery'

import { useNavigate } from "react-router-dom";
const { REACT_APP_API_ENDPOINT } = process.env;
const Blog1 = () => {

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



    const [NameP, setNameP] = useState("");
    const [PhoneP, setPhoneP] = useState("");
    const [EmailP, setEmailP] = useState("");
    const [Message, setMessage] = useState("");
    const [message, setMess] = useState("");
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate("");
    const submitNowP = (e) => {

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(EmailP)) {
            setEmailError('Invalid email address');
        } else if (EmailP === "") {
            setMess("Required *");
        } else {
            navigate("/thankyou");
            const url = `${REACT_APP_API_ENDPOINT}/home.php`;
            let formData = new FormData();
            formData.append("Name", NameP);
            formData.append("Email", EmailP);
            formData.append("Phone", PhoneP);
            formData.append("Message", Message);
            axios.post(url, formData).then((res) => {

            });
            setNameP("");
            setEmailP("");
            setPhoneP("");
            setMessage("");
            e.preventDefault();
        }
    };
    return (
        <div>
            <Helmet>
                <script>{`{"gtag('event', 'conversion', {'send_to': 'AW-676251754/uHhwCNibqokYEOqQu8IC'});"}`}</script>

            </Helmet>
            <Helmet>
                <title>
                    Web Design & Development Company in Noida
                </title>
                <meta
                    name="description" data-react-helmet="true"
                    content="We’re a website development company in Noida. Omka Tech offers SEO-friendly, mobile-responsive websites with 24/7 support. Open your online store with us."
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
            <br />
            <nav
                className="navbar navbar-expand-md fixed-top navbar-dark py-lg-0 px-lg-5"
                data-wow-delay="0.1s"
                id="bottomNavbar" style={{ backgroundColor: "#F2F2F2", height: "80px" }}
            >
                <a href="/" className="navbar-brand ms-3 d-lg-none" rel="noopener noreferrer">
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
                                }}
                                id="hidelogo"
                                alt="Omka Tech logo"
                            ></img>
                        </a>
                        <a href="/" className="nav-item nav-link" id="homeleft">
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
                                <a href="/about-us" className="dropdown-item" rel="noopener noreferrer">
                                    Our Company
                                </a>
                                <a href="/Careers" className="dropdown-item" rel="noopener noreferrer">
                                    Careers
                                </a>
                                {/* <a
                                    href="/Main"
                                    className="dropdown-item"
                                    rel="noopener noreferrer"
                                >
                                    CaseStudy
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
                                <a href="/services/website-development" className="dropdown-item" rel="noopener noreferrer">
                                    Website Development
                                </a>
                                <a
                                    href="/services/mobile-app-development"
                                    className="dropdown-item" rel="noopener noreferrer"
                                >
                                    Mobile App Development
                                </a>
                                <a href="/services/designing" className="dropdown-item" rel="noopener noreferrer">
                                    Graphics & UI/UX
                                </a>
                                <a
                                    href="/services/social-media-marketing"
                                    className="dropdown-item" rel="noopener noreferrer"
                                >
                                    Growth & Marketing
                                </a>
                                <a
                                    href="/services/enterprise-software-solution"
                                    className="dropdown-item"
                                >
                                    Enterprise Software Solution
                                </a>
                                <a href="/services/e-commerce-web-apps" className="dropdown-item" rel="noopener noreferrer">
                                    E-Commerce Web & Apps
                                </a>
                                <a
                                    href="/services/cms-design-development"
                                    className="dropdown-item" rel="noopener noreferrer"
                                >
                                    CMS Design & Development
                                </a>
                                {/* <a href="/Services/ReadyMadeSolution" className="dropdown-item">
                  Ready Made Solution
                </a> */}
                            </div>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <a href="/hire-resources" className="nav-item nav-link" rel="noopener noreferrer">
                            Hire Resources
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="/blog" className="nav-item nav-link active" rel="noopener noreferrer">
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


            <img src="https://www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/05/blog_banner.webp?var=580408830" id="suri2"></img>
            <p id="kj1">The Importance of Digital
                Transformation<br /> in Modern
                Business</p><br />
            <p id="kj2">Date : August 30, 2023 </p>



            <br />

            <div className="container-xxl" style={{ marginTop: "100px" }}>
                <div className="row">
                    <div className="col-8">
                        <section className="main" >
                            <br />
                            <h2 id="sg2">The Importance of Digital Transformation in Modern Business</h2>


                            <div className="container-xxl">
                                <div
                                    className="container"

                                >
                                    
                                    <p id="sg3">
                                        In today’s rapidly changing world, digital transformation has become
                                        a buzzword among businesses. It refers to the process of integrating
                                        digital technology into all areas of a business, fundamentally
                                        changing how organizations operate and deliver value to customers.
                                        Digital transformation has become critical for companies to stay
                                        competitive and relevant in the modern business landscape. In this
                                        blog, we will discuss the importance of digital transformation in
                                        modern business.
                                        <br />
                                    </p>
                                </div>
                            </div>
                            <div className="container-xxl">
                                <div className="container">
                                    <img src={b1} alt="blog-image" id="blog1img" ></img>
                                </div>
                            </div>
                            <br /> <br />
                            <div className="container-xxl">
                                <div className="container">
                                    <p id="sg3" idstyle={{ lineHeight: "30px" }}>
                                        <span>
                                          
                                            <b>• Improved Efficiency and Agility </b>{" "}
                                        </span>
                                        <br /> Digital transformation enables companies to automate their
                                        processes and systems, which leads to increased efficiency and
                                        agility. For example, implementing a customer relationship
                                        management (CRM) system can help automate the sales process,
                                        reducing the time and effort required for manual data entry. It can
                                        also provide real-time insights into customer interactions, enabling
                                        sales teams to respond to customer needs quickly.
                                    </p>
                                    <p id="sg3">
                                        <span>
                                            <b> • Better Customer Experience </b>{" "}
                                        </span>
                                        <br /> Digital transformation can also lead to a better customer
                                        experience. By leveraging digital technology, companies can provide
                                        customers with more personalized experiences that cater to their
                                        specific needs. For example, a retail company can use data analytics
                                        to understand customer preferences and provide personalized product
                                        recommendations. This can lead to increased customer loyalty and
                                        higher revenues.
                                    </p>
                                    <p id="sg3">
                                        <span>
                                           
                                            <b>• Increased Productivity and Collaboration</b>{" "}
                                        </span>
                                        <br /> Digital transformation can also help companies increase
                                        productivity and collaboration. For example, cloud-based
                                        collaboration tools can enable employees to work together on
                                        projects in real-time, regardless of their location. This can lead
                                        to increased productivity and faster time to market for new products
                                        and services.
                                    </p>
                                </div>
                            </div>
                            <div className="container-xxl">
                                <div className="container">
                                    <img src={b2} alt="blog-image" id="blog1img"></img>
                                </div>
                            </div>
                            <br /> <br />
                            <div className="container-xxl">
                                <div className="container">
                                    <p id="sg3">
                                        <span>
                                            <b> • Competitive Advantage</b>
                                        </span>
                                        <br /> Digital transformation can provide companies with a
                                        competitive advantage. By leveraging digital technology, companies
                                        can create new business models, enter new markets, and differentiate
                                        themselves from competitors. For example, a traditional
                                        brick-and-mortar retailer can leverage e-commerce to reach customers
                                        in new geographic regions and increase sales.
                                    </p>
                                    <p id="sg3">
                                        <span>
                                            <b> • Business Continuity </b>
                                        </span>
                                        <br /> Digital transformation can also help companies ensure
                                        business continuity in times of crisis. For example, companies that
                                        have embraced cloud-based systems can continue to operate remotely
                                        during a pandemic, ensuring that business operations continue
                                        uninterrupted.
                                    </p>
                                    <p id="sg3">
                                        In conclusion, digital transformation has become a critical
                                        component of modern business. It can help companies increase
                                        efficiency and agility, provide better customer experiences,
                                        increase productivity and collaboration, gain a competitive
                                        advantage, and ensure business continuity. Companies that embrace
                                        digital transformation will be well-positioned to thrive in the
                                        ever-changing business landscap.
                                    </p>
                                </div>
                            </div>
                            <br />

                        </section></div>
                    <div className="col-4" ><aside >
                        <br />  <br />
                        <h3 id="sg4"><center>Recent Blog</center></h3>
                        <nav id="sg1">
                            <ul id="sg2">
                                <li><a href="/blog/the-importance-of-digital-transformation-in-modern-business" className="active1"><i className="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i>&nbsp;  The Importance of Digital
                                    Transformation in Modern
                                    Business</a></li>
                                <li className="active">
                                    <a href="/blog/the-Pros-and-Cons-of-outsourcing-IT-services-for-your-business">
                                        <i className="fa fa-hand-o-right" style={{ fontSize: "20px" }}></i>&nbsp; The Pros and Cons of Outsourcing IT Services for Your Business
                                    </a>
                                </li>
                                <li><a href="/blog/how-your-new-website-design-will-help-your-business-grow" >

                                    <i className="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i>&nbsp; How Your New Website Design Will Help Your Business Grow?</a>
                                </li>
                                <li><a href="/blog/how-ecommerce-website-development-is-necessary-for-a-business-to-succeed" >

                                    <i className="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i>&nbsp; How Ecommerce Website Development Is Necessary for a Business
                                    to Succeed?</a>
                                </li>
                                <li> <a href="/blog/top-reasons-why-strategies-fail"  >

                                    <i className="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i>&nbsp;Top Reasons Why Strategies Fail ?</a></li>

                                    <li> <a href="/blog/the-art-of-branding:-understanding-the-7-types-of-Logos"  >

<i className="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i>&nbsp;The Art of Branding : Understanding the 7 Types of Logos</a></li>



                                <li>                 <div id="kj4">
                                    <br /><h4 id="kj5">Let’s Build</h4>
                                    <h3 id="kj5">Your Dream App!</h3>
                                    <form id="kj6">
                                        <input type="text" value={NameP}
                                            onChange={(e) => {
                                                setNameP(e.target.value);
                                            }} placeholder="Name" className="kj"></input>
                                        <br />
                                        <input type="email" placeholder="Email" className="kj" value={EmailP}
                                            onChange={(e) => {
                                                setEmailP(e.target.value);
                                                setEmailError('');
                                            }}></input>
                                        <br />
                                        <input type="number" placeholder="Phone" className="kj" value={PhoneP}
                                            onChange={(e) => {
                                                setPhoneP(e.target.value);
                                            }}></input>
                                        <br />
                                        <textarea placeholder="What's your project about ?" className="kj" cols={22} value={Message}
                                            onChange={(e) => {
                                                setMessage(e.target.value);
                                            }}></textarea>

                                        <button
                                            className="btn btn-primary kj  py-2 px-3"
                                            onClick={submitNowP}

                                        >

                                            
                                            <center id="ds" style={{ color: "white" }}>Submit</center>

                                        </button>
                                    </form>
                                </div></li>
                                <li><div className="kj1">
                                    <span className="kj2">Share On</span> &nbsp;
                                    <span className="kj3">
                                        <a href="">  <img className="img img-responsive" src="https://www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/05/social_share_img1.webp?var=380929123" alt="Facebook" /></a>&nbsp;
                                        <a href=""> <img className="img img-responsive" src="https://www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/05/social_share_img2.webp?var=1766419074" alt="Twitter"></img></a>&nbsp;
                                        <a href=""> <img className="img img-responsive" src="https://www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/05/social_share_img3.webp?var=28660498" alt="Linked In"></img></a>
                                    </span>

                                </div></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </nav>
                    </aside></div>

                </div>
            </div>
            <div className="container-xl" id="explore">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Explore <b>More</b></h2>
                        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0"  >

                            <div className="carousel-inner">
                                <div className="item carousel-item active">
                                    <div className="row">

                                        <div className="col-4">
                                            <div className="card" >
                                                <img className="card-img-top kj7" src={blog1} alt="Card image cap" style={{ maxWidth: "100%", height: "200px" }} />
                                                <div className="card-body">

                                                    <p className="card-text">The Importance of Digital
                                                        Transformation in Modern
                                                        Business</p>
                                                    <p><i className="fa fa-calendar"></i> 30th August 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="card" >
                                                <img className="card-img-top kj7" src={blog2} alt="Card image cap" style={{ maxWidth: "100%", height: "200px" }} />
                                                <div className="card-body">

                                                    <p className="card-text">The Pros and Cons of Outsourcing IT Services for Your Business.</p>
                                                    <p><i className="fa fa-calendar"></i> 30th August 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="card" >
                                                <img className="card-img-top kj7" src={blog3} alt="Card image cap" style={{ maxWidth: "100%", height: "200px" }} />
                                                <div className="card-body">

                                                    <p className="card-text">How Your New Website Design Will Help Your Business Grow?</p><br />
                                                    <p><i className="fa fa-calendar"></i> 30th August 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item carousel-item">
                                    <div className="row">

                                        <div className="col-4">
                                            <div className="card" >
                                                <img className="card-img-top kj7" src={blog3} alt="Card image cap" style={{ maxWidth: "100%", height: "200px" }} />
                                                <div className="card-body">

                                                    <p className="card-text">How Your New Website Design Will Help Your Business Grow?</p><br />
                                                    <p><i className="fa fa-calendar"></i> 30th August 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="card" >
                                                <img className="card-img-top kj7" src={blog4} alt="Card image cap" style={{ maxWidth: "100%", height: "200px" }} />
                                                <div className="card-body">

                                                    <p className="card-text">How Ecommerce Website Development Is Necessary for a Business
                                                        to Succeed?</p>
                                                    <p><i className="fa fa-calendar"></i> 30th August 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="card" >
                                                <img className="kj7" src={blog5} alt="Card image cap" style={{ maxWidth: "100%", height: "200px" }} />
                                                <div className="card-body">

                                                    <p className="card-text"> Top Reasons Why Strategies Fail</p><br /><br />
                                                    <p><i className="fa fa-calendar"></i> 30th August 2023</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <i className="fa fa-angle-left" style={{ color: "darkgray" }}></i>
                            </a>
                            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                                <i className="fa fa-angle-right" style={{ color: "darkgray", marginLeft: "50px" }}></i>
                            </a>
                        </div>
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active" style={{ marginTop: "140px" }}></li>
                            <li data-target="#myCarousel" style={{ marginTop: "140px" }} data-slide-to="1"></li>

                        </ol>
                    </div>
                </div>
            </div>

            <GetInTounch />
            <br />
<Footer/>
        </div>
    )
}

export default Blog1
