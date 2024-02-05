import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css";


import FlowChart from "./Component/FlowChart";
import About from "./Component/pages/About";
import Contact from "./Component/pages/Contact";
import HireDEv from "./Component/pages/portfolio/HireDEv";
// -----------------------------------------------------------------------------
import TermCondition from "./Component/pages/TermCondition";
import PrivacyPolicy from "./Component/pages/PrivacyPolicy";
// -----------------------------------------------------------------------------
import CourseCard from "./Component/pages/services/CourseCard";
import Designing from "./Component/pages/services/Designing";
import MobileApp from "./Component/pages/services/MobileApp";
import Ready from "./Component/pages/services/Ready";
import SocialMedia from "./Component/pages/services/SocialMedia";
import SoftwareDev from "./Component/pages/services/SoftwareDev";
import WebDev from "./Component/pages/services/WebDev";
import Slider from "./Component/pages/Slider";
// -----------------------------------------------------------------------------
import Test from "./Component/pages/Test";
import Modal1 from "./Modal";
import Ecommerce from "./Component/pages/services/Ecommerce";
import Testimonials from "./Component/pages/Testimonials";
import Homeform from "./Component/pages/Homeform";
import Footer from "./Component/pages/Footer";
import ContactForm from "./Component/pages/ContactForm";
import GetInTounch from "./Component/pages/GetInTounch";
import EmailForm from "./Component/pages/EmailForm";
import TestiMonials from "./components/TestiMonials/TestiMonials";
import Header from "./Component/Header1";
import CardB from "./Component/pages/Blog/CardB";
import Blog from "./Component/pages/Blog";
import Blog1 from "./Component/pages/Blog/Blog1";
import Blog2 from "./Component/pages/Blog/Blog2";

import Tools from "./Component/Tools";
import CMS from "./Component/pages/services/CMS";
import HeadBlog from "./Component/pages/Blog/HeadBlog";
import Job from "./Component/pages/Career/Job";
import Thankyou from "./Component/pages/Thankyou";
import Page404 from "./Component/pages/404Page";
import HeadNav from "./Component/HeadNav";
import Youtube from "./Component/Youtube";
import Blog3 from "./Component/pages/Blog/Blog3";
import Cards from "./Component/Cards";
import Blog4 from "./Component/pages/Blog/Blog4";
import Blog5 from "./Component/pages/Blog/Blog5";
import Connect from "./Component/pages/Connect";
import Marquee from "./Component/pages/Marquee";
import Main from "./Component/pages/Case-study/Main";
import Case1 from "./Component/pages/Case-study/Case1";
import Blog6 from "./Component/pages/Blog/Blog6";
import DD from "./Component/DD";
// --------------------------------------------------------------------------------
function Path() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/d" element={<DD />}></Route>
          <Route exact path="/" element={<Header />}></Route>
          <Route exact path="*" element={<Page404 />}></Route>
          <Route exact path="/about-us" element={<About />}></Route>
          <Route exact path="/contact-us" element={<Contact />}></Route>
          <Route
            exact
            path="/services/website-development"
            element={<WebDev />}
          ></Route>
          <Route
            exact
            path="/services/graphics-ui-ux"
            element={<Designing />}
          ></Route>
          <Route
            exact
            path="/services/mobile-app-development"
            element={<MobileApp />}
          ></Route>
          <Route
            exact
            path="/services/growth-marketing"
            element={<SocialMedia />}
          ></Route>
          <Route
            exact
            path="/services/enterprise-software-solution"
            element={<SoftwareDev />}
          ></Route>
          <Route
            exact
            path="/services/e-commerce-web-apps"
            element={<Ecommerce />}
          ></Route>
          <Route
            exact
            path="/Services/Ready-Made-Solution"
            element={<Ready />}
          ></Route>
          <Route
            exact
            path="/services/cms-design-development"
            element={<CMS />}
          ></Route>{" "}
          <Route
            exact
            path="/services/e-commerce-web-apps"
            element={<Ready />}
          ></Route>
          <Route
            exact
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          ></Route>
          <Route
            exact
            path="/term-condition"
            element={<TermCondition />}
          ></Route>
          <Route exact path="/hire-resources" element={<HireDEv />}></Route>
         
          <Route exact path="/slider" element={<Slider />}></Route>
          <Route exact path="/process" element={<FlowChart />}></Route>
          <Route exact path="/modal" element={<Modal1 />}></Route>
          <Route exact path="/testimonial" element={<TestiMonials />}></Route>
          <Route exact path="/test" element={<Test />}></Route>
          <Route exact path="/card" element={<CourseCard />}></Route>
          <Route exact path="/testi" element={<Testimonials />}></Route>
          <Route exact path="/homeform" element={<Homeform />}></Route>
          <Route exact path="/footer" element={<Footer />}></Route>
          <Route exact path="/contactForm" element={<ContactForm />}></Route>
          <Route exact path="/icon" element={<GetInTounch />}></Route>
          <Route exact path="/emailForm" element={<EmailForm />}></Route>
          <Route exact path="/cardB" element={<CardB />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/blog/the-importance-of-digital-transformation-in-modern-business" element={<Blog1 />}></Route>
          <Route exact
           path="/blog/the-Pros-and-Cons-of-outsourcing-IT-services-for-your-business" element={<Blog2 />}></Route>
          <Route exact path="/blog/how-your-new-website-design-will-help-your-business-grow" element={<Blog3 />}></Route>
          <Route exact path="/blog/how-ecommerce-website-development-is-necessary-for-a-business-to-succeed" element={<Blog4 />}></Route>
          <Route exact path="/blog/top-reasons-why-strategies-fail" element={<Blog5 />}></Route>
          <Route exact path="/blog/the-art-of-branding:-understanding-the-7-types-of-Logos" element={<Blog6/>}></Route>
          <Route exact path="/tools" element={<Tools />}></Route>
          <Route exact path="/headBlog" element={<HeadBlog />}></Route>
          <Route exact path="/careers" element={<Job />}></Route>
          <Route exact path="/thankyou" element={<Thankyou />}></Route>
          <Route exact path="/HeadNav" element={<HeadNav/>}></Route>
          <Route exact path="/Youtube" element={<Youtube/>}></Route>
          <Route exact path="/Cards" element={<Cards/>}></Route>
          <Route exact path="/Connect" element={<Connect/>}></Route>
        
          <Route exact path="/Marquee" element={<Marquee/>}></Route>
          <Route exact path="/Main" element={<Main/>}></Route>
          <Route exact path="/CaseOne" element={<Case1/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Path;
