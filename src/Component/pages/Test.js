import React from "react";
import i1 from "../../images/1work.png";
import i2 from "../../images/2op.png";
import i3 from "../../images/3sdlc.png";
import i4 from "../../images/4team.png";
const Test = () => {
  return (
    <div>
      <div class="container">
        <div id="accordion">
          <div class="car">
            <div class="car-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class=""
                  id="dropdowntabout"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {" "}
                  <i
                    class="fa"
                    aria-hidden="true"
                    style={{ color: "#04165D", fontSize: "30px" }}
                  ></i>{" "}
                  OMKA TECH works closely with clients to understand their needs
                  and designs customized
                 solutions to meet those needs.
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body">
                <center>
                  <img
                    alt="text"
                    src={i1}
                    style={{
                      height: "160px",
                      width: "160px",
                      border: " 2px solid #FD7702",
                      borderRadius: "50%",
                    }}
                  ></img>
                </center>
                <br />

                <p>
                  {" "}
                  At OMKA TECH, we believe that careful analysis is the key to
                  delivering successful projects. When a client shares their
                  requirement document with us, our team analyzes it deeply and
                  then collaborates with our technical team to develop a plan.
                  We then discuss this plan with the client to ensure that we
                  are all aligned and that our estimated delivery date and
                  budget are realistic. We also understand that our clients’
                  ideas and information are valuable assets. That’s why we take
                  confidentiality and security seriously. We sign a
                  Non-Disclosure Agreement (NDA) with our clients for every
                  iteration of the project, ensuring that their confidential
                  information is protected. This NDA serves as the basis for a
                  legal agreement, giving our clients peace of mind knowing that
                  their ideas are safe with us.
                </p>
                <p>
                  We are committed to delivering high-quality projects on time
                  and within budget. We take responsibility not only for the
                  project’s completion but also for meeting the agreed-upon
                  timeline. We also guarantee the high quality of the end
                  product. Our team works diligently to ensure that our clients’
                  expectations are met, and we stand by our work.
                </p>
                <p>
                  With that, we believe in Agile Development, which allows us to
                  deliver projects in a flexible and efficient manner. We
                  provide weekly updates to our clients, ensuring that they are
                  always up-to-date on our progress and that we are meeting
                  their expectations. This approach also allows for continuous
                  feedback and collaboration, resulting in a high-quality end
                  product that meets our clients’ needs.
                </p>
              </div>
            </div>
          </div>
          <div class="car">
            <div class="car-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class=" collapsed"
                  id="dropdowntabout"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i
                    class="fa"
                    aria-hidden="true"
                    style={{ color: "#04165D", fontSize: "30px" }}
                  ></i>{" "}
                  Our operational security helps to protect your organization’s
                  assets, data, and personnel from physical and cyber threats.
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body">
                <center>
                  <img
                    alt="text"
                    src={i2}
                    style={{
                      height: "160px",
                      width: "160px",
                      border: " 2px solid #FD7702",
                      borderRadius: "50%",
                    }}
                  ></img>
                </center>
                <br />
                <p>
                  Cyber security is a top priority for us at OMKA TECH. We
                  understand that every project contains sensitive information,
                  and we are committed to managing and protecting it
                  appropriately with our expertise. Our team of experts has
                  extensive knowledge of the latest cyber security threats and
                  best practices, and we use this knowledge to ensure that our
                  clients’ information is always secure. We employ a variety of
                  security measures, including firewalls, encryption, and
                  regular security assessments, to protect our clients’ data
                  from unauthorized access and cyber attacks. Our team stays
                  up-to-date with the latest industry standards and regulations
                  to ensure that we are providing the highest level of
                  protection possible.
                </p>
                <p>
                  In addition to cyber security, we also conduct regular
                  functional audits of our clients’ business systems. These
                  audits help us to identify any weaknesses or control gaps in
                  the system and propose appropriate security measures if
                  necessary. We work closely with our clients to ensure that
                  their data is always protected and that their systems are
                  functioning optimally. At OMKA TECH, we are dedicated to
                  providing our clients with the highest level of cyber security
                  and functional audit services. If you’re looking for a trusted
                  partner to help safeguard your business, we’re here to help.
                </p>
              </div>
            </div>
          </div>
          <div class="car">
            <div class="car-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class=" collapsed"
                  id="dropdowntabout"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <i
                    class="fa"
                    aria-hidden="true"
                    style={{ color: "#04165D", fontSize: "30px" }}
                  ></i>{" "}
                  We use SDLC process to plans, designs, build, test, deploy,
                  and maintain high-quality soft - ware solutions.
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="card-body">
                <center>
                  <img
                    alt="text"
                    src={i3}
                    style={{
                      height: "160px",
                      width: "160px",
                      border: " 2px solid #FD7702",
                      borderRadius: "50%",
                    }}
                  ></img>
                </center>
                <br />
                <p>
                  {" "}
                  At OMKA TECH, we are committed to providing our clients with
                  high-quality, customized solutions that meet their unique
                  needs. To ensure that we deliver the best possible results, we
                  follow a proven project process that begins with a thorough
                  assessment of the client’s requirements.
                </p>
                <p>
                  Once we have a complete understanding of the client’s needs,
                  we collaborate with our technical team to provide a detailed
                  scope of work for the project. This ensures that our clients
                  have a clear understanding of the project’s timeline, costs,
                  and deliverables.
                </p>
                <p>
                  We then move on to the project’s implementation phase, which
                  includes designing, developing, testing, and providing ongoing
                  support and maintenance. Throughout each stage of the project,
                  we keep our clients informed of our progress and solicit their
                  feedback to ensure that the final product meets their
                  expectations.
                </p>
                <p>
                  Our team of experts has extensive experience in a variety of
                  industries, and we use this knowledge to deliver innovative
                  solutions that drive our clients’ success. If you’re looking
                  for a partner who can help take your business to the next
                  level, we’re here to help.
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div class="car">
            <div class="car-header" id="headingfour">
              <h5 class="mb-0">
                <button
                  class=" collapsed"
                  id="dropdowntabout"
                  data-toggle="collapse"
                  data-target="#collapsefour"
                  aria-expanded="false"
                  aria-controls="collapsefour"
                >
                  <i
                    class="fa"
                    aria-hidden="true"
                    style={{ color: "#04165D", fontSize: "30px" }}
                    id="icontest"
                  ></i>{" "}
                  We have a skilled team of highly trained professionals with
                  the expertise and experience necessary to deliver exceptional
                  results in their respective fields.
                </button>
              </h5>
            </div>
            <div
              id="collapsefour"
              class="collapse"
              aria-labelledby="headingfour"
              data-parent="#accordion"
            >
              <div class="card-body">
                <center>
                  <img
                    alt="text"
                    src={i4}
                    style={{
                      height: "160px",
                      width: "160px",
                      border: " 2px solid #FD7702",
                      borderRadius: "50%",
                    }}
                  ></img>
                </center>
                <br />
                <p>
                  At OMKA TECH, we are committed to providing the highest
                  quality services to our clients, which is why we only hire
                  professionals with at least 3 years of experience in their
                  specific field. Our team is comprised of talented individuals
                  with diverse backgrounds and skillsets, who are dedicated to
                  delivering exceptional results.
                </p>
                <p>
                  We are proud to have an excellent retention rate of 90%, which
                  we attribute to our focus on employee satisfaction and
                  development. Our team is comprised of 75% professionals with
                  3+ years of experience, ensuring that our clients receive the
                  highest level of expertise and knowledge.
                </p>
                <p>
                  To foster a positive and supportive work environment, we
                  invest in various activities such as learning and development
                  programs, surveys, performance reviews, mood monitoring, team
                  building, and events. These initiatives help us to
                  continuously improve our skills and stay up-to-date with the
                  latest industry trends.
                </p>
                <p>
                  We believe that our team’s success is our success, and we
                  strive to provide a workplace culture that values
                  collaboration, open communication, and growth. If you’re
                  looking for a team of experienced professionals who are
                  dedicated to helping your business succeed, look no further
                  than OMKA TECH.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
