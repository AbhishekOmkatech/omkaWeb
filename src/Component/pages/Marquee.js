import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import a from '../../images/marquee/1.png'
import b from '../../images/marquee/cosmax.png'
import expansive from "../../images/marquee/finalExpansive.png"
import GEC from "../../images/marquee/GEC.png"
import kidsta from "../../images/marquee/kidsta1.png"
import RETV from "../../images/marquee/RETV.png"
import StrategicSolar from "../../images/marquee/Strategic Solar.png"
import TheLashsUPPLY from "../../images/marquee/The-Lash-sUPPLY.png"
import Indigeniousapp from "../../images/marquee/Indigenious app.png"
import Annakiki from "../../images/marquee/annakiki.png"


// import a from '../../images/marquee/a.webp'
// import b from '../../images/marquee/b.png'
// import c from '../../images/marquee/c.png'
// import d from '../../images/marquee/d.png'
// import e from '../../images/marquee/e.png'
// import f from '../../images/marquee/f.png'
// import g from '../../images/marquee/g.png'

class Marquee extends React.Component {
  render() {
    const settings = {
      speed: 4000,
      autoplay: true,
      autoplaySpeed: 10,
      centerMode: true,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false
    };

    return (
        <div className="full-width-slider" >
        <Slider {...settings}>
          {/* Your slider content goes here */}
          <div>
            <a href="https://cleantogreen.in/" target='_blank'>
            <img src={a} alt="Slide 1"  className='marq'/>
            </a>
          </div>
          <div>
          <a href="https://www.cosmax.com/main.asp" target='_blank'>
            <img src={b} alt="Slide 1"  className='marq'/>
            </a>
          </div>
          <div>
          <a href="https://expansive.com/" target='_blank'>
            <img src={expansive} alt="Slide 2" className='marq' />
            </a>
          </div>
          <div>
          <a href="https://www.gecscales.com/" target='_blank'>
            <img src={GEC} alt="Slide 1"  className='marq'/>
            </a>
          </div>
          <div>
          <a href="" target='_blank'>
            <img src={kidsta} alt="Slide 2" className='marq'/>
            </a>
          </div>
          <div>
          <a href="" target='_blank'>
            <img src={RETV} alt="Slide 2" className='marq' />
            </a>
          </div>
          <div>
          <a href="https://strategicsolarsolutions.com/" target='_blank'>
            <img src={StrategicSolar} alt="Slide 1"  className='marq'/>
            </a>
          </div>
          <div>
          <a href="https://www.thelashsupply.com/" target='_blank'>
            <img src={TheLashsUPPLY} alt="Slide 2" className='marq' />
            </a>
          </div>
          <div>
            <a href="http://theindigenousapp.ca/" target='_blank'>
            <img src={Indigeniousapp} alt="Slide 2" className='marq' />
            </a>
          </div>
          <div>
            <a href=" https://annakiki.com/en-in" target='_blank'>
              <img src={Annakiki} alt=""  className='marq'/>
            </a>
          </div>
         
          {/* <div>
            <img src={c} alt="Slide 1"  className='marq'/>
          </div>
          <div>
            <img src={d} alt="Slide 2"  className='marq'/>
          </div><div>
            <img src={e} alt="Slide 1"  className='marq'/>
          </div>
          <div>
            <img src={f} alt="Slide 2" className='marq' />
          </div><div>
            <img src={g} alt="Slide 1" className='marq' />
          </div> */}
         
          {/* Add more slides as needed */}
        </Slider>
      </div>
    );
  }
}

export default Marquee;
