import React from "react";
import Banner from "../Components/Banner";
import NEW_ARRIVALS from "../Components/NEW_ARRIVALS";
import Top_selling from "../Components/Top_selling";
import Dress_style from "../Components/Dress_style";
import Our_happycostomer from "../Components/Our_happycostomer";

const Home = () => {
  return (
    <div>
      <Banner />
      <NEW_ARRIVALS />
      <Top_selling />
      <Dress_style/>
      <Our_happycostomer/>
    </div>
  );
};

export default Home;
