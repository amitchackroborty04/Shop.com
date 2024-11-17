import React from "react";
import Container from "../Components/Container";
import Flex from "../Components/Flex";

const Sign_in = () => {
  return (
    <section className=" px-4">
      <Container>
        <h2 className="font-Satoshi text-xl lg:text-[32px] font-bold text-black mt-10 text-center">
          Singn Up
        </h2>
        <Flex className=" justify-between flex-wrap lg:flex-nowrap gap-y-1 mt-10">
          <div className="w-full lg:w-[45%]">
            <div>
              <input
                className="w-full border-b-[1px] border-[#787474] pb-4  pl-4 outline-none"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mt-10">
              <input
                className="w-full border-b-[1px] border-[#787474] pb-4  pl-4 outline-none"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-10">
              <input
                className="w-full border-b-[1px] border-[#787474] pb-4  pl-4 outline-none"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="w-full lg:w-[45%]">
            <div className="mt-10 lg:mt-0">
              <input
                className="w-full border-b-[1px] border-[#787474] pb-4  pl-4 outline-none"
                type="text"
                placeholder="Enter your adress"
              />
            </div>
            <div className="mt-10">
              <input
                className="w-full border-b-[1px] border-[#787474] pb-4  pl-4 outline-none"
                type="text"
                placeholder="Enter your phon no"
              />
            </div>

            <div className="mt-10">
              <button className="w-full py-3 lg:py-4 border-[1px] border-[#787474] rounded-[62px] text-base lg:text-xl font-Satoshi font-bold hover:bg-black hover:text-white duration-300">
                Submit
              </button>
              <h4 className="font-Satoshi text-base font-normal text-black mt-7 text-center lg:text-right cursor-pointer">
                Do you have an account ?{" "}
                <span className="font-bold text-[#ad2323] hover:underline">
                  Login
                </span>
              </h4>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Sign_in;
