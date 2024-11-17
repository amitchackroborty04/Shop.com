import React from "react";
import Container from "../Components/Container";
import Bredcam from "../Components/Bredcam";
import Flex from "../Components/Flex";

const About = ({ title }) => {
  return (
    <section className="px-4 lg:px-0">
      <Container>
        <div className="mt-7">
          <Bredcam title={title} />
        </div>

        <h1 className="mt-[80px] font-Satoshi text-2xl font-medium text-[#000000] text-center lg:text-left">
          Shop.com is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </h1>
        <Flex className="justify-between mt-10 flex-wrap lg:flex-nowrap gap-y-5">
          <div className="w-full lg:w-[32%] border-[1px] border-[#767676] p-4 rounded-xl shadow-lg">
            <h4 className="font-Satoshi text-xl lg:text-[25px] font-bold text-[#262626]">
              Our Vision
            </h4>
            <p className="font-Satoshi text-sm lg:text-base font-normal mt-3 text-[#767676]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="w-full lg:w-[32%] border-[1px] border-[#767676] p-4 rounded-xl shadow-lg">
            <h4 className="font-Satoshi text-xl lg:text-[25px] font-bold text-[#262626]">
            Our Story
            </h4>
            <p className="font-Satoshi text-sm lg:text-base font-normal mt-3 text-[#767676]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="w-full lg:w-[32%] border-[1px] border-[#767676] p-4 rounded-xl shadow-lg">
            <h4 className="font-Satoshi text-xl lg:text-[25px] font-bold text-[#262626]">
            Our Brands
            </h4>
            <p className="font-Satoshi text-sm lg:text-base font-normal mt-3 text-[#767676]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
