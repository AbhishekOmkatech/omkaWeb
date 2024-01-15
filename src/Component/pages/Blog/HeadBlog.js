import React from "react";
import b1 from '../../../images/b1.jpg'
import b2 from '../../../images/b2.webp'
import b3 from '../../../images/b3.webp'
import b4 from '../../../images/blog/b10.jpg'
import b5 from '../../../images/b6.webp'

const HeadBlog = () => {
  return (
    <div>
      <div id="blogdiv">
        <div class="container-xl">
          <div class="row">
            <div class="col-3"><h2 class="display-6 mb-4" id="blogheading">
              RECENT
              <br />
              <span style={{ color: "#04165D" }}>BLOGS !</span>
            </h2>
            </div>
            <div class="col-9">
              <div class="wrapper">

                <div class='newsCard news-Slide-up'>
                  <img src={b2} id="blogsimg" alt="blog" />
                  <div class='newsCaption'>

                    <p class='newsCaption-content'>
                    <a class='' href='/blog/the-importance-of-digital-transformation-in-modern-business'> The Importance of Digital
                      Transformation in Modern
                      Business</a>
                    </p>
                    <p><a class='newsCaption-link' href='/blog/the-importance-of-digital-transformation-in-modern-business'>READ MORE  <i class="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i></a> </p>
                  </div>
                </div>
                <div class='newsCard news-Slide-up'>
                  <img src={b1} id="blogsimg" alt="blog" />
                  <div class='newsCaption'>

                    <p class='newsCaption-content'>
                    <a class='' href='/blog/the-Pros-and-Cons-of-outsourcing-IT-services-for-your-business'> The Pros and Cons of Outsourcing IT Services for Your Business</a>
                    </p>
                    <p><a class='newsCaption-link' href='/blog/the-Pros-and-Cons-of-outsourcing-IT-services-for-your-business'>READ MORE  <i class="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i></a> </p>
                  </div>
                </div>
                <div class='newsCard news-Slide-up'>
                  <img src={b5} id="blogsimg" alt="blog" />
                  <div class='newsCaption'>

                    <p class='newsCaption-content'>
                    <a class='' href='/blog/how-your-new-website-design-will-help-your-business-grow'> How Your New Website Design Will Help Your Business Grow?</a>
                    </p>
                    <p><a class='newsCaption-link' href='/blog/how-your-new-website-design-will-help-your-business-grow'>READ MORE  <i class="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i></a> </p>
                  </div>
                </div>
                <div class='newsCard news-Slide-up'>
                  <img src={b4} id="blogsimg" alt="blog" />
                  <div class='newsCaption'>

                    <p class='newsCaption-content'>
                    <a class='' href='/blog/how-ecommerce-website-development-is-necessary-for-a-business-to-succeed?'> How Ecommerce Website Development Is Necessary for a Business
                      to Succeed?</a>
                    </p>
                    <p><a class='newsCaption-link' href='/blog/how-ecommerce-website-development-is-necessary-for-a-business-to-succeed?'>READ MORE  <i class="fa fa-hand-o-right" style={{ fontSize: "23px" }}></i></a> </p>
                  </div>
                </div>

              </div>


            </div>


          </div>
        </div>
      </div>


    </div>
  );
};

export default HeadBlog;
