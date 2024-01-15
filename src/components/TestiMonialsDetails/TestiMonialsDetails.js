import React from "react";
const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, description } = testiMonialDetail;
  console.log("testiMonialDetail" + testiMonialDetail);
  return (
    <div class="item" id="testcard">
      <div class="shadow-effect">
        <p id="testp">{description}</p>
      </div>
      <div class="testimonial-name">
        <h5 id="textname">{name}</h5>
      </div>
    </div>
  );
};

export default TestiMonialsDetails;
