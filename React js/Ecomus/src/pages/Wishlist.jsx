import React from 'react'
import InnerBanner from '../helpers/InnerBanner'
import FooterWhite from '../components/FooterWhite'

const Wishlist = () => {
  return (
    <div>

      {/* Inner Banner Section */}
      <InnerBanner innerBannerTile="Your Wishlist" innerBannerBreadcrumbs = "Wishlist"/>
      
      {/* Footer */}
      <FooterWhite/>
    
  </div>
  )
}

export default Wishlist
