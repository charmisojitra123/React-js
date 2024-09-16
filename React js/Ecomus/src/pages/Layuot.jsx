import React from 'react'
import { PagesObj } from './PagesObj'
import { createBrowserRouter , RouterProvider , Route } from 'react-router-dom'

const navList = createBrowserRouter([
    {
        path:"",
        element: PagesObj.navbar,
        children: [
            {
                path:"/",
                element: PagesObj.home
            },
            {
                path:"/about",
                element: PagesObj.aboutus
            },
            {
                path:"/blog",
                element: PagesObj.blog
            },
            {
                path:"/contact",
                element: PagesObj.contact
            },
            {
                path:"/cart",
                element: PagesObj.cart
            },
            {
                path:"/login",
                element: PagesObj.login
            },
            {
                path:"/shop",
                element: PagesObj.shop
            },
            {
                path:"/checkout",
                element: PagesObj.checkout
            },
            {
                path:"/product",
                element: PagesObj.product
            },
            {
                path:"/wishlist",
                element: PagesObj.wishlist
            },
            {
                path:"/faq",
                element: PagesObj.faq
            },
            {
                path:"/*",
                element: PagesObj.error
            }
        ]
    }
])


const Layuot = () => {
  return (
    <div>
      <RouterProvider router={navList}></RouterProvider>
    </div>
  )
}

export default Layuot
