import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { IoIosSearch } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  let [menu, setMenu] = useState(false);

  let handlemenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="px-3 lg:px-0">
      <Container>
        <Flex className=" justify-between items-center mt-6">
          <div className="w-[20%]">
            <img src="../public/images/logo.png" alt="logo" />
          </div>
          <div className=" w-[38%] relative">
            <input
              className="w-full text-[10px] sm:text-sm lg:text-base pl-7  lg:pl-[52px] py-2 lg:py-3 font-Satoshi bg-[#F0F0F0] rounded-[62px] outline-none"
              type="text"
              placeholder="Search for products..."
            />
            <span className=" absolute left-2  lg:left-4 translate-y-[-50%] top-[50%]">
              <IoIosSearch className="text-xl lg:text-2xl" />
            </span>
          </div>
          <div className=" lg:w-[28%] ">
            <ul
              className={`w-full flex flex-col lg:flex-row gap-x-10 lg:static absolute top-0 
           ${
             menu ? "left-[30%]" : " left-[-100%]"
           } bg-white z-50 lg:bg-transparent  h-screen lg:h-auto py-10 lg:py-0 px-7 lg:px-0 gap-y-7 duration-500  !fixed lg:!static `}
            >
              <li className="font-Satoshi text-base font-normal text-[#000000] cursor-pointer">
                Home
              </li>
              <li className="font-Satoshi text-base font-normal text-[#000000] cursor-pointer">
                Shop
              </li>
              <li className="font-Satoshi text-base font-normal text-[#000000] cursor-pointer">
                About
              </li>
              <li className="font-Satoshi text-base font-normal text-[#000000] cursor-pointer">
                Contact
              </li>
              {menu &&
              <span onClick={handlemenu} className=" absolute top-3 left-2">
                <RxCross2  className="text-xl text-red-500"/>
              </span>
              }
            </ul>
          </div>

          <div className="w-[10%]">
            <Flex className="gap-3">
              <span>
                <IoCart className="text-xl lg:text-2xl" />
              </span>
              <span>
                <FaRegUserCircle className="text-xl lg:text-2xl" />
              </span>
            </Flex>
          </div>

          <span onClick={handlemenu} className=" block lg:hidden">
            <FiMenu className="text-2xl" />
          </span>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
