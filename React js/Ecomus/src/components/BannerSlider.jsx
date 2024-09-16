import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import sliderImage1 from "../assets/images/asset 27.jpeg";
import sliderImage2 from "../assets/images/asset 28.jpeg";
import sliderImage3 from "../assets/images/asset 29.jpeg";

const BannerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1
      };

  return (
    <div>
      <div className="slider-container bannerSlider overflow-x-hidden">
        <Slider {...settings}>
          <div className="bannerSlider">
            <div className="h-[80vh] flex flex-col justify-center ps-5 md:ps-12" style={{backgroundImage: `url(${sliderImage1})`,backgroundSize: 'cover', backgroundPosition:'center'}}>
              <p className="text-xl hidden md:block">UP TO 40% OFF CHARGERS AND MORE.</p>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium mt-16 mb-12 leading-tight">Savings for <br /> dads and grads.</h1> 
              <button className="btnDark btn text-md px-6 md:px-8 py-3 md:py-4 flex items-center font-semibold tracking-wide">Shop collection<IoIosArrowForward className="ms-1 text-xl" /></button>
            </div>
          </div>
          <div className="bannerSlider">
            <div className="h-[80vh] flex flex-col justify-center ps-5 md:ps-12" style={{backgroundImage: `url(${sliderImage2})`,backgroundSize: 'cover', backgroundPosition:'center'}}>
              <p className="text-xl hidden md:block">UP TO 40% OFF CHARGERS AND MORE.</p>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium mt-16 mb-12">Fast charging</h1> 
              <button className="btnDark btn text-md px-6 md:px-8 py-3 md:py-4 flex items-center font-semibold tracking-wide">Shop collection<IoIosArrowForward className="ms-1 text-xl" /></button>
            </div>
          </div>
          <div className="bannerSlider">
            <div className="h-[80vh] flex flex-col justify-center ps-5 md:ps-12" style={{backgroundImage: `url(${sliderImage3})`,backgroundSize: 'cover', backgroundPosition:'center'}}>
              <p className="text-xl hidden md:block">UP TO 40% OFF CHARGERS AND MORE.</p>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium mt-16 mb-12">Morden design</h1> 
              <button className="btnDark btn text-md px-6 md:px-8 py-3 md:py-4 flex items-center font-semibold tracking-wide">Shop collection<IoIosArrowForward className="ms-1 text-xl" /></button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default BannerSlider
