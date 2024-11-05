import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StayUpdate from "./StayUpdate";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <StayUpdate/>
      <Footer />
    </>
  );
};

export default RootLayout;
