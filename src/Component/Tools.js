import React from "react";
import $ from "jquery";
// -------------design---------------------------------------
import ps from "../images/tools Icon/design/01 Photoshop.PNG";
import figma from "../images/tools Icon/design/02 Figma.PNG";
import sketch from "../images/tools Icon/design/03 Sketch.PNG";
import adobe from "../images/tools Icon/design/04 Adobe XD.PNG";
import illustrater from "../images/tools Icon/design/05 Illustrater.PNG";
import invision from "../images/tools Icon/design/06 Invision.PNG";
import flowmap from "../images/tools Icon/design/07 FlowMapp.PNG";
// -------------------backend-----------------------------------
import php from "../images/tools Icon/02 BACKEND/01 PHP.png";
import python from "../images/tools Icon/02 BACKEND/02 Python.png";
import node from "../images/tools Icon/02 BACKEND/03 Node JS.png";
import laravel from "../images/tools Icon/02 BACKEND/04 Laravel.png";
import Nginx from "../images/tools Icon/02 BACKEND/05 Nginx.png";
import Java from "../images/tools Icon/02 BACKEND/06 Java.png";
import springboot from "../images/tools Icon/02 BACKEND/springboot.png";
import csharp from "../images/tools Icon/02 BACKEND/cSharp.png";
// ------------------------database------------------------
import mongo from "../images/tools Icon/03 DATABASE/01 Mongodb.png";
import mysql from "../images/tools Icon/03 DATABASE/02 MySql.png";
import Firebase from "../images/tools Icon/03 DATABASE/03 Firebase.png";
import SQL from "../images/tools Icon/03 DATABASE/04 SQL.png";
import PostgreSQL from "../images/tools Icon/03 DATABASE/05 Postgre SQL.png";
import AWS from "../images/tools Icon/03 DATABASE/06 AWS.png";
import GoogleCloud from "../images/tools Icon/03 DATABASE/07 Google Cloud.png";
// --------------frontend-----------------------------------------
import react from "../images/tools Icon/04 FRONTEND/02 React Js.png";
import phph from "../images/tools Icon/04 FRONTEND/01 PHP.png";
import Wordpress from "../images/tools Icon/04 FRONTEND/03 Wordpress.png";
import Shopify from "../images/tools Icon/04 FRONTEND/04 shopify.png";
import Magento from "../images/tools Icon/04 FRONTEND/05 magento.png";
import Magento2 from "../images/tools Icon/04 FRONTEND/06 magento 2.png";
import Laravel1 from "../images/tools Icon/04 FRONTEND/07 Laravel.png";
import Codeigniter from "../images/tools Icon/04 FRONTEND/08 Codeignitor.png";
// -------------mobile--------------------
import flutter from "../images/tools Icon/05 MOBILE/01 Flutter.png";
import swfit from "../images/tools Icon/05 MOBILE/02 swift.png";
import Native from "../images/tools Icon/05 MOBILE/03 React native.png";
import Android from "../images/tools Icon/05 MOBILE/04 android native.png";
import Iconic from "../images/tools Icon/05 MOBILE/05 ionic.png";
import "../../src/Component/css/Tool.css";
const Tools = () => {
  $(document).ready(function() {
    // filter
    $("#toolsnav a").on("click", function(event) {
      event.preventDefault();
      // current class
      $("#toolsnav li.current").removeClass("current");
      $(this)
        .parent()
        .addClass("current");

      // set new heading
      $("h1.heading").text($(this).text());

      // filter link text
      var category = $(this)
        .text()
        .toLowerCase()
        .replace(" ", "-");

      // remove hidden class if "all" is selected
      if (category == "all-tools") {
        $("ul#gallery2 li:hidden")
          .fadeIn("slow")
          .removeClass("hidden");
      } else {
        $("ul#gallery2 li").each(function() {
          if (!$(this).hasClass(category)) {
            $(this)
              .hide()
              .addClass("hidden");
          } else {
            $(this)
              .fadeIn("slow")
              .removeClass("hidden");
          }
        });
      }
      return false;
    });
  });
  return (
    <div>
      <div className="container-xxl py-5" id="toolstop">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h2 className="display-6 mb-4 homeclient1">Tools & Technology</h2>
            <h5 id="toolsh6">We are experts in the following technologies.</h5>
          </div>
        </div>
      </div>
      <div className="container3">
        <div id="toolsnav">
          <ul id="toolsul">
            <li className="current">
              <a href="#" rel="noopener noreferrer">All TOOLS</a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">DESIGN</a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">MOBILE</a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">FRONT-END</a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">BACK-END</a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">DATABASE</a>
            </li>
          </ul>
        </div>
        <div id="projects">
          <br />
          <ul id="gallery2">
            {/* -------------------design-------------------- */}
            <li className="design">
              <div id="tool1">
                <img className="" src={ps}  alt ="text" />
                <h6>Photoshop</h6>
              </div>
            </li>
            <li className="design">
              <div id="tool1">
                <img className="" src={figma}  alt ="text" />
                <h6>Figma</h6>
              </div>
            </li>
            <li className="design">
              <div id="tool1">
                <img className="" src={sketch}  alt ="text" />
                <h6>Sketch</h6>
              </div>
            </li>
            <li className="design">
              <div id="tool1">
                <img className="" src={adobe}  alt ="text" />
                <h6>Adobe XD</h6>
              </div>
            </li>
            <li className="design">
              <div id="tool1">
                <img className="" src={illustrater}  alt ="text" />
                <h6>Illustrator</h6>
              </div>
            </li>
            <li className="design">
              <div id="tool1">
                <img className="" src={invision}  alt ="text" />
                <h6>Invision</h6>
              </div>
            </li>
            <li className="design">
              <div id="tool1">
                <img className="" src={flowmap}  alt ="text" />
                <h6>FlowMap</h6>
              </div>
            </li>
            {/* -----------------mobile----------------------- */}
            <li className="mobile">
              <div id="tool1">
                <img className="" src={flutter}  alt ="text" />
                <h6>Flutter</h6>
              </div>
            </li>
            <li className="mobile">
              <div id="tool1">
                <img className="" src={swfit}  alt ="text" />
                <h6>Swift</h6>
              </div>
            </li>
            <li className="mobile">
              <div id="tool1">
                <img className="" src={Native}  alt ="text" />
                <h6>React Native</h6>
              </div>
            </li>
            <li className="mobile">
              <div id="tool1">
                <img className="" src={Android}  alt ="text" />
                <h6>Android</h6>
              </div>
            </li>
            <li className="mobile">
              <div id="tool1">
                <img className="" src={Iconic}  alt ="text" />
                <h6>Iconic</h6>
              </div>
            </li>
            {/* ---------------frontend---------------------- */}
            <li className="front-end">
              <div id="tool1">
                <img className="" src={react}  alt ="text" />
                <h6>React Js</h6>
              </div>
            </li>
            <li className="front-end ">
              <div id="tool1">
                <img className="" src={phph}  alt ="text" />
                <h6>PHP</h6>
              </div>
            </li>
            <li className="front-end ">
              <div id="tool1">
                <img className="" src={Shopify}  alt ="text" />
                <h6>Shopify</h6>
              </div>
            </li>
            <li className="front-end ">
              <div id="tool1">
                <img className="" src={Wordpress}  alt ="text" />
                <h6>Wordpress</h6>
              </div>
            </li>
            <li className="front-end ">
              <div id="tool1">
                <img className="" src={Magento}  alt ="text" />
                <h6>Magento</h6>
              </div>
            </li>
            <li className="front-end ">
              <div id="tool1">
                <img className="" src={Magento2}  alt ="text" />
                <h6>Magento 2</h6>
              </div>
            </li>
            <li className="front-end ">
              <div id="tool1">
                <img className="" src={Laravel1}  alt ="text" />
                <h6>Laravel</h6>
              </div>
            </li>
            <li className="front-end ">
              <div id="tool1">
                <img className="" src={Codeigniter}  alt ="text" />
                <h6>Codeigniter</h6>
              </div>
            </li>
            {/* -------------------backend-------------------- */}
            <li className="back-end">
              <div id="tool1">
                <img className="" src={csharp}  alt ="text" />
                <h6>C#</h6>
              </div>
            </li>
            <li className="back-end">
              <div id="tool1">
                <img className="" src={springboot}  alt ="text" />
                <h6>Springboot</h6>
              </div>
            </li>
            <li className="back-end">
              <div id="tool1">
                <img className="" src={node}  alt ="text" />
                <h6>Node Js</h6>
              </div>
            </li>
            <li className="back-end">
              <div id="tool1">
                <img className="" src={python}  alt ="text" />
                <h6>Python</h6>
              </div>
            </li>
            <li className="back-end">
              <div id="tool1">
                <img className="" src={php}  alt ="text" />
                <h6>PHP</h6>
              </div>
            </li>
            <li className="back-end">
              <div id="tool1">
                <img className="" src={laravel}  alt ="text" />
                <h6> Laravel</h6>
              </div>
            </li>
            <li className="back-end">
              <div id="tool1">
                <img className="" src={Java}  alt ="text" />
                <h6>Java</h6>
              </div>
            </li>
            <li className="back-end">
              <div id="tool1">
                <img className="" src={Nginx}  alt ="text" />
                <h6>Nginx</h6>
              </div>
            </li>
            {/* --------------------database----------------------- */}

            <li className="database">
              <div id="tool1">
                <img className="" src={mongo}  alt ="text" />
                <h6>MongoDb</h6>
              </div>
            </li>
            <li className="database">
              <div id="tool1">
                <img className="" src={mysql}  alt ="text" />
                <h6>MySQL</h6>
              </div>
            </li>
            <li className="database">
              <div id="tool1">
                <img className="" src={Firebase}  alt ="text" />
                <h6>Firebase</h6>
              </div>
            </li>
            <li className="database">
              <div id="tool1">
                <img className="" src={SQL}  alt ="text" />
                <h6>SQL</h6>
              </div>
            </li>
            <li className="database">
              <div id="tool1">
                <img className="" src={PostgreSQL}  alt ="text" />
                <h6>PostgreSQL</h6>
              </div>
            </li>
            <li className="database">
              <div id="tool1">
                <img className="" src={AWS}  alt ="text" />
                <h6>AWS</h6>
              </div>
            </li>
            <li className="database">
              <div id="tool1">
                <img className="" src={GoogleCloud}  alt ="text" />
                <h6>GoogleCloud</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tools;
