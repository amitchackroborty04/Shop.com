import React from "react";
import Flex from "./Flex";
import { IoIosStar } from "react-icons/io";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const ReviewItem = () => {
  return (
    <div className="border py-[28px] px-[32px] shadow-sm rounded-xl">
      <Flex className="justify-between">
        <Flex className="gap-x-2">
          <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
          <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
          <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
          <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
          <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
        </Flex>
        <span>
          <HiOutlineDotsHorizontal className="text-2xl"/>
        </span>
      </Flex>
      <Flex className="items-center gap-x-1 mt-3">
        <h4 className="font-Satoshi text-base lg:text-xl  ">Samantha D.</h4>
        <RiCheckboxCircleFill className="text-green-500 " />
      </Flex>
      <p className=" font-Satoshi text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-1 lg:mt-3">
        "I absolutely love this t-shirt! The design is unique and the fabric
        feels so comfortable. As a fellow designer, I appreciate the attention
        to detail. It's become my favorite go-to shirt."
      </p>
      <p className=" font-Satoshi text-sm lg:text-base font-normal leading-5 text-[#00000099] mt-1 lg:mt-3">Posted on August 16, 2023</p>
    </div>
  );
};

export default ReviewItem;
