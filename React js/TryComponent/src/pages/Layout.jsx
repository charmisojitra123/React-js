import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Cart from './Cart'
import Shop from './Shop'
import Login from './Login'
import Contact from './Contact'
import Error from './Error'
import Navbar from '../components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home />} ></Route>
            <Route path="/about" element={<AboutUs />} ></Route>
            <Route path="/cart" element={<Cart />} ></Route>
            <Route path="/shop" element={<Shop />} ></Route>
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/contact" element={<Contact />} ></Route>
            <Route path="*" element={<Error />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout
