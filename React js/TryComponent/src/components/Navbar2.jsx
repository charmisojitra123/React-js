import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/react-router-logo.webp";

const Navbar2 = () => {
  return (
    <div>
      <div className="flex items-center justify-around">
        <div>
          <img src={logo} alt="" className='h-16' />
        </div>
        <div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/aboutUs">AboutUs</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Cart</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar2;
