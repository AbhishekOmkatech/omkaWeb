import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { REACT_APP_API_ENDPOINT } = process.env;
const EmailForm = () => {
  const navigate = useNavigate();
  const [Email1, setEmail1] = useState("");
 

 
  const submitNow1 = (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way.

    const url = 'https://www.omkatech.com/Contact.php';

    const formData = new FormData();
    formData.append('Email', Email1);

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

    setEmail1('');
};

console.log(Email1);
  
  return (
    <div>
      <div id="GetFree">
        <center>
          <h6 style={{ fontWeight: "bold", color: "black" }}>
            GET FREE CONSULTATION
          </h6>
        </center>
        <br />
        <br />
        <div className="position-relative mx-auto" id="getdiv">
          <center>
            <form onSubmit={submitNow1}>
              <input
                className="form-control form-rounded bg-transparent border-secondary w-100 py-3 ps-4 pe-5 text-center"
                type="email"
                value={Email1}
                id="inputbox"
                onChange={(e) => {
                  setEmail1(e.target.value);
                }}
                placeholder="Your email"
                style={{ borderRadius: "1.3rem", height: "37.6px" }} required
              />
              <button
                type="submit"
                id="homeB"
                className="btn btn-primary rounded-pill"
               
                style={{color:"white",backgroundColor:"#04165D"}}
              >
                SUBMIT
              </button>
            </form>
          </center>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
