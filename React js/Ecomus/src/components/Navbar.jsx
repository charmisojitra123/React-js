import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  logo  from "../assets/images/asset 1.svg"
import menuIcon from "../assets/images/asset 93.svg"
import { Link , NavLink , Outlet } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";

const Navbar = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };
  return (
    <div>
      {/* <div className="fixed top-0 z-50 w-full"> */}
      <div>
        <div className="topHeader flex justify-between items-center text-white bg-black py-2 containerSection">
          <div className="hidden lg:flex gap-8 text-sm font-medium w-1/4">
            <p>(+333)123-1688</p>
            <p className="hidden xl:block">sayhello@ecomus.com</p>
          </div>
          <div className="w-full lg:w-1/2 text-center">
            <Slider {...settings}>
                <div>
                    <h3 className="text-xs md:text-sm font-semibold">Welcome to store. Fantastic theme! Beautifully designed</h3>
                </div>
                <div>
                    <h3 className="text-xs md:text-sm font-semibold flex justify-center">Season Sale: Time to refresh your wardrobe. <span className="mx-2 text-lime-300 flex items-center underline underline-offset-4">Shop now<GoArrowUpRight className="font-black" /></span></h3>
                </div>
                <div>
                    <h3 className="text-xs md:text-sm font-semibold flex justify-center">Discount off 50%. <span className="mx-2 text-lime-300 flex items-center underline underline-offset-4">Shop now<GoArrowUpRight className="font-black" /></span></h3>
                </div>
            </Slider>
          </div>
          <div className="hidden lg:flex gap-8 text-sm font-semibold w-1/4 justify-end">
            <p>USD</p>
            <p>English</p>
          </div>
        </div>
        <div className="header containerSection flex justify-between items-center bg-white shadow-lg  ">
          <div className="lg:hidden block">
            <img src={ menuIcon } alt="" />
          </div>
          <div>
            <img src={ logo } alt="" />
          </div>
          <div className="hidden lg:block">
            <nav>
              <ul className="flex gap-5">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/product">Product</NavLink></li>
                <li><NavLink to="">Pages</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/checkout">Checkout</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
              </ul>
            </nav>
          </div>
          <div className="flex gap-1 md:gap-3 text-2xl">
            <IoSearch />
            <NavLink to='/login'><GoPerson className="hidden md:block" /></NavLink>
            <NavLink to='/wishlist'><FaRegHeart className="hidden md:block" /></NavLink>
            <NavLink to="/cart"><RiShoppingBag2Line /></NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
