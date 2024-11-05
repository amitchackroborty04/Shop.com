import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const StayUpdate = () => {
  return (
    <section className="mt-[80px] px-4">
      <Container>
        <Flex className=" flex-col lg:flex-row justify-between bg-black rounded-xl py-[36px] px-[64px] gap-y-3">
          <div className="">
            <h1 className="font-Integral text-base lg:text-[40px] font-bold text-white leading-7 lg:leading-[42px] w-full lg:w-[551px] ">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
          </div>
          <div className="">
            <input
              className="py-3 w-full pl-4 lg:pl-[50px]   rounded-[62px] outline-none "
              type="text"
              name=""
              id=""
              placeholder="Enter your email address"
            />
            <div>
              <button className="py-3 w-full px-5 lg:px-[88px] rounded-[62px] bg-white mt-3 font-Satoshi text-sm lg:text-base leading-5 text-[#000000]">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default StayUpdate;
