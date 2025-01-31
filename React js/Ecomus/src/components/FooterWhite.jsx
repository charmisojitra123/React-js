import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaTiktok, FaPinterestSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import visa from "../assets/images/asset 58.png";
import img1 from "../assets/images/asset 59.png";
import img2 from "../assets/images/asset 60.png";
import img3 from "../assets/images/asset 61.png";
import img4 from "../assets/images/asset 62.png";
import logo from "../assets/images/asset 1.svg";
import { GoArrowUpRight } from "react-icons/go";

const FooterWhite = () => {
    const Help = [
        { name: "Privacy Policy", href: "#" },
        { name: "Returns + Exchanges", href: "#" },
        { name: "Shipping", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "FAQ's", href: "#" },
        { name: "Compare", href: "#" },
        { name: "My Wishlist", href: "#" },
      ];
    
      const aboutLinks = [
        { name: "Our Story", href: "#" },
        { name: "Visit Our Store", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Account", href: "#" },
      ];
    
      const socialMedia = [
        { icon: <CiFacebook className="text-5xl" />, href: "#" },
        { icon: <FaXTwitter className="text-2xl" />, href: "#" },
        { icon: <FaInstagram className="text-2xl" />, href: "#" },
        { icon: <FaTiktok className="text-2xl" />, href: "#" },
        { icon: <FaPinterestSquare className="text-2xl" />, href: "#" },
      ];
    
      const images = [visa, img1, img2, img3, img4];
    
  return (
    <div>
      <footer className="bg-white text-black flex h-auto items-center flex-col containerSection">

      {/* Separator */}
      <p className="h-[1px] bg-gray-200 w-[100%] my-10"></p>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Contact */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="logo" className="mb-4 w-[150px]" />
          <p className='text-gray-600 pe-0 lg:pe-16 text-sm leading-[32px]'>Address: 1234 Fashion Street, Suite 567, New York, NY 10001</p>
          <p className="flex gap-1 text-gray-600 text-sm">
            Email:{" "}
            <a href="mailto:info@fashionshop.com" className='font-semibold'>info@fashionshop.com</a>
          </p>
          <p className='text-gray-600 text-sm'>
            Phone: <span className='font-semibold'>(212) 555-1234</span>
          </p>
          <a href="#" className="text-primary hover:underline">
            Get direction
          </a>
          <div className="flex gap-3">
            {socialMedia.map((media, id) => (
              <div
                key={id}
                className="w-[40px] h-[40px] flex items-center justify-center rounded-[50%] p-1 border"
              >
                {media.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="mb-4 text-[18px]">Help</h3>
          <ul className="list-none flex flex-col gap-1 text-[14px] text-gray-600">
            {Help.map((link, id) => (
              <li key={id} className='my-1'>
                <a href={link.href} className="hover:text-[#db1215]">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-[18px] mb-4">About Us</h3>
          <ul className="list-none flex flex-col gap-1 text-[14px] text-gray-600">
            {aboutLinks.map((link, id) => (
              <li key={id} className='my-1'>
                <a href={link.href} className="hover:text-[#db1215]">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Dropdown Section */}
        <div className="flex flex-col gap-5">
          <h3 className="font-semibold">Sign Up for Email</h3>
          <p className="text-[14px] text-gray-600 leading-[32px]">Sign up to get first dibs on new arrivals, sales, exclusive content, events, and more!</p>
          <div className="relative lg:block xl:flex flex justify-between p-2 rounded border border-muted ">
            <input type="email" placeholder="Enter your email..." className="p-2"/>
            <button className="btn btnDark rounded px-3 w-full text-center justify-center text-sm">Subscribe <GoArrowUpRight /></button>
          </div>
          <div className="flex justify-around text-black mt-4">
            {/* <Dropdown name="EUR" img={Eur} /> */}
            <div className="text-black flex items-center gap-2 relative">
              <i className="ri-arrow-down-s-line text-black"></i>
            </div>
          </div>
        </div>
      </div>

      
      {/* Separator */}
      <p className="h-[1px] bg-gray-200 w-[100%] mt-10"></p>

      {/* Footer Bottom */}
      <div className="flex sm:flex-row flex-col items-center justify-between w-full py-6 gap-3 sm:gap-0">
        <p className="text-[14px] text-[#545454]">
          © 2024 Ecomus Store. All Rights Reserved
        </p>
        <div className="flex gap-2">
          {images.map((imgSrc, id) => (
            <img key={id} src={imgSrc} alt={`image-${id}`} />
          ))}
        </div>
      </div>
    </footer>
    </div>
  )
}

export default FooterWhite

