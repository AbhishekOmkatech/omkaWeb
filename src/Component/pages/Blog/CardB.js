import React from "react";
import img from "../../../images/aboutusb.jpg";
const CardB = () => {
  return (
    <div>
      {/*  */}
      <div className="shell" id="blogcard">
        <div className="container">
          <div className="row">
            <div className="col-md-3" style={{ width: "30%" }}>
              <a href="/blog1" rel="noopener noreferrer">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img src={img} alt="Product" className="img-responsive" />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="category">
                      <span>Ethnic</span>
                    </div>
                    <div className="title-product">
                      <h3>My face not my heart</h3>
                    </div>
                    <div className="description-prod">
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
            <div className="col-md-3" style={{ width: "30%" }}>
              <a href="/blog1" rel="noopener noreferrer">
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img src={img} alt="Product" className="img-responsive" />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="category">
                      <span>Introvert</span>
                    </div>
                    <div className="title-product">
                      <h3>My face not my heart</h3>
                    </div>
                    <div className="description-prod">
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
