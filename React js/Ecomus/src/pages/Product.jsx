import React from 'react'
import InnerBanner from '../helpers/InnerBanner'
// import ProductSide from '../components/ProductSide'
import ZoomSection from '../helpers/ZoomSection'

const Product = () => {
  return (
    <div>
      <InnerBanner innerBannerTile="Product" innerBannerBreadcrumbs = "Product"/>
      {/* <ProductSide /> */}
      <ZoomSection />
    </div>
  )
}

export default Product
