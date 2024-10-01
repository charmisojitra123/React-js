import React from 'react'
import Slider from "react-slick";
import cardImg1 from '../assets/images/asset 30.jpeg'
import cardImg2 from '../assets/images/asset 31.jpeg'
import cardImg3 from '../assets/images/asset 32.jpeg'
import cardImg4 from '../assets/images/asset 33.png'
import cardImg5 from '../assets/images/asset 34.jpeg'
import { GoArrowUpRight } from "react-icons/go";

const TrendingProduct = () => {
    var settings = {
        dots: true,
        arrows: true,
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

  return (
    <div className="containerSection mt-0 lg:mt-6 pb-10 md:pb-3 xl:pb-0 overflow-hidden">
      <div>
        <h1 className="title py-4 md:py-8 lg:py-12">Trending Products</h1>
      </div>
      <div className="slider-container">
      <Slider {...settings}>
        <div>
              <div className="shopCategoryInfo overflow-hidden relative rounded-md m-3">
                  <img src={cardImg1} className="shopCategoryImg z-0 h-full w-full rounded-md object-cover"/>
                  <div className="absolute top-7 left-6 text-left">
                      <h1 className="text-md lg:text-lg font-medium tracking-wide mb-1">Screen Protection</h1>
                      <p className='text-[13px] text-gray-700 tracking-wider font-thin'>6 items</p>
                  </div>
                  <div className="flex items-center absolute bottom-7 left-6 text-left bg-white rounded-full px-6 py-3 shopCategoryBtn hover:bg-black hover:text-white">
                      <button className="text-sm">Shop now </button>
                      <p className='shopCategoryBtnIcon text-white'><GoArrowUpRight /></p>
                  </div>
              </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default TrendingProduct
