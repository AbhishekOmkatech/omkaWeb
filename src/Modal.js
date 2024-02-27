import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import po from '../src/images/popup.PNG'
import ReCAPTCHA from 'react-google-recaptcha';
import "../src/Component/css/style.css"

const Modal1 = () => {
   const [show, setShow] = useState(true);
  
  const [NameP, setNameP] = useState("");
  const [PhoneP, setPhoneP] = useState("");
  const [EmailP, setEmailP] = useState("");
  const [Message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [show1, setShow1] = useState(true);
  const [captchaValue, setCaptchaValue] = useState('');
  const handleClose = () => setShow1(false);
  const handleShow = () => setShow1(true);


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
    setShow1(!show1)
    setShowPopup(true);
    setNameP("");
    setEmailP("");
    setPhoneP("");
    setMessage("");
    handleClose();
    setCaptchaValue('');
  };
  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  }
  const handlePopupClose = () => {
    setShowPopup(false);
  };
 
  return (
    <>
      <div>
        {show1 && (
          <div className="wrapperr fadeInDown" id="loginModal">
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <div className="modal-content1">
                  <div className="modal-body">
                    <div className="contact-page-form" method="post" id="modalh">
                      <form onSubmit={submitNow1}>
                        <div className="containerB" style={{ backgroundColor: "white" }}>
                          <Modal.Header closeButton id="closeb"></Modal.Header>
                          <div className="brand-logoB">
                            <img src={po} alt="icon"></img>
                          </div>
                          <div className="brand-titleB">GET QUOTE NOW!</div>
                          <div className="inputsB">
                            <label id="Booklabel">Name</label> :&nbsp;
                            <input
                              type="text"
                              placeholder="Enter Full Name"
                              id="inputBook"
                              value={NameP}
                              onChange={(e) => {
                                setNameP(e.target.value);
                              }}
                              required
                            />
                            <label id="Booklabel">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email Id
                            </label>
                            :&nbsp;
                            <input
                              type="email"
                              placeholder="Enter Email"
                              id="inputBook"
                              value={EmailP}
                              onChange={(e) => {
                                setEmailP(e.target.value);
                              }}
                              required
                            />
                            <label id="Booklabel">Phone</label> :&nbsp;
                            <input
                              type="number"
                              placeholder="Enter Phone"
                              id="inputBook"
                              value={PhoneP}
                              onChange={(e) => {
                                setPhoneP(e.target.value);
                              }}
                              required
                            />
                            <label id="Booklabel">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Message
                            </label>
                            :&nbsp;
                            <input
                              type="text"
                              placeholder="Enter Message"
                              id="inputBook"
                              value={Message}
                              name="Project"
                              onChange={(e) => {
                                setMessage(e.target.value);
                              }}
                              required
                            />
                            <div className="arrange " style={ {textAlign: "-webkitCenter",width:"100%"
}} >
                              <div style={{ width:"100%", height: "78px"   }} ><ReCAPTCHA
                                sitekey="6Le5RX0pAAAAAPssR7cQeJT_xtjaqVxycMQ89cWc"
                                onChange={handleCaptchaChange}
                              /></div>
                            </div>


                            <button
                              type="submit"
                              id="bookNow"
                              disabled={!captchaValue}
                              
                            >
                              Submit
                            </button>
                            {showPopup && (
           <div className="thank-you-page">
           <h1 className="thank-you-text">Thank You!</h1>
           <span className="main-text modal-sub-heading">Your details have been successfully submitted.</span>
           <button className="thank-you-btn" onClick={handlePopupClose}>OK</button>
         </div>
         
          )}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal1;
