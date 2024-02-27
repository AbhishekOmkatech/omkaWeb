import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';
import "../css/style.css"



const { REACT_APP_API_ENDPOINT } = process.env;
const Homeform = () => {
  // const navigate = useNavigate();
  // const [NameP, setNameP] = useState("");
  // const [PhoneP, setPhoneP] = useState("");
  // const [EmailP, setEmailP] = useState("");
  // const [Message, setMessage] = useState("");
  // const [captchaValue, setCaptchaValue] = useState(null);
  // const [showPopup, setShowPopup] = useState(false);
  const [NameP, setNameP] = useState('');
  const [EmailP, setEmailP] = useState('');
  const [PhoneP, setPhoneP] = useState('');
  const [Message, setMessage] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  
//   const submitNow1 = (e) => {
//     e.preventDefault(); // Prevent the form from submitting the traditional way.

//     const url = 'https://www.omkatech.com/home.php';

//     const formData = new FormData();
//     formData.append("Name", NameP);
//     formData.append("Email", EmailP);
//     formData.append("Phone", PhoneP);
//     formData.append("Message", Message);

//     // Log the formData before making the request
//     console.log(formData);

//     fetch(url, {
//         method: 'POST',
//         body: formData,
//     })
//         .then((res) => {
//             if (res.ok) {
//                 // Handle success, e.g., show a success message or redirect
//             } else {
//                 // Handle errors, e.g., show an error message
//             }
//         })
//         .catch((error) => {
//             // Handle network or other errors
//         });

//         setNameP("");
//         setEmailP("");
//         setPhoneP("");
//         setMessage("");
//         setShowPopup(true);
        
// };
// const handleButtonClick = () => {
//   // Show the Thank You pop-up
  
 
// };
// const handlePopupClose = () => {
//   // Hide the pop-up when user clicks OK
//   setShowPopup(false);
// };

// const handleCaptchaChange = (value) => {
//  // console.log("Captcha value:", value);
//   setCaptchaValue(value);
 
// }
const submitNow1 = (e) => {
  e.preventDefault();
  // Check if reCAPTCHA has been completed
  if (captchaValue) {
    // Perform form submission logic here
    console.log('Form submitted:', NameP, EmailP, PhoneP, Message);
    // Show popup or perform other actions as needed
    setShowPopup(true);
    // Clear form fields
    setNameP('');
    setEmailP('');
    setPhoneP('');
    setMessage('');
    // Reset reCAPTCHA value
    setCaptchaValue('');
  } else {
    // reCAPTCHA not completed, show error message or handle accordingly
    console.log('Please complete reCAPTCHA.');
  }
};

const handleCaptchaChange = (value) => {
  console.log("Captcha value:", value);
  setCaptchaValue(value);
};

const handlePopupClose = () => {
  setShowPopup(false);
};
  return (
    <div id="Homepageform">
      <div className="containerHome">
        <form id="contactHome" onSubmit={submitNow1}>
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
              onChange={(e) => setNameP(e.target.value)}
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
              onChange={(e) => setEmailP(e.target.value)}
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
              onChange={(e) => setPhoneP(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
              required
              id="projectplace"
            />
          </fieldset>
          <br />
          <fieldset>
            <ReCAPTCHA
              sitekey="6Le5RX0pAAAAAPssR7cQeJT_xtjaqVxycMQ89cWc"
              onChange={handleCaptchaChange}
            />
          </fieldset>
          <br/>
          <button id="contactsubmit" type="submit"  disabled={!captchaValue}>
            Get Free Consultation Now
          </button>
          {showPopup && (
           <div className="thank-you-page">
           <h1 className="thank-you-text">Thank You!</h1>
          
          
           <span className="main-text modal-sub-heading">Your details have been successfully submitted.</span>
           <button className="thank-you-btn" onClick={handlePopupClose}>OK</button>
         </div>
         
          )}
        </form>
      </div>
    </div>
    // <div id="Homepageform">
    //   <div className="containerHome">
    //     <form id="contactHome"onSubmit={submitNow1}>
    //       <h3>
    //         Ready to discuss your
    //         <br />
    //         <span id="contactHomeHeading">business idea ?</span>
            
    //       </h3>
    //       <br />
    //       <fieldset>
    //         <input
    //           placeholder="Full Name"
    //           value={NameP}
    //           onChange={(e) => {
    //             setNameP(e.target.value);
    //           }}
    //           type="text"
    //           tabIndex="1"
    //           required
    //           autoFocus
    //           id="nplace"
    //         />
    //       </fieldset>
    //       <br />
    //       <fieldset>
    //         <input
    //           placeholder="Email Address"
    //           value={EmailP}
    //           onChange={(e) => {
    //             setEmailP(e.target.value);
               
    //           }}
    //           type="email"
    //           tabIndex="2"
    //           required
    //         />
    //       </fieldset>
    //       <br />
    //       <fieldset>
    //         <input
    //           placeholder="Phone Number"
    //           value={PhoneP}
    //           onChange={(e) => {
    //             setPhoneP(e.target.value);
    //           }}
    //           type="number"
    //           required
    //         />
    //       </fieldset>
    //       <br />
    //       <fieldset>
    //         <input
    //           placeholder="Project Description"
    //           type="text"
    //           value={Message}
    //           onChange={(e) => {
    //             setMessage(e.target.value);
    //           }}
    //           required
    //           id="projectplace"
    //         />
    //       </fieldset>
    //       <br />
    //       <fieldset>
    //       <ReCAPTCHA
    //     sitekey="6Le5RX0pAAAAAPssR7cQeJT_xtjaqVxycMQ89cWc"
    //     onChange={handleCaptchaChange}
    //   /><br/>
    //         <button id="contactsubmit" type="submit" onClick={handleButtonClick}>
    //           Get Free Consultation Now
    //         </button>
    //         {showPopup && (
    //      <div className="thank-you-page">
    //      <h1 className="thank-you-text">Thank You!</h1>
    //      <span className="main-text modal-sub-heading">Your details has been successfully submitted.</span>
    //      <button className="thank-you-btn" onClick={handlePopupClose}>OK</button>
       
      
    //    </div>
       
      
       
    //   )}
    //         {/* <h6 id="homeformcall">
    //           OR CALL US AT - <br />
    //           <a href="tel:+91 9717511913"><img src='./india.png' id="flag" ></img> (IN)&nbsp; : +91 9717511913</a> <br/>
    //           <a href="tel:+1 (786) 648-29107"> <img src='./us.png' id="flag" ></img> (US) : +1 (786) 648-2910</a><br/>
    //           <a href="tel:+1 (437) 979-1504"><img src='./canda.png' id="flag" ></img> (CA) : +1 (437) 979-1504</a><br/>
    //         </h6> */}
    //       </fieldset>
    //     </form>
    //   </div>
    // </div>
//     <>
//     <div id="Homepageform">
//   <div className="containerHome">
//     <form id="contactHome" onSubmit={submitNow1}>
//       <h3>
//         Ready to discuss your
//         <br />
//         <span id="contactHomeHeading">business idea ?</span>
//       </h3>
//       <br />
//       <fieldset>
//         <input
//           placeholder="Full Name"
//           value={NameP}
//           onChange={(e) => {
//             setNameP(e.target.value);
//           }}
//           type="text"
//           tabIndex="1"
//           required
//           autoFocus
//           id="nplace"
//         />
//       </fieldset>
//       <br />
//       <fieldset>
//         <input
//           placeholder="Email Address"
//           value={EmailP}
//           onChange={(e) => {
//             setEmailP(e.target.value);
//           }}
//           type="email"
//           tabIndex="2"
//           required
//         />
//       </fieldset>
//       <br />
//       <fieldset>
//         <input
//           placeholder="Phone Number"
//           value={PhoneP}
//           onChange={(e) => {
//             setPhoneP(e.target.value);
//           }}
//           type="number"
//           required
//         />
//       </fieldset>
//       <br />
//       <fieldset>
//         <input
//           placeholder="Project Description"
//           type="text"
//           value={Message}
//           onChange={(e) => {
//             setMessage(e.target.value);
//           }}
//           required
//           id="projectplace"
//         />
//       </fieldset>
//       <br />
//       <fieldset id="recaptchaField" style={{ display: "none" }}>
//         <ReCAPTCHA
//           sitekey="6Le5RX0pAAAAAPssR7cQeJT_xtjaqVxycMQ89cWc"
//           onChange={handleCaptchaChange}
//         />
//       </fieldset>
//       <br />
//       <fieldset>
//         <button
//           id="contactsubmit"
//           type="button"
//           onClick={() => {
//             document.getElementById("recaptchaField").style.display = "block";
//             document.getElementById("contactsubmit").style.display = "none";
//           }}
//         >
//           Get Free Consultation Now
//         </button>
//         <button
//           id="submitWithCaptcha"
//           type="submit"
//           style={{ display: "none" }}
//         >
//           Submit
//         </button>
//       </fieldset>
//     </form>
//   </div>
// </div>

//     </>
  );
};

export default Homeform;
