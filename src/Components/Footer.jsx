import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import logo from "../../public/images/logo.png";
const Footer = () => {
  return (
    <section className="mt-[80px] ">
      <Container>
        <Flex className="justify-between flex-wrap lg:flex-nowrap px-4 gap-y-4 border-b-[2px] pb-10 ">
          <div className="w-[45%] lg:w-[30%] cursor-pointer ">
            <img src={logo} alt="logo" />
            <p className="font-Satoshi text-sm leading-5 font-normal text-[#00000099] mt-6 w-full lg:w-[248px]">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <Flex className="gap-x-2 mt-[50px] cursor-pointer">
              <FaFacebook />
              <FaInstagram />
              <FaGithub />
            </Flex>
          </div>
          <div className="w-[45%] lg:w-[15%] cursor-pointer">
            <h2 className="font-sans text-sm lg:text-base font-medium leading-5 uppercase tracking-[3px] text-[#000000]">
              Company
            </h2>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              About
            </h3>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              Features
            </h3>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              Works
            </h3>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              Career
            </h3>
          </div>
          <div className="w-[30%] lg:w-[15%] cursor-pointer ">
            <h2 className="font-sans text-sm lg:text-base font-medium leading-5 uppercase tracking-[3px] text-[#000000]">
              Help
            </h2>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              Customer Support
            </h3>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              Delivery Details
            </h3>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              Terms & Conditions
            </h3>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              Privacy Policy
            </h3>
          </div>
          <div className="w-[30%] lg:w-[15%] cursor-pointer ">
            <h2 className="font-sans text-sm lg:text-base font-medium leading-5 uppercase tracking-[3px] text-[#000000]">
              FAQ
            </h2>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              Account
            </h3>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              Manage Deliveries
            </h3>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              Orders
            </h3>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              Payments
            </h3>
          </div>

          <div className="w-[30%] lg:w-[15%] cursor-pointer">
            <h2 className="font-sans text-sm lg:text-base font-medium leading-5 uppercase tracking-[3px] text-[#000000]">
              Resources
            </h2>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              Free eBooks
            </h3>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              Development Tutorial
            </h3>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              How to - Blog
            </h3>
            <h3 className="font-Satoshi text-[12px] md:text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-[25px]">
              Youtube Playlist
            </h3>
          </div>
        </Flex>
        <p className="font-Satoshi text-[8px]  lg:text-sm font-normal mt-2">
          Shop.co © 2000-2023, All Rights Reserved , deign by @ amit ck
        </p>
      </Container>
    </section>
  );
};

export default Footer;
