import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Flex from "./Flex";

const Bredcam = ({ title }) => {
  return (
    <div className="mt-6">
      <Flex className=" items-center">
        <ul>
          <li className="text-base font-normal">Home</li>
        </ul>
        <span>
          <FaAngleRight className="text-normal  text-xl" />
        </span>

        <ul>
          <li className="text-base font-normal">{title}</li>
        </ul>
      </Flex>
    </div>
  );
};

export default Bredcam;
