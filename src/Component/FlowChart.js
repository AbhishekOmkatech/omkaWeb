import React from "react";
import process from "../images/process.png";
import process1 from "../images/reduceImg/Our process section design mobile-04.png";
const FlowChart = () => {
  return (
    <div>
      <section id="process" style={{ marginTop: "-80px" }}>
        <img src={process} id="flows"  alt ="text"></img>
        <img src={process1} id="flowh"  alt ="text"></img>
      </section>
    </div>
  );
};

export default FlowChart;
