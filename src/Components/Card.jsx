import React from "react";
import { IoIosStarOutline } from "react-icons/io";

const Card = ({ Crd_title, price, img }) => {
  return (
    <div className="w-full">
      <div>
        <img className="w-full object-cover" src={img} alt="product1" />
        <h2 className="font-Satoshi font-bold text-sm lg:text-xl leading-[27px] uppercase mt-4">
          {Crd_title}
        </h2>
        <div className="flex gap-2 items-center mt-2">
          <IoIosStarOutline  className="text-base lg:text-xl"/>
          <IoIosStarOutline  className="text-base lg:text-xl"/>
          <IoIosStarOutline  className="text-base lg:text-xl"/>
          <IoIosStarOutline  className="text-base lg:text-xl"/>
          <IoIosStarOutline  className="text-base lg:text-xl"/>
          <h4 className="text-sm lg:text-base">5/5</h4>
        </div>
        <h4 className="font-Satoshi font-bold text-base lg:text-[24px] leading-[32px] mt-2 ">
          ${price}
        </h4>
      </div>
    </div>
  );
};

export default Card;
