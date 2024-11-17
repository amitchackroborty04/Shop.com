import React from "react";
import Container from "./Container";

import Flex from "./Flex";

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
                src="../public/images/p2.png"
                alt="p1"
              />
            </div>
            <div className="max-w-[60%]">
              <img
                className="w-full object-fill "
                src="../public/images/p3.png"
                alt="p1"
              />
            </div>
          </Flex>
          <Flex className="gap-x-5 mt-5">
            <div className="max-w-[60%] ">
              <img
                className="w-full object-fill "
                src="./public/images/p1.png"
                alt="p1"
              />
            </div>
            <div className="max-w-[40%]">
              <img
                className="w-full object-fill "
                src="./public/images/p4.png"
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
