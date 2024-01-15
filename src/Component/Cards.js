import React from 'react'
import s from '.././images/5counter/EXPERIENCE-2.png'
import s1 from '.././images/5counter/COUNTRIES-2.png'
import s2 from '.././images/5counter/EMPLOYEES-2-2.png'
import s3 from '.././images/5counter/PROJECTS-2-2-2.png'
import s4 from '.././images/5counter/CLIENTS (1)-2.png'
const Cards = () => {
  return (
    <div>
      <div class="container-xxl py-5">
       
          <div class="container" id='connecttop'>
          

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              <div class="col mb-4">
                <div class="card " id="counterss" >             
                  <img src={s} alt='experience'></img>
             
                  <div class="card-body">
                    <h5 class="card-title">Experience</h5>
                    <h4 class="card-title"> 5+</h4>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card " id="counterss" >
                <img src={s1} alt='countries' ></img>
                  <div class="card-body">
                    <h5 class="card-title">Countries</h5>
                    <h4 class="card-title"> 15+</h4>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card " id="counterss" >
                <img src={s2}alt='employee' ></img>
                  <div class="card-body">
                    <h5 class="card-title"> Employee</h5>
                    <h4 class="card-title"> 35+</h4>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card " id="counterss" >
                <img src={s3} alt='Projects' ></img>
                  <div class="card-body">
                    <h5 class="card-title">Projects</h5>
                    <h4 class="card-title"> 100+</h4>
                  </div>
                </div>
              </div>
              <div class="col mb-4">
                <div class="card " id="counterss" >
                <img src={s4} alt='customers'></img>
                  <div class="card-body">
                    <h5 class="card-title"> Customers</h5>
                    <h4 class="card-title"> 200+</h4>
                  
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
