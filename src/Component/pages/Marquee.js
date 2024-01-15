import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import a from '../../images/marquee/1.png'
import b from '../../images/marquee/2 (2).png'

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
            <img src={a} alt="Slide 1"  className='marq'/>
          </div>
          <div>
            <img src={b} alt="Slide 2" className='marq' />
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
