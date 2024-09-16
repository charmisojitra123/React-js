import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Cart from './Cart'
import Shop from './Shop'
import Login from './Login'
import Contact from './Contact'
import Error from './Error'
import Navbar2 from '../components/Navbar2'
import { createBrowserRouter , RouterProvider , Route } from 'react-router-dom'

const NavList = createBrowserRouter([
    {
        path: '/',
        element: <Navbar2 />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/aboutUs',
                element: <AboutUs/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '*',
                element: <Error/>
            },
        ]
    }
])

const Layout2 = () => {
  return (
    <div>
      <RouterProvider router={NavList}></RouterProvider>
    </div>
  )
}

export default Layout2
