import React from "react";
import invert from "../../images/invert.png";
import img1 from "../../images/unnamed-2.png";
import img2 from "../../images/unnamed-3.png";
import img3 from "../../images/unnamed-4.png";
import img4 from "../../images/5.png";
import img5 from "../../images/6.png";
import img6 from "../../images/7.png";
const Testimonials = () => {
  return (
    <div>
      <div class="containerT">
        <div class="boxT overlayT">
          <div class="row">
            <div class="col-3">
              <img src={invert} id="invert" alt="text"></img>

              <h5 id="h3t">TESTIMONIALS</h5>
              <p id="pt">
                Don’t take our word for it, here’s what others have to say
                <br />
                <br />
                <a
                  href="/Contact-Us"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Connect now &nbsp;&nbsp;
                  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </a>
                <br />
                <br />
              </p>
            </div>
            <div class="col-9">
              <div class="container-xxl">
                <div class="row" style={{ width: "100%" }}>
                  <div class="col-md-12">
                    <div
                      id="myCarousel1"
                      class="carousel slide"
                      data-ride="carousel"
                      data-interval="0"
                    >
                      <ol class="carousel-indicators">
                        <li
                          data-target="#myCarousel1"
                          data-slide-to="0"
                          class="active"
                        ></li>
                        <li data-target="#myCarousel1" data-slide-to="1"></li>
                        <li data-target="#myCarousel1" data-slide-to="2"></li>
                      </ol>

                      <div class="carousel-inner">
                        <div class="item carousel-item active">
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="thumb-wrapper">
                                <div class="img-box">
                                  <img src={img3} alt="text" />
                                  <br />
                                  <p id="cardp">
                                    {" "}
                                    Omka Tech built out a website for me and I
                                    am SUPER happy with the results! Their
                                    follow up on changes and little things like
                                    making sure when I receive a notification
                                    from my host are spot on! I’ve referred them
                                    to a few of my colleagues as their service
                                    is outstanding. Thanks, Omka Tech Team!
                                  </p>
                                  <h5 id="h5t">
                                    Cassandra Murray of CLM CAREERS,
                                    <br /> Colorado
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="thumb-wrapper">
                                <div class="img-box">
                                  <img src={img1} alt="text" />
                                  <p id="cardp">
                                    Luckily, OMKA TECH rescued me/ my
                                    website.... and fixed many of the things
                                    that had been done incorrectly on that
                                    website. They did it with grace, superior
                                    service, integrity, and friendliness - along
                                    with much greater knowledge than my prior
                                    two vendors. They were so good at
                                    “translating” high-tech language and options
                                    for someone (like me) who does not spend her
                                    whole life developing websites. OMKA TECH is
                                    good for their word.
                                  </p>
                                  <h5 id="h5t">
                                    Kirstin Lynde of Catalyze Associates
                                    <br /> Inc.and Red Serenity EMF Consulting,
                                    <br /> Greater Boston
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="item carousel-item">
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="thumb-wrapper">
                                <div class="img-box">
                                  <img
                                    src={img4}
                                    alt="text"
                                    style={{ borderRadius: "40px" }}
                                  />
                                  <br />
                                  <p id="cardp">
                                    I worked with Omka Tech on a web app project
                                    for the f&b sector. What I can say is that
                                    the team at Omka Tech are a great group of
                                    people who work around the clock to produce
                                    results! They were flexible and willing to
                                    make sure that we were satisfied with each
                                    milestone. If you are launching a startup
                                    project and need a dedicated team for your
                                    next tech project, I highly recommend!
                                  </p>
                                  <h5 id="h5t">
                                    The PR Agency (LaWanda White)
                                    <br /> of Chef X Concepts,
                                    <br /> North Carolina
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="thumb-wrapper">
                                <div class="img-box">
                                  <img
                                    src={img6}
                                    alt="text"
                                    style={{ borderRadius: "150px" }}
                                  />
                                  <br />
                                  <p id="cardp">
                                    Everyone at Omka Tech were fun to work with.
                                    They are creative and worked easily with my
                                    ideas. Aastha is very talented and I commend
                                    her for the job she did for me. Deepak kept
                                    on top of things, and overall I would say
                                    did an outstanding job. I look forward to
                                    our continued relationship
                                  </p>
                                  <h5 id="h5t">
                                    Thomas Jackson of Covid Victory Foundation,
                                    <br /> Florida
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="item carousel-item">
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="thumb-wrapper">
                                <div class="img-box">
                                  <img
                                    src={img5}
                                    alt="text"
                                    style={{ borderRadius: "40px" }}
                                  />
                                  <br />

                                  <p id="cardp">
                                    I got my website Leisure Life Solutions
                                    developed by them and I must say they did a
                                    wonderful job.Thank you for all the good
                                    service, communication, and assistance. I
                                    will surely recommend them to anyone looking
                                    for web design!
                                  </p>
                                  <h5 id="h5t">
                                    Ashim Ramkisson,
                                    <br /> South Africa
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="thumb-wrapper">
                                <div class="img-box">
                                  <img src={img2} alt="text" />
                                  <br />

                                  <p id="cardp">
                                    Listen People, Omka Tech is AMAZING!! Their
                                    attention to detail is is impressive. I was
                                    able to communicate my initial idea with no
                                    language barrier and they got it from the
                                    first conversation. Their follow-thru was
                                    efficient and they executed my vision to
                                    perfection! I would recommend them to
                                    everyone who needs an app builder with full
                                    skills and the ability to present a finished
                                    product
                                  </p>
                                  <h5 id="h5t">
                                    Dewry Bradford of ASQUI Ventures,
                                    <br /> NYC
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a
                        class="carousel-control-prev"
                        href="#myCarousel1"
                        data-slide="prev"
                        rel="noopener noreferrer"
                      >
                        <i class="fa fa-angle-left"></i>
                      </a>
                      <a
                        class="carousel-control-next"
                        href="#myCarousel1"
                        rel="noopener noreferrer"
                        data-slide="next"
                      >
                        <i class="fa fa-angle-right"></i>
                      </a>
                    </div>
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

export default Testimonials;
