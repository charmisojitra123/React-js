import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaTiktok, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import visa from "../assets/images/asset 58.png";
import footer1 from "../assets/images/asset 59.png";
import footer2 from "../assets/images/asset 60.png";
import footer3 from "../assets/images/asset 61.png";
import footer4 from "../assets/images/asset 62.png";
import Logo from "../assets/images/asset 57.svg";
import { GoArrowUpRight } from "react-icons/go";

const FooterBlack = () => {
  return (
    <div>
      <footer className="containerSection bg-black text-white">
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-6 py-10">
          <div className="text-[14px] text-[#a1a1a1] my-4">
            <img src={Logo} alt="logo" className="" />
            <p className="mt-5 tracking-wider leading-[32px]">Address: 1234 Fashion Street , Suite 567 New York, NY 10001</p>
            <p className="flex gap-1 my-4">Email: <a href=" ">info@fashionshop.com</a></p>
            <p className="text-muted-foreground my-4">Phone: <span>(212) 555-1234</span></p>
            <div className='flex items-center underline underline-offset-8 duration-300 hover:text-[var(--primary-color)] my-4'>
              <a href="" className='text-sm text-primary underline underline-offset-8'>Get direction</a>
              <GoArrowUpRight className='ml-1' />
            </div>

            <div className="flex gap-2 mt-10">
              <div className="rounded-[50%] border p-2 text-white hover:text-red-600 hover:border-red-600">
                <FaFacebookF className="" />
              </div>
              <div className="rounded-[50%] border p-2 text-white hover:text-red-600 hover:border-red-600">
                <FaXTwitter className="" />
              </div>
              <div className="rounded-[50%] border p-2 text-white hover:text-red-600 hover:border-red-600">
                <FaInstagram className="" />
              </div>
              <div className="rounded-[50%] border p-2 text-white hover:text-red-600 hover:border-red-600">
                <FaTiktok className="" />
              </div>
              <div className="rounded-[50%] border p-2 text-white hover:text-red-600 hover:border-red-600">
                <FaPinterest className="" />
              </div>
            </div>
          </div>

          <div className="">
            <h3 className="my-4 text-[17px] font-semibold tracking-wide">Help</h3>
            <ul className="list-none text-[14px] text-[#a1a1a1]">
              <li className="my-3">
                <a href="#" className="text-muted-foreground hover:text-[var(--primary-color)]">Privacy Policy</a>
              </li>
              <li className="my-3">
                <a href="#" className="text-muted-foreground hover:text-[var(--primary-color)]">Returns + Exchanges</a>
              </li>
              <li className="my-3">
                <a href="#" className="text-muted-foreground hover:text-[var(--primary-color)]">Shipping</a>
              </li>
              <li className="my-3">
                <a href="#" className="text-muted-foreground hover:text-[var(--primary-color)]">Terms & Conditions</a>
              </li>
              <li className="my-3">
                <a href="#" className="text-muted-foreground hover:text-[var(--primary-color)]">FAQ's</a>
              </li>
              <li className="my-3">
                <a href="#" className="text-muted-foreground hover:text-[var(--primary-color)]">Compare</a>
              </li>
              <li className="my-3">
                <a href="#" className="text-muted-foreground hover:text-[var(--primary-color)]">My Wishlist</a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="my-4 text-[16px] font-semibold tracking-wide">About us</h3>
            <ul className="list-none text-[14px] text-[#a1a1a1]">
              <li className="my-3">
                <a href="#" className="text-muted-foreground hover:text-[var(--primary-color)]">Our Story</a>
              </li>
              <li className="my-3">
                <a href="#" className="text-muted-foreground hover:text-[var(--primary-color)]">Visit Our Store</a>
              </li>
              <li className="my-3">
                <a href="#" className="text-muted-foreground hover:text-[var(--primary-color)]">Contact Us</a>
              </li>
              <li className="my-3">
                <a href="#" className="text-muted-foreground hover:text-[var(--primary-color)]">Account</a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="my-4 text-[16px] font-semibold tracking-wide">Sign Up for Email</h3>
            <p className="text-[14px] text-[#a1a1a1] tracking-wider leading-[32px] mb-5">Sign up to get first dibs on new arrivals, sales,exclusive content, events and more!</p>
            <div className="relative lg:block xl:flex flex justify-between p-2 rounded bg-[#2c2c2c]">
              <input type="email" placeholder="Enter your email..." className="p-2 bg-[#2c2c2c] border-none text-white"/>
              <button className="btn btnDark rounded px-3 w-full text-center justify-center text-sm"> Subscribe <GoArrowUpRight /></button>
          </div>
          </div>
        </div>

        <hr className="opacity-20" />

        {/* devloper name */}

        <div className="flex sm:flex-row flex-col items-center gap-3 sm:gap-0 sm:justify-between w-full py-6">
          <p className="text-[14px] text-[#545454] ">© 2024 Ecomus Store. All Rights Reserved</p>
          <div className="flex gap-2">
            <img src={visa} alt="" />
            <img src={footer1} alt="" />
            <img src={footer2} alt="" />
            <img src={footer3} alt="" />
            <img src={footer4} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterBlack;
