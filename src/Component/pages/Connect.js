import React from 'react'
import Cards from '../Cards'
import { Link } from 'react-router-dom'
import Contact from './Contact'

const Connect = () => {
    return (
        <div>
            <div className='container' id='lk'>
                <Cards />
                <h2 class="text-white animated zoomIn" id="lk1" style={{ textAlign: "left"}}>
                    SETUP A FREE CONSULTATION WITH US
                    <br />{" "}
                    <h4  id='lk2' class="text-white animated zoomIn" style={{ textAlign: "left"}}>
                        We are dedicated to helping you transform your ideas into reality.
                        <br />
                        <br />

                    </h4>
                    <Link to='/contact-us'>
                    <button
                        type="button"
                        class="btn btn-primary rounded-pill"
                        id="buttonhhh"
                        style={{ animation: "pulse 1.1s ease infinite", color: "white"}}
                    >
                       &#9990; Schedule A Call
                    </button></Link>
               
               
                </h2>
           
            </div>
            
        </div>
    )
}

export default Connect
