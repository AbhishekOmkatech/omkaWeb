import React from 'react';
import 'slick-carousel/slick/slick.css';
import "../Component/css/bootstrap.min.css";
import './css/YoutubeSlider.css'; // You can keep your custom CSS in this file
import $ from "jquery";


const YoutubeSlider = () => {
    $(document).ready(function () {
        $("#videoId").slick({
            slidesToShow: 3,
            infinite: true,
            // centerMode: true,
            slidesToScroll: 1,
            autoplay: true,
            prevArrow: false,
            nextArrow: false,
            centerMode: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
  return (
    <>
    <div className="container">
      <div className="slick-slider" id="videoId">
        <div className="element element-1">
          <div className="row">
            {/* <h1 className="text-center py-5 mx-2">Video </h1> */}
            <div className="col-12 text-center">
              <div className="ratio ratio-16x9 mx-2">
                <iframe
                  src="https://www.youtube.com/embed/vlDzYIIOYmM"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <br />
          
       
        <div className="element element-2">
         
            {/* <h1 className="text-center py-5 mx-2">Video </h1> */}
            <div className="col-12 text-center">
              <div className="ratio ratio-16x9 mx-2">
                <iframe
                  src="https://www.youtube.com/embed/vlDzYIIOYmM"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          
        </div>
        <div className="element element-3">
          
            {/* <h1 className="text-center py-5 mx-2">Video </h1> */}
            <div className="col-12 text-center">
              <div className="ratio ratio-16x9 mx-2">
                <iframe
                  src="https://www.youtube.com/embed/vlDzYIIOYmM"
                  title="YouTube video"
                  
                ></iframe>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
 
};

export default YoutubeSlider;

// import React from 'react';
// import { Container, Row, Col, Carousel } from 'react-bootstrap';

// const videos = [
//   {
//     id: 1,
//     title: 'Video 1',
//     src: 'https://www.example.com/video1.mp4',
//   },
//   {
//     id: 2,
//     title: 'Video 2',
//     src: 'https://www.example.com/video2.mp4',
//   },
//   {
//     id: 3,
//     title: 'Video 3',
//     src: 'https://www.example.com/video3.mp4',
//   },
  
// ];

// const YoutubeSlider = () => {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <Carousel>
//             {videos.map((video, index) => (
//               <Carousel.Item key={index}>
//                 <Row>
//                   {videos.slice(index, index + 3).map((video) => (
//                     <Col key={video.id} xs={12} md={4}>
//                       <video controls width="100%">
//                         <source src={video.src} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     </Col>
//                   ))}
//                 </Row>
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// const YoutubeSlider=()=>{
//     return (
//         <>
//           <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//   <ol class="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//     <video src="https://www.youtube.com/embed/VxUSHDLyTho?autoplay=1"></video>
//     </div>
//     <div class="carousel-item">
//       <video src="https://www.youtube.com/embed/APDee5jTGf4?start=2?autoplay=1"></video>
//     </div>
//     <div class="carousel-item">
//     <video src="https://www.youtube.com/embed/XRghryoXxuU?autoplay=1"></video>
//     </div>
//     <div class="carousel-item">
//     <video src="https://www.youtube.com/embed/VxUSHDLyTho?autoplay=1"></video>
//     </div>
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>
//         </>
//     )
// }

// export default YoutubeSlider;

