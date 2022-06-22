import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./sliderCenter.css";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const SliderCenter = () => {
    return (
      <div className="slider-center">
        <p className="slider-center-text">FEATURED COLLECTIONS</p>
        <CarouselProvider
          naturalSlideWidth={80}
          naturalSlideHeight={40}
          totalSlides={4}
          visibleSlides={1}
          currentSlide={1}
          infinite="true"
          isIntrinsicHeight="true"
        >
          <Slider>
            <Slide index={0}>
                <img src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/bannerV4-img2.jpg?v=1648057820" alt="" className="center-slider-img" />
            </Slide>
            
            <Slide index={1}>
                <img src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/bannerV4-img3.jpg?v=1648057822" alt="" className="center-slider-img" />
            </Slide>
            <Slide index={2}>
                <img src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/bannerV4-img1.jpg?v=1648057819" alt="" className="center-slider-img" />
            </Slide>
            <Slide index={3}>
                <img src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/bannerV4-img2.jpg?v=1648057820" alt="" className="center-slider-img" />
            </Slide>
            <Slide index={4}>
                <img src="https://cdn.shopify.com/s/files/1/0555/0912/3177/files/bannerV4-img3.jpg?v=1648057822" alt="" className="center-slider-img" />
            </Slide>
          </Slider>
          <ButtonBack>
            <ChevronLeft style={{ fontSize: "40px" }} />
          </ButtonBack>
          <ButtonNext>
            <ChevronRight style={{ fontSize: "40px" }} />
          </ButtonNext>
        </CarouselProvider>
      </div>
    );
}

export default SliderCenter;
