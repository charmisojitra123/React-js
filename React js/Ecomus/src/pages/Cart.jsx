import React from 'react'
import InnerBanner from '../helpers/InnerBanner'
import FooterWhite from '../components/FooterWhite'

const Cart = () => {
  return (
    <div>

      {/* Inner Banner Section */}
      <InnerBanner innerBannerTile="Shopping Cart" innerBannerBreadcrumbs = "Cart"/>

      {/* Footer */}
      <FooterWhite/>
      
    </div>
  )
}

export default Cart
