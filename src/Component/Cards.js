import React from 'react'
import s from '.././images/5counter/EXPERIENCE-2.png'
import s1 from '.././images/5counter/COUNTRIES-2.png'
import s2 from '.././images/5counter/EMPLOYEES-2-2.png'
import s3 from '.././images/5counter/PROJECTS-2-2-2.png'
import s4 from '.././images/5counter/CLIENTS (1)-2.png'
const Cards = () => {
  return (
    <div>
      <div className="container-xxl py-5">
       
          <div className="container" id='connecttop'>
          

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              <div className="col mb-4">
                <div className="card " id="counterss" >             
                  <img src={s} alt='experience'></img>
             
                  <div className="card-body">
                    <h5 className="card-title">Experience</h5>
                    <h4 className="card-title"> 5+</h4>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card " id="counterss" >
                <img src={s1} alt='countries' ></img>
                  <div className="card-body">
                    <h5 className="card-title">Countries</h5>
                    <h4 className="card-title"> 15+</h4>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card " id="counterss" >
                <img src={s2}alt='employee' ></img>
                  <div className="card-body">
                    <h5 className="card-title"> Employee</h5>
                    <h4 className="card-title"> 35+</h4>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card " id="counterss" >
                <img src={s3} alt='Projects' ></img>
                  <div className="card-body">
                    <h5 className="card-title">Projects</h5>
                    <h4 className="card-title"> 100+</h4>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card " id="counterss" >
                <img src={s4} alt='customers'></img>
                  <div className="card-body">
                    <h5 className="card-title"> Customers</h5>
                    <h4 className="card-title"> 200+</h4>
                  
                  </div>
                </div>
              </div>
              
            </div>
          </div>     
      </div>
    </div>
  )
}

export default Cards
