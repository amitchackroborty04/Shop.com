import React from "react";
import Bredcam from "../Components/Bredcam";
import Container from "../Components/Container";
import Flex from "../Components/Flex";
import { IoIosStar } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import All_Reveiws from "../Components/All_Reveiws";
import Card from "../Components/Card";
import Title from "../Components/Title";

const Product_detail = ({ title }) => {
  return (
    <section className="px-4 mb-7">
      <Container>
        <div className="mt-7">
          <Bredcam title={title} />
        </div>
        <Flex className="flex-wrap lg:flex-nowrap gap-y-4 mt-[36px]">
          <div className="w-full lg:w-[50%]">
            <Flex className="justify-between">
              <div className="max-w-[24%]">
                <div>
                  <img src="./public/images/s1.png" alt="s1" />
                </div>
                <div className="mt-[14px]">
                  <img src="./public/images/s2.png" alt="s2" />
                </div>
                <div className="mt-[14px]">
                  <img src="./public/images/s3.png" alt="s3" />
                </div>
              </div>
              <div className="max-w-[70%]">
                <img src="./public/images/pb1.png" alt="pb1" />
              </div>
            </Flex>
          </div>
          <div className="w-full lg:w-[50%] pl-10">
            <h1 className=" font-Integral text-[25px] lg:text-[40px] font-bold text-[#000000] leading-[48px]">
              One Life Graphic T-shirt
            </h1>
            {/* Reveiw part pore npm use hobe akhon just design  */}
            <div className="flex gap-5 mt-2">
              <Flex className="gap-x-2">
                <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
                <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
                <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
                <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
                <IoIosStar className=" text-yellow-500 text-xl lg:text-2xl" />
              </Flex>
              <h5>5</h5>
            </div>
            {/* ====================end================== */}
            <div className="flex gap-3 mt-3">
              <h4 className="font-Satoshi text-xl lg:text-[32px] font-bold leading-10">
                $260
              </h4>
              <del className="font-Satoshi text-xl  lg:text-[32px] font-bold leading-10 text-[#0000004D]">
                $260
              </del>
            </div>
            <p className="font-Satoshi text-base font-normal leading-5 text-[#00000099] mt-5 border-b-[1px] border-[#00000099] pb-6">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
            <h6 className="font-Satoshi text-base font-normal leading-5 text-[#00000099] mt-6">
              Select Colors
            </h6>
            <Flex className="gap-x-4 mt-4">
              <div className="w-[37px] h-[37px] rounded-full bg-[#314F4A]"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#31344F]"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#bf258e]"></div>
            </Flex>
            <h6 className="font-Satoshi text-base font-normal leading-5 text-[#00000099] mt-6">
              Choose Size
            </h6>
            <div className="flex gap-x-3 flex-wrap gap-y-3 mt-4 border-b-[1px] border-[#00000099] pb-6 ">
              <div>
                <h2 className="font-Satoshi text-sm lg:text-base font-normal py-3 px-4 lg:px-6 rounded-[62px] inline-block bg-[#F0F0F0]">
                  Small
                </h2>
              </div>
              <div>
                <h2 className="font-Satoshi text-sm lg:text-base font-normal py-3 px-4 lg:px-6 rounded-[62px] inline-block bg-[#F0F0F0]">
                  Medium
                </h2>
              </div>
              <div>
                <h2 className="font-Satoshi text-sm lg:text-base font-normal py-3 px-4 lg:px-6 rounded-[62px] inline-block bg-[#F0F0F0]">
                  Large
                </h2>
              </div>
              <div>
                <h2 className="font-Satoshi text-sm lg:text-base font-normal py-3 px-4 lg:px-6 rounded-[62px] inline-block bg-[#F0F0F0]">
                  X-Large
                </h2>
              </div>
            </div>
            <Flex className="justify-between mt-6  ">
              <div className="w-[25%]">
                <Flex className=" items-center w-[120px] lg:w-[170px] justify-between rounded-[62px] bg-[#F0F0F0] py-3 px-4 cursor-pointer ">
                  <span>
                    <FiMinus />
                  </span>
                  <div>
                    <h6>1</h6>
                  </div>
                  <span>
                    <FaPlus />
                  </span>
                </Flex>
              </div>
              <div className="w-[45%] md:w-[65%]">
                <button className="font-Satoshi text-base font-medium w-full py-3 bg-[#F0F0F0] rounded-[62px] hover:bg-black hover:text-white duration-300 ">
                  Add to Cart
                </button>
              </div>
            </Flex>
          </div>
        </Flex>
        <All_Reveiws />
        <Title title="You might also like" />

        <Flex className="justify-between mt-[55px] flex-wrap lg:flex-nowrap px-4 gap-y-7 ">
          <div className="w-[45%] lg:w-[23%] ">
            <Card
              Crd_title="T-SHIRT WITH TAPE DETAILS"
              img="./public/images/product1.png"
              price="120"
            />
          </div>
          <div className="w-[45%] lg:w-[23%]">
            <Card
              Crd_title="T-SHIRT WITH TAPE DETAILS"
              img="./public/images/product2.png"
              price="120"
            />
          </div>
          <div className="w-[45%] lg:w-[23%]">
            <Card
              Crd_title="T-SHIRT WITH TAPE DETAILS"
              img="./public/images/product1.png"
              price="120"
            />
          </div>
          <div className="w-[45%] lg:w-[23%]">
            <Card
              Crd_title="T-SHIRT WITH TAPE DETAILS"
              img="./public/images/product2.png"
              price="120"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Product_detail;
