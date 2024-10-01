import React from "react";
import ScrollSection from "../components/ScrollSection";
import BannerSlider from "../components/BannerSlider";
import ShopByCategory from "../components/ShopByCategory";
import BestDeal from "../components/BestDeal";
import TwoProduct from "../components/TwoProduct";
import DiscountCounter from "../components/DiscountCounter";
import TrendingProduct from "../components/TrendingProduct";
import UpperFooter from "../components/UpperFooter";
import FooterBlack from "../components/FooterBlack";

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

    {/* Trending Product Section */}
    <TrendingProduct />

    {/* Upper Footer Section */}
    <UpperFooter />

    {/* Footer Section */}
    <FooterBlack />

    </>
  )
}

export default Home
