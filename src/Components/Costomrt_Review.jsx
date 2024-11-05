import React from "react";
import Flex from "./Flex";
import { IoIosStar } from "react-icons/io";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Costomrt_Review = ({ name, comment }) => {
  return (
    <div className="px-4">
      <div className="px-[32px] border w-full lg:w-[400px]  shadow-xl py-[28px] rounded-[20px] ">
        <Flex className="gap-x-2">
          <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
          <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
          <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
          <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
          <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
        </Flex>
        <Flex className="items-center gap-x-1 mt-5">
          <h4 className="font-Satoshi text-base lg:text-xl  ">{name}</h4>
          <RiCheckboxCircleFill className="text-green-500 " />
        </Flex>
        <p className="lg:w-[336px] font-Satoshi text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-1 lg:mt-3">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Costomrt_Review;
