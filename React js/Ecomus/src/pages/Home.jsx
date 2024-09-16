import React from "react";
import ScrollSection from "../components/ScrollSection";
import BannerSlider from "../components/BannerSlider";
import ShopByCategory from "../components/ShopByCategory";
import BestDeal from "../components/BestDeal";
import TwoProduct from "../components/TwoProduct";
import DiscountCounter from "../components/DiscountCounter";

const Home = () => {
    
  return (
    <>
    
    {/* Banner Slider Section  */}
    <BannerSlider />

    {/* scroll Section */}
    <ScrollSection />       

    {/* Shop By Category */}
    <ShopByCategory />

    {/* Best Deal Section */}
    <BestDeal />

    {/* Two Product Section */}
    <TwoProduct />

    {/* Discout Counter Section */}
    <DiscountCounter />

    </>
  )
}

export default Home
