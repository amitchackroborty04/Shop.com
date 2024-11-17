import React from "react";
import Container from "./Container";

import Flex from "./Flex";
import pro1 from "../../public/images/p1.png";
import pro2 from "../../public/images/p2.png";
import pro3 from "../../public/images/p3.png";
import pro4 from "../../public/images/p4.png";

const Dress_style = () => {
  return (
    <section className="px-4">
      <Container>
        <div className="bg-[#F0F0F0] px-5 lg:px-[64px] py-[40px] lg:py-[70px]  rounded-[40px] mt-[84px]">
          <h2 className="font-Integral text-[16px] sm:text-[35px] lg:text-[48px] font-bold text-[#000000] text-center uppercase">
            BROWSE BY dress STYLE
          </h2>

          <Flex className="gap-x-5 mt-5 lg:mt-[64px]">
            <div className="max-w-[40%] ">
              <img
                className="w-full object-fill "
                src={pro2}
                alt="p1"
              />
            </div>
            <div className="max-w-[60%]">
              <img
                className="w-full object-fill "
                src={pro3}
                alt="p1"
              />
            </div>
          </Flex>
          <Flex className="gap-x-5 mt-5">
            <div className="max-w-[60%] ">
              <img
                className="w-full object-fill "
                src={pro1}
                alt="p1"
              />
            </div>
            <div className="max-w-[40%]">
              <img
                className="w-full object-fill "
                src={pro4}
                alt="p1"
              />
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Dress_style;
