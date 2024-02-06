import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import { useNavigate } from "react-router-dom";
const { REACT_APP_API_ENDPOINT } = process.env;
const Homeform = () => {
  const navigate = useNavigate();
  const [NameP, setNameP] = useState("");
  const [PhoneP, setPhoneP] = useState("");
  const [EmailP, setEmailP] = useState("");
  const [Message, setMessage] = useState("");
  
  const submitNow1 = (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way.

    const url = 'https://www.omkatech.com/home.php';

    const formData = new FormData();
    formData.append("Name", NameP);
    formData.append("Email", EmailP);
    formData.append("Phone", PhoneP);
    formData.append("Message", Message);

    // Log the formData before making the request
    console.log(formData);

    fetch(url, {
        method: 'POST',
        body: formData,
    })
        .then((res) => {
            if (res.ok) {
                // Handle success, e.g., show a success message or redirect
            } else {
                // Handle errors, e.g., show an error message
            }
        })
        .catch((error) => {
            // Handle network or other errors
        });

        setNameP("");
        setEmailP("");
        setPhoneP("");
        setMessage("");
        alert("successfully submitted")
};
  return (
    <div id="Homepageform">
      <div className="containerHome">
        <form id="contactHome"onSubmit={submitNow1}>
          <h3>
            Ready to discuss your
            <br />
            <span id="contactHomeHeading">business idea ?</span>
            
          </h3>
          <br />
          <fieldset>
            <input
              placeholder="Full Name"
              value={NameP}
              onChange={(e) => {
                setNameP(e.target.value);
              }}
              type="text"
              tabIndex="1"
              required
              autoFocus
              id="nplace"
            />
          </fieldset>
          <br />
          <fieldset>
            <input
              placeholder="Email Address"
              value={EmailP}
              onChange={(e) => {
                setEmailP(e.target.value);
               
              }}
              type="email"
              tabIndex="2"
              required
            />
          </fieldset>
          <br />
          <fieldset>
            <input
              placeholder="Phone Number"
              value={PhoneP}
              onChange={(e) => {
                setPhoneP(e.target.value);
              }}
              type="number"
              required
            />
          </fieldset>
          <br />
          <fieldset>
            <input
              placeholder="Project Description"
              type="text"
              value={Message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
              id="projectplace"
            />
          </fieldset>
          <br />
          <fieldset>
            <button id="contactsubmit" type="submit">
              Get Free Consultation Now
            </button>
            {/* <h6 id="homeformcall">
              OR CALL US AT - <br />
              <a href="tel:+91 9717511913"><img src='./india.png' id="flag" ></img> (IN)&nbsp; : +91 9717511913</a> <br/>
              <a href="tel:+1 (786) 648-29107"> <img src='./us.png' id="flag" ></img> (US) : +1 (786) 648-2910</a><br/>
              <a href="tel:+1 (437) 979-1504"><img src='./canda.png' id="flag" ></img> (CA) : +1 (437) 979-1504</a><br/>
            </h6> */}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Homeform;
