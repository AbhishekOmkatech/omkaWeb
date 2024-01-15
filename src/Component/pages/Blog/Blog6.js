import React, { useState } from "react";
import Flogo from "../../../images/01 logo.png";
import "../../css/style.css";
import Helmet from "react-helmet";
import Footer from "../Footer";
import GetInTounch from "../GetInTounch";
import $ from 'jquery';
import b1 from "../../../images/blognumber 7/Adidas logo.png";
import b2 from "../../../images/blognumber 7/APPLE logo.png";
import b3 from "../../../images/blognumber 7/Burger King logo.png";
import b4 from "../../../images/blognumber 7/CNN logo.png";
import b5 from "../../../images/blognumber 7/cocacola logo.png";
import b6 from "../../../images/blognumber 7/disney logo.png";
import b7 from "../../../images/blognumber 7/Doritos logo.png";
import b8 from "../../../images/blognumber 7/google logo.png";
import b9 from "../../../images/blognumber 7/Harley Devidson logo.png";
import b10 from "../../../images/blognumber 7/IBM logo.png";
import b11 from "../../../images/blognumber 7/KFC logo.png";
import b12 from "../../../images/blognumber 7/Lacoste logo.png";
import b13 from "../../../images/blognumber 7/Michelin Man logo.png";
import b14 from "../../../images/blognumber 7/NASA logo.png";
import b15 from "../../../images/blognumber 7/Nike logo.png";
import b16 from "../../../images/blognumber 7/Pepsi logo.png";
import b17 from "../../../images/blognumber 7/Shell logo.png";
import b18 from "../../../images/blognumber 7/Starbucks coffee logo.png";
import b19 from "../../../images/blognumber 7/Tony the tiger logo.png";
import b20 from "../../../images/blognumber 7/Twitter logo.png";

import axios from "axios";
// blogimg
import blog1 from '../../../images/blog/TRANSFORMATION.png'
import blog2 from '../../../images/blog/02 Outsourcing-01.jpg'
import blog3 from '../../../images/blog/03 website design-01.jpg'
import blog4 from '../../../images/blog/04 ecommerce-01.jpg'
import blog5 from '../../../images/blog/b11.png'


import { useNavigate } from "react-router-dom";
const { REACT_APP_API_ENDPOINT } = process.env;

const Blog6 = () => {
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
                console.log(formData)

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
                class=""
                data-wow-delay="0.1s"
                style={{ height: "60px", backgroundColor: "white" }}
            >
                <div class="container" >
                <div class="flag-container">
                            <img src='../india.png' class="flag-icon" alt ="india"></img><span style={{ color: "white" }}>|</span>&nbsp;&nbsp;
                            <img src='../us.png' class="flag-icon" alt ="US"></img><span style={{ color: "white" }}>|</span>&nbsp;&nbsp;
                            <img src='../canda.png' class="flag-icon" alt ="Canda"></img>
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
                class="navbar navbar-expand-md fixed-top navbar-dark py-lg-0 px-lg-5"
                data-wow-delay="0.1s" id="bottomNavbar" style={{ backgroundColor: "#F2F2F2", height: "80px" }}
            >
                <a href="/" class="navbar-brand ms-3 d-lg-none" rel="noopener noreferrer">
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
                    <div class="navbar-nav me-auto p-3 p-lg-0" style={{ marginTop: "15px" }}>
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
                        <a href="/" class="nav-item nav-link" id="homeleft">
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
                                <a href="/about-us" class="dropdown-item" rel="noopener noreferrer">
                                    Our Company
                                </a>
                                <a href="/Careers" class="dropdown-item" rel="noopener noreferrer">
                                    Careers
                                </a>
                                {/* <a
                                    href="/Main"
                                    class="dropdown-item"
                                    rel="noopener noreferrer"
                                >
                                    CaseStudy
                                </a> */}
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
                                <a href="/services/website-development" class="dropdown-item" rel="noopener noreferrer">
                                    Website Development
                                </a>
                                <a
                                    href="/services/mobile-app-development"
                                    class="dropdown-item" rel="noopener noreferrer"
                                >
                                    Mobile App Development
                                </a>
                                <a href="/services/designing" class="dropdown-item" rel="noopener noreferrer">
                                    Graphics & UI/UX
                                </a>
                                <a
                                    href="/services/social-media-marketing"
                                    class="dropdown-item" rel="noopener noreferrer"
                                >
                                    Growth & Marketing
                                </a>
                                <a
                                    href="/services/enterprise-software-solution"
                                    class="dropdown-item"
                                >
                                    Enterprise Software Solution
                                </a>
                                <a href="/services/e-commerce-web-apps" class="dropdown-item" rel="noopener noreferrer">
                                    E-Commerce Web & Apps
                                </a>
                                <a
                                    href="/services/cms-design-development"
                                    class="dropdown-item" rel="noopener noreferrer"
                                >
                                    CMS Design & Development
                                </a>
                                {/* <a href="/Services/ReadyMadeSolution" class="dropdown-item">
                  Ready Made Solution
                </a> */}
                            </div>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <a href="/hire-resources" class="nav-item nav-link" rel="noopener noreferrer">
                            Hire Resources
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="/blog" class="nav-item nav-link active" rel="noopener noreferrer">
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
                                class="btn btn-primary rounded-pill"
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
            <p id="kj1"><br />The Art of Branding : Understanding the 7 Types of Logos</p><br />
            <p id="kj2">Date : August 30, 2023 </p>


            <br />

            <div className="container-xxl" style={{ marginTop: "90px" }}>
                <div className="row">
                    <div className="col-8">
                        <section class="main" >
                            <br />
                            <h2 id="sg2">The Art of Branding</h2>


                            <div class="container-xxl">
                                <div
                                    class="container"

                                >

                                    <p id="sg3" >
                                        In the world of marketing and design, logos are the unsung heroes of brand identity. They are the visual representations that instantly connect consumers to a company, making them a crucial element in creating a lasting impression. Logos come in various forms, each designed to evoke specific emotions and convey unique messages. In this blog post, we'll delve into the fascinating realm of logos and explore the seven main types that businesses use to build their brand identities.
                                        <br /><br />
                                        There are several types of logos, and while the classification may vary slightly depending on the source, one common way to categorize logos is into seven main types:
                                        <br /><br />
                                        1. Wordmark or Logotype<br />
                                        2. Monogram or Lettermark <br />
                                        3. Pictorial Mark Logo <br />
                                        4. Abstract Mark Logo<br />
                                        5. Mascot Logo<br />
                                        6. Combination Mark Logo<br />
                                        7. Emblem Logo

                                    </p>
                                </div>
                            </div>

                            {/* ------------------------------------------------------------------- */}
                            <br /> <br />
                            <div class="container-xxl">
                                <div class="container">

                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        <span>
                                            {" "}
                                            <b>• Wordmark or Logotype: </b>{" "}
                                        </span>
                                        <br /> The wordmark or logotype is a type of logo that relies solely on text to convey the brand's identity. It features the company's name or a specific word, often rendered in a distinct font or typographic style.The goal of a wordmark is to make the company's name easily recognizable and memorable. Wordmark logos are straightforward and simple, making them a solid choice when the company name itself carries significant brand recognition. They are clean and uncluttered, allowing the focus to remain on the text.
                                        <br />Examples: Coca-Cola, Google, Disney
                                        <br />
                                        <div class="container-xxl">
                                            <div class="row">
                                                <div class="col">
                                                    <img src={b5} className="blog7i"></img>
                                                </div>
                                                <div class="col">
                                                    <img src={b8} className="blog7i"></img>
                                                </div>
                                                <div class="col">
                                                    <img src={b6} className="blog7i"></img>
                                                </div>
                                            </div>
                                        </div>
                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        <span>
                                            <b> • Monogram or Lettermark  </b>{" "}
                                        </span>
                                        <br /> Monogram logos consist of a company's initials or an acronym, creatively designed to represent the brand. These logos are concise and perfect for companies with long names or complex titles. Monograms simplify the brand's identity into a compact visual element, often incorporating unique typography and design elements. Monogram logos are efficient in situations where brevity is essential. They create a strong visual identity using minimal characters, making them easy to recognize and recall.<br />
                                        Examples: IBM, CNN, NASA
                                        <br />
                                        <div class="container-xxl">
                                            <div class="row">
                                                <div class="col">
                                                    <img src={b10} className="blog7i"></img>
                                                </div>
                                                <div class="col">
                                                    <img src={b4} className="blog7i"></img>
                                                </div>
                                                <div class="col">
                                                    <img src={b14} className="blog7i"></img>
                                                </div>
                                            </div>
                                        </div>
                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        <span>
                                            {" "}
                                            <b>• Pictorial Mark Logo </b>{" "}
                                        </span>
                                        <br />Pictorial marks, also known as logo symbols, rely on a graphic or icon to represent the brand without the need for textual elements. These symbols are designed to be instantly recognizable and associated with the company they represent. Pictorial marks can be abstract or literal representations of the brand's essence. Pictorial marks are versatile and powerful. They transcend language barriers and can become iconic representations of the brand itself. They are often used by companies with strong visual associations or products that require instant recognition.<br />
                                        Examples: Apple, Twitter, Shell<br />
                                        <div class="container-xxl">
                                            <div class="row">
                                                <div class="col">
                                                    <img src={b2} className="blog7i"></img>
                                                </div>
                                                <div class="col">
                                                    <img src={b20} className="blog7i"></img>
                                                </div>
                                                <div class="col">
                                                    <img src={b17} className="blog7i"></img>
                                                </div>
                                            </div>
                                        </div>

                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        <span>
                                            {" "}
                                            <b>• Abstract Mark Logo</b>{" "}
                                        </span>
                                        <br /> Abstract mark logos are non-representational and use unique abstract shapes, patterns, or forms to convey the brand's identity. These logos are highly stylized and may not have any obvious connection to the company's name or industry. Instead, they aim to evoke emotions, feelings, or a sense of uniqueness. Abstract mark logos are a playground for creativity. They challenge designers to create visual identities that are memorable and distinct without relying on familiar symbols or images.<br />
                                        Examples: Nike Swoosh, Pepsi Globe, Adidas<br />
                                        <div class="container-xxl">
                                            <div class="row">
                                                <div class="col">
                                                    <img src={b15} className="blog7i"></img>
                                                </div>
                                                <div class="col">
                                                    <img src={b16} className="blog7i"></img>
                                                </div>
                                                <div class="col">
                                                    <img src={b1} className="blog7i"></img>
                                                </div>
                                            </div>
                                        </div>
                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        <span>
                                            {" "}
                                            <b>• Mascot Logo
                                            </b>{" "}
                                        </span>
                                        <br /> Mascot logos feature a character or figure, often anthropomorphic or animal-like that becomes the face of the brand. These characters are designed to be friendly, relatable, and memorable, allowing consumers to develop a personal connection with the brand. Mascot logos are excellent for brands targeting a family or youth-oriented audience. They bring a human touch to the brand and can be used to convey specific qualities or characteristics associated with the mascot.<br />
                                        Examples: Michelin Man, KFC Colonel, Tony the Tiger <br />
                                        <div class="container-xxl">
                                            <div class="row">
                                                <div class="col">
                                                    <img src={b13} className="blog7i"></img>
                                                </div>
                                                <div class="col">
                                                    <img src={b11} className="blog7i"></img>
                                                </div>
                                                <div class="col">
                                                    <img src={b19} className="blog7i"></img>
                                                </div>
                                            </div>
                                        </div>

                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        <span>
                                            {" "}
                                            <b>• Combination Mark Logo</b>{" "}
                                        </span>
                                        <br />Combination mark logos merge text and a symbol or icon to create a cohesive and integrated design. This type of logo combines the benefits of both word marks and logo symbols, providing visual and textual elements that reinforce the brand's identity. Combination mark logos offer versatility and recognition. The textual element can clarify the brand name, while the symbol or icon adds a unique visual flair, making the logo memorable and impactful.<br />
                                        Examples: Burger King, Doritos, Lacoste<br />
                                        <div class="container-xxl">
                                            <div class="row">
                                                <div class="col">
                                                    <img src={b3} className="blog7i"></img>
                                                </div>
                                                <div class="col">
                                                    <img src={b7} className="blog7i"></img>
                                                </div>
                                                <div class="col">
                                                    <img src={b12} className="blog7i"></img>
                                                </div>
                                            </div>
                                        </div>

                                    </p>
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        <span>
                                            {" "}
                                            <b>• Emblem Logo</b>{" "}
                                        </span>
                                        <br /> Emblem logos encase the company's name or initials within a symbol or icon, often creating a unified and classic appearance. These logos have a timeless quality and can evoke a sense of tradition and heritage. Emblem logos are frequently used by companies with a long history or a strong connection to a particular heritage. They convey a sense of trust and authenticity and are often associated with quality and craftsmanship.<br />
                                        Examples: Harley-Davidson, Starbucks, BMW<br /> <div class="container-xxl">
                                            <div class="row">
                                                <div class="col">
                                                    <img src={b9} className="blog7i"></img>
                                                </div>
                                                <div class="col">
                                                    <img src={b18} className="blog7i"></img>
                                                </div>
                                                <div class="col">
                                                    {/* <img src={b3} className="blog7i"></img> */}
                                                </div>
                                            </div>
                                        </div>
                                    </p>
                                    <br />
                                    <p id="sg3" style={{ lineHeight: "30px" }}>
                                        <span>
                                            {" "}
                                            <center>  <b>Conclusion
                                            </b>{" "}</center>
                                        </span>
                                        <br />Logos are the visual ambassadors of a brand, encapsulating its essence and values in a single image or word. Understanding the seven types of logos—word mark, letter mark, pictorial mark, abstract mark, mascot, combination mark, and emblem—provides valuable insights into the strategies companies use to connect with their audience and create lasting impressions. When designing or evaluating a logo, it's crucial to consider the brand's identity, target audience, and messaging goals. By choosing the right type of logo, businesses can build a strong visual identity that resonates with their customers and sets them apart in the competitive marketplace. Whether it's the simplicity of a word mark or the creativity of an abstract mark, logos play a vital role in shaping the way we perceive and remember brands.
                                    </p>
                                </div>
                            </div>


                        </section>
                    </div>
                    <div className="col-4" >
                        <aside >
                            <br />  <br />
                            <h3 id="sg4"><center>Recent Blog</center></h3>
                            <nav id="sg1">
                                <ul id="sg2">
                                    <li><a href="/blog/the-importance-of-digital-transformation-in-modern-business" ><i class="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i>&nbsp;  The Importance of Digital
                                        Transformation in Modern
                                        Business</a></li>
                                    <li class="active">
                                        <a href="/blog/the-Pros-and-Cons-of-outsourcing-IT-services-for-your-business" >
                                            <i class="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i>&nbsp; The Pros and Cons of Outsourcing IT Services for Your Business
                                        </a>
                                    </li>
                                    <li><a href="/blog/how-your-new-website-design-will-help-your-business-grow" >

                                        <i class="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i>&nbsp; How Your New Website Design Will Help Your Business Grow?</a>
                                    </li>
                                    <li><a href="/blog/how-ecommerce-website-development-is-necessary-for-a-business-to-succeed" >

                                        <i class="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i>&nbsp; How Ecommerce Website Development Is Necessary for a Business
                                        to Succeed?</a>
                                    </li>
                                    <li> <a href="/blog/top-reasons-why-strategies-fail" >

                                        <i class="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i>&nbsp;Top Reasons Why Strategies Fail ?</a></li>

                                    <li> <a href="/blog/the-art-of-branding:-understanding-the-7-types-of-Logos" className="active1" >

                                        <i class="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i>&nbsp;The Art of Branding : Understanding the 7 Types of Logos</a></li>


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
                                                    class="btn btn-primary kj  py-2 px-3"
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
                                            <a href="">  <img class="img img-responsive" src="https://www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/05/social_share_img1.webp?var=380929123" alt="Facebook" /></a>&nbsp;
                                            <a href=""> <img class="img img-responsive" src="https://www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/05/social_share_img2.webp?var=1766419074" alt="Twitter"></img></a>&nbsp;
                                            <a href=""> <img class="img img-responsive" src="https://www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/05/social_share_img3.webp?var=28660498" alt="Linked In"></img></a>
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
            <br />
            <div class="container-xl" id="explore">
                <div class="row">
                    <div class="col-md-12">
                        <h2>Explore <b>More</b></h2>
                        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0"  >

                            <div class="carousel-inner">
                                <div class="item carousel-item active">
                                    <div class="row">

                                        <div className="col-4">
                                            <div class="card" >
                                                <img class="card-img-top kj7" src={blog1} alt="Card image cap" style={{ maxWidth: "100%", height: "200px" }} />
                                                <div class="card-body">

                                                    <p class="card-text">  The Importance of Digital
                                                        Transformation in Modern
                                                        Business</p>
                                                    <p><i class="fa fa-calendar"></i> 30th August 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div class="card" >
                                                <img class="card-img-top kj7" src={blog2} alt="Card image cap" style={{ maxWidth: "100%", height: "200px" }} />
                                                <div class="card-body">

                                                    <p class="card-text">The Pros and Cons of Outsourcing IT Services for Your Business.</p>
                                                    <p><i class="fa fa-calendar"></i> 30th August 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div class="card" >
                                                <img class="card-img-top kj7" src={blog3} alt="Card image cap" style={{ maxWidth: "100%", height: "200px" }} />
                                                <div class="card-body">

                                                    <p class="card-text">How Your New Website Design Will Help Your Business Grow?</p><br />
                                                    <p><i class="fa fa-calendar"></i> 30th August 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item carousel-item">
                                    <div class="row">

                                        <div className="col-4">
                                            <div class="card" >
                                                <img class="card-img-top kj7" src={blog3} alt="Card image cap" style={{ maxWidth: "100%", height: "200px" }} />
                                                <div class="card-body">

                                                    <p class="card-text">How Your New Website Design Will Help Your Business Grow?</p><br />
                                                    <p><i class="fa fa-calendar"></i> 30th August 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div class="card" >
                                                <img class="card-img-top kj7" src={blog4} alt="Card image cap" style={{ maxWidth: "100%", height: "200px" }} />
                                                <div class="card-body">

                                                    <p class="card-text">How Ecommerce Website Development Is Necessary for a Business
                                                        to Succeed?</p>
                                                    <p><i class="fa fa-calendar"></i> 30th August 2023</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div class="card" >
                                                <img class="kj7" src={blog5} alt="Card image cap" style={{ maxWidth: "100%", height: "200px" }} />
                                                <div class="card-body">

                                                    <p class="card-text"> Top Reasons Why Strategies Fail</p><br /><br />
                                                    <p><i class="fa fa-calendar"></i> 30th August 2023</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <i class="fa fa-angle-left" style={{ color: "darkgray" }}></i>
                            </a>
                            <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                                <i class="fa fa-angle-right" style={{ color: "darkgray", marginLeft: "50px" }}></i>
                            </a>
                        </div>
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active" style={{ marginTop: "140px" }}></li>
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

export default Blog6
