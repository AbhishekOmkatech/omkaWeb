import React from "react";
import img from "../../../images/aboutusb.jpg";
const CardB = () => {
  return (
    <div>
      {/*  */}
      <div class="shell" id="blogcard">
        <div class="container">
          <div class="row">
            <div class="col-md-3" style={{ width: "30%" }}>
              <a href="/blog1" rel="noopener noreferrer">
                <div class="wsk-cp-product">
                  <div class="wsk-cp-img">
                    <img src={img} alt="Product" class="img-responsive" />
                  </div>
                  <div class="wsk-cp-text">
                    <div class="category">
                      <span>Ethnic</span>
                    </div>
                    <div class="title-product">
                      <h3>My face not my heart</h3>
                    </div>
                    <div class="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height size like 600px in html5 player. player good work
                        now check this link
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-3" style={{ width: "30%" }}>
              <a href="/blog1" rel="noopener noreferrer">
                <div class="wsk-cp-product">
                  <div class="wsk-cp-img">
                    <img src={img} alt="Product" class="img-responsive" />
                  </div>
                  <div class="wsk-cp-text">
                    <div class="category">
                      <span>Introvert</span>
                    </div>
                    <div class="title-product">
                      <h3>My face not my heart</h3>
                    </div>
                    <div class="description-prod">
                      <p>
                        Description Product tell me how to change playlist
                        height size like 600px in html5 player. player good work
                        now check this link
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardB;
