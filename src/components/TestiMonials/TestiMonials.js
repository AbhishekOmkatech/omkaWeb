import React from "react";
import TestiMonialsDetails from "../TestiMonialsDetails/TestiMonialsDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./TestiMonials.css";
const TestiMonials = () => {
  const testiMonials = [
    {
      name: "Cassandra Murray of CLM CAREERS, Colorado",
      description:
        "Omka Tech built out a website for me and I am SUPER happy with the results! Their follow up on changes and little things like making sure when I receive a notification from my host are spot on! I’ve referred them to a few of my colleagues as their service is outstanding. Thanks, Omka Tech Team!",
    },
    {
      name:
        "Kirstin Lynde of Catalyze Associates Inc. and Red Serenity EMF Consulting, Greater Boston",
      description:
        "Luckily, OMKA TECH rescued me/ my website.... and fixed many of the things that had been done incorrectly on that website.  They did it with grace, superior service, integrity, and friendliness - along with much greater knowledge than my prior two vendors.  They were so good at “translating” high-tech language and options for someone (like me) who does not spend her whole life developing websites. OMKA TECH is good for their word.",
    },
    {
      name: "The PR Agency (LaWanda White) of Chef X Concepts, North Carolina",
      description:
        "I worked with Omka Tech on a web app project for the f&b sector. What I can say is that the team at Omka Tech are a great group of people who work around the clock to produce results! They were flexible and willing to make sure that we were satisfied with each milestone. If you are launching a startup project and need a dedicated team for your next tech project, I highly recommend!",
    },
    {
      name: " Thomas Jackson of Covid Victory Foundation, Florida",
      description:
        "Everyone at Omka Tech were fun to work with. They are creative and worked easily with my ideas. Aastha is very talented and I commend her for the job she did for me.  Deepak kept on top of things, and overall I would say did an outstanding job. I look forward to our continued relationship",
    },
    {
      name: "Ashim Ramkisson, South Africa",
      description:
        "I got my website Leisure Life Solutions developed by them and I must say they did a wonderful job.Thank you for all the good service, communication, and assistance. I will surely recommend them to anyone looking for web design",
    },
    {
      name: "Dewry Bradford of ASQUI Ventures, NYC",
      description:
        "Listen People, Omka Tech is AMAZING!!  Their attention to detail is is impressive.  I was able to communicate my initial idea with no language barrier and they got it from the first conversation.  Their follow-thru was efficient and they executed my vision to perfection! I would recommend them to everyone who needs an app builder with full skills and the ability to present a finished product",
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <div class="container-xxl py-5" id="testHideHome">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          ></div>
          <div class="row g-4" id="back1" style={{ width: "100%" }}>
            <center>
              <h1
                class="display-6 mb-4"
                style={{ color: "white", marginTop: "60px" }}
                id="testh"
              >
                TESTIMONIALS
              </h1>
            </center>
            <br />
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
              style={{ marginTop: "-30px" }}
            >
              {testiMonials.length === 0 ? (
                <div class="item" style={{ Width: "80%" }}></div>
              ) : (
                testiMonials.map((testiMonialDetail) => {
                  return (
                    <TestiMonialsDetails
                      testiMonialDetail={testiMonialDetail}
                      key={testiMonialDetail._key}
                    />
                  );
                })
              )}
            </OwlCarousel>
          </div>
        </div>
        <div> </div>
      </div>
    </>

    //
  );
};

export default TestiMonials;
