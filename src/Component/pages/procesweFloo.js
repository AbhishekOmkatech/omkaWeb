import React from "react";

const procesweFloo = () => {
  return (
    <div>
      {/* flowchart */}
      {/* services */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h6 class="section-title bg-white text-center text-primary px-3">
              Process We Follow
            </h6>
            <h1 class="display-6 mb-4">
              We provide all types of{" "}
              <span style={{ color: "#04165D" }}>
                IT Solutions & Consulting
              </span>
            </h1>
          </div>
          <div class="row g-4"></div>
        </div>
      </div>
      <div class="container">
        {/* 1 */}
        <div class="row align-items-center connecting-lines d-flex">
          <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
            <div class="circle">
              <i class="fa fa-chec">
                {" "}
                <img src={req} style={{ marginLeft: "-3px" }} alt="text"></img>
              </i>
            </div>
          </div>
          <div class="col-6">
            <h4>Requirement Analysis</h4>
            <p>
              We gather the requirement of the product and also provide our
              feedback on the same
            </p>
          </div>
        </div>

        <div class="row timeline">
          <div class="col-2">
            <div class="corner top-right"></div>
          </div>
          <div class="col-8">
            <hr />
          </div>
          <div class="col-2">
            <div class="corner left-bottom"></div>
          </div>
        </div>
        {/* 2 */}
        <div class="row align-items-center justify-content-end connecting-lines d-flex">
          <div class="col-6 text-right">
            <h4> UI/UX Designing </h4>
            <p style={{ marginLeft: "100px" }}>
              We use the latest technologies and tools for the designing like
              Figma
            </p>
          </div>
          <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div class="circle">
              <i class="fa fa-chec">
                {" "}
                <img src={uiux} style={{ marginLeft: "-3px" }} alt="text"></img>
              </i>
            </div>
          </div>
        </div>

        <div class="row timeline">
          <div class="col-2">
            <div class="corner right-bottom"></div>
          </div>
          <div class="col-8">
            <hr />
          </div>
          <div class="col-2">
            <div class="corner top-left"></div>
          </div>
        </div>
        {/* 3 */}
        <div class="row align-items-center connecting-lines d-flex">
          <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
            <div class="circle">
              <i class="fa fa-chec">
                {" "}
                <img
                  src={proto}
                  style={{ marginLeft: "-3px" }}
                  alt="text"
                ></img>
              </i>
            </div>
          </div>
          <div class="col-6">
            <h4>Prototyping</h4>
            <p>
              After designing, prototyping of the application is the major step
              where all the final screens are prepared to be sent to the
              development team.
            </p>
          </div>
        </div>
        <div class="row timeline">
          <div class="col-2">
            <div class="corner top-right"></div>
          </div>
          <div class="col-8">
            <hr />
          </div>
          <div class="col-2">
            <div class="corner left-bottom"></div>
          </div>
        </div>
        {/* 4 */}
        <div class="row align-items-center justify-content-end connecting-lines d-flex">
          <div class="col-6 text-right">
            <h4>App Development</h4>
            <p>
              The development team begins the screen-by-screen functionality
              creation on the preferred platforms
            </p>
          </div>
          <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div class="circle">
              <i class="fa fa-chec">
                {" "}
                <img src={app} style={{ marginLeft: "-3px" }} alt="text"></img>
              </i>
            </div>
          </div>
        </div>
        <div class="row timeline">
          <div class="col-2">
            <div class="corner right-bottom"></div>
          </div>
          <div class="col-8">
            <hr />
          </div>
          <div class="col-2">
            <div class="corner top-left"></div>
          </div>
        </div>
        {/* 5 */}
        <div class="row align-items-center connecting-lines d-flex">
          <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
            <div class="circle">
              <i class="fa fa-chec">
                {" "}
                <img src={test} alt="text"></img>
              </i>
            </div>
          </div>
          <div class="col-6">
            <h4> Testing</h4>
            <p>
              We test each and every component to make sure that our solution
              fits the requirement and we provide a bug-free app.{" "}
            </p>
          </div>
        </div>
        <div class="row timeline">
          <div class="col-2">
            <div class="corner top-right"></div>
          </div>
          <div class="col-8">
            <hr />
          </div>
          <div class="col-2">
            <div class="corner left-bottom"></div>
          </div>
        </div>
        {/* 6 */}
        <div class="row align-items-center justify-content-end connecting-lines d-flex">
          <div class="col-6 text-right">
            <h4> Deployment & Maintenance</h4>
            <p>
              We make the final upload of the App on Android and iOS stores and
              provide knowledge transfer to the client for the control and
              administer the solution.
            </p>
          </div>
          <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
            <div class="circle">
              <i class="fa fa-chec">
                {" "}
                <img src={dep} style={{ marginLeft: "-3px" }} alt="text"></img>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default procesweFloo;
