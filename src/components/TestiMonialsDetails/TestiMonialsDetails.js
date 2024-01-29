import React from "react";
const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, description } = testiMonialDetail;
  console.log("testiMonialDetail" + testiMonialDetail);
  return (
    <div className="item" id="testcard">
      <div className="shadow-effect">
        <p id="testp">{description}</p>
      </div>
      <div className="testimonial-name">
        <h5 id="textname">{name}</h5>
      </div>
    </div>
  );
};

export default TestiMonialsDetails;
