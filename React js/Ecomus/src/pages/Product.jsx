import React from 'react'
import InnerBanner from '../helpers/InnerBanner'
// import ProductSide from '../components/ProductSide'
import ZoomSection from '../helpers/ZoomSection'
import FooterWhite from '../components/FooterWhite'

const Product = () => {
  return (
    <div>
      {/* Inner Banner Section */}
        <InnerBanner innerBannerTile="Product" innerBannerBreadcrumbs = "Product"/>

      {/* <ProductSide /> */}
      <ZoomSection />

      {/* Footer */}
      <FooterWhite/>
    
  </div>
  )
}

export default Product
