import React, { useState } from "react";
import Flogo from "../../../images/01 logo.png";
import "../../css/style.css";
import Helmet from "react-helmet";
import Footer from "../Footer";
import GetInTounch from "../GetInTounch";
import b1 from "../../../images/blog/b9.png";
import b2 from "../../../images/blog/b7.png";
import axios from "axios";
import $ from 'jquery'
// blogimg
import blog1 from '../../../images/blog/TRANSFORMATION.png'
import blog2 from '../../../images/blog/02 Outsourcing-01.jpg'
import blog3 from '../../../images/blog/03 website design-01.jpg'
import blog4 from '../../../images/blog/04 ecommerce-01.jpg'
import blog5 from '../../../images/blog/b11.png'

import { useNavigate } from "react-router-dom";
const { REACT_APP_API_ENDPOINT } = process.env;

const Blog3 = () => {
    const [NameP, setNameP] = useState("");
    const [PhoneP, setPhoneP] = useState("");
    const [EmailP, setEmailP] = useState("");
    const [Message, setMessage] = useState("");
    const [message, setMess] = useState("");
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate("");
    const submitNowP = (e) => {
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
                            <a href="tel:+1 (437) 255-9950"><img src='../po.jpg' id="flag" alt="US"></img> &nbsp;+1 (437) 255-9950</a>&nbsp; |&nbsp;&nbsp;

                            <a href="tel:+91 9717511913"><img src='../in.jpg' id="flag" alt="india" ></img>&nbsp; +91 9717511913</a>
                        </div>

                    </div>
                </div>
            </nav>


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
            <p id="kj1"><br />
                How Your New Website Design Will<br /> Help Your Business Grow?</p><br />
            <p id="kj2">Date : August 30, 2023 </p>



            <br />
            <div className="container-xxl" style={{ marginTop: "80px" }}>
                <div className="row">
                    <div className="col-8">
                        <section className="main" >
                            <br />
                            <h2 id="sg2">How Your New Website Design Will Help Your Business Grow?</h2>


                            <div className="container-xxl">
                                <div
                                    className="container"

                                >

                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        Having a successful website is essential for any business. A great website not only helps to
                                        attract customers but can also increase revenue. So if you're looking to take your business
                                        to the next level, investing in a new website design is a great way to do it. But how can a
                                        new website design help your business grow?
                                        <br />
                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        First, working with a professional web development company can ensure that your website
                                        is built to industry standards. This will make it easier for customers to navigate, increasing
                                        the chances of them completing a purchase. Additionally, a website developed by a
                                        professional company is more likely to load quickly and reliably. Nobody likes browsing a
                                        slow website, so having a design built to optimize user experience will help keep customers
                                        around
                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>Custom website development is also an option. Working with a team of experts to create a
                                        unique website tailored to your brand and needs can help set you apart from the
                                        competition. This is especially important if your industry tends to have a lot of similar-looking
                                        websites</p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        Having a modern website design is also important. It should look and feel up-to-date and
                                        reflect your brand values. No customer wants to visit a website that looks old and outdated,
                                        so by using the latest website design tools you can make sure your customers have an
                                        enjoyable experience
                                    </p>
                                </div>
                            </div>
                            <div className="container-xxl">
                                <div className="container">
                                    <img src={b1} alt="blog-image" id="blog1img2" ></img>
                                </div>
                            </div>
                            {/* --------------------------------------------- */}
                            <br />
                            <div className="container-xxl">
                                <div className="container">
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        Last but not least, it’s important to make sure your website is optimized for mobile devices.
                                        Research shows that more and more people are using their smartphones to browse the
                                        internet. If your website isn’t optimized for mobile, then you could be missing out on potential
                                        customers
                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>In conclusion, investing in a new website design is an effective way to help your business
                                        grow. Working with a professional custom website development company</p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        A strong online presence is essential for any business to grow. A good company of web
                                        development can help you create a custom website to help your business stand out from the
                                        competition. From improved site navigation to optimized search engine optimization (SEO)
                                        techniques, your new website can help your business gain more visibility and customers.
                                        The following are some of the ways a custom website development can assist in making
                                        your business grow.
                                    </p>
                                </div>
                            </div>

                            <br />
                            <div className="container-xxl">
                                <div className="container">

                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        <span>
                                            {" "}
                                            <b>•  Brand Identity: </b>{" "}
                                        </span>
                                        <br /> An eye-catching website design with your logo and branding can help
                                        customers recognize your business. This will support your brand identity and also aid
                                        customers in remembering you
                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        <span>
                                            <b> • Enhanced SEO </b>{" "}
                                        </span>
                                        <br /> A web development company can create a website with optimized SEO
                                        techniques, which will help you rank higher in search engine results. This will make it easier
                                        for customers to find your business
                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        <span>
                                            {" "}
                                            <b>•  Improved Navigation</b>{" "}
                                        </span>
                                        <br /> A website with improved navigation will make it easier for
                                        customers to find the information they’re looking for on your site. This will encourage them to
                                        spend more time on the site and return more often.
                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        <span>
                                            {" "}
                                            <b>•  Social Media Integration</b>{" "}
                                        </span>
                                        <br /> A website can be integrated with various social media
                                        platforms. This will make it easier for customers to follow your business and stay up to date
                                        on any news or promotions you offer.
                                    </p>

                                    <p id="sg3" style={{ lineHeight: "30px" }}>A custom website development can help your business stand out and make it easier for
                                        customers to find and purchase your products and services. It can also help improve your
                                        SEO, give your brand more visibility, and create a more enjoyable website experience for
                                        your customers. Contact a web development agency today to learn how they can help your
                                        business grow.</p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>A new website design is essential for any business looking to grow. With the help
                                        of a website development, you can create a custom website development with
                                        features that will increase traffic and engagement. A website design that is
                                        modernized, attractive and easy-to-navigate will help to bring new customers to
                                        your business and keep them coming back.</p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        Your website should be mobile-friendly, content-driven, and optimized for SEO to
                                        maximize visibility. Additionally, you should include intuitive navigation,
                                        interactive elements, and quality visuals to help engage visitors and keep them
                                        interested in your business.
                                    </p>
                                </div>
                            </div>

                            <div className="container-xxl">
                                <div className="container">
                                    <img src={b2} alt="blog-image" id="blog1img1"></img>
                                </div>
                            </div>
                            <br /> <br />
                            <div className="container-xxl">
                                <div className="container">

                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        By keeping your website up-to-date with the latest technology, you can ensure
                                        that your business is seen by potential customers. A web development company
                                        can help you create a website that meets the needs of your business while
                                        helping you to maximize your reach.
                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        With new website design, you can also save money by eliminating the need to
                                        pay for ads and invest in expensive marketing campaigns. A well-designed
                                        website with optimized content can help your business grow without having to
                                        invest huge amounts of time and money.
                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        By partnering with a quality web development company, you can create a
                                        website that will help your business to reach its fullest potential. With custom
                                        website development, you can create a website that is tailored to your specific
                                        business needs.
                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        A new website design can help your business grow by bringing in new customers
                                        and increasing visibility. With the help of a web development, you can create a
                                        website that meets the needs of your business and helps you to maximize your
                                        reach.
                                    </p>


                                </div>
                            </div>
                            <br />

                        </section>
                    </div>
                    <div className="col-4" >
                        <aside >
                            <br /><br />
                            <h3 id="sg4"><center>Recent Blog</center></h3>
                            <nav id="sg1">
                                <ul id="sg2">
                                    <li><a href="/blog/the-importance-of-digital-transformation-in-modern-business" ><i class="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i>&nbsp;  The Importance of Digital
                                        Transformation in Modern
                                        Business</a></li>
                                    <li className="active">
                                        <a href="/blog/the-Pros-and-Cons-of-outsourcing-IT-services-for-your-business" >
                                            <i className="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i>&nbsp; The Pros and Cons of Outsourcing IT Services for Your Business
                                        </a>
                                    </li>
                                    <li><a href="/blog/how-your-new-website-design-will-help-your-business-grow" className="active1" >

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
                                    <li>

                                                <div id="kj4">


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

                                                    {" "}
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
                        </aside>
                    </div>

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

                                                    <p className="card-text">  The Importance of Digital
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

export default Blog3
