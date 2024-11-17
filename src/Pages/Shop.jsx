import React, { useState } from "react";
import Container from "../Components/Container";
import Bredcam from "../Components/Bredcam";
import Flex from "../Components/Flex";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import Card from "../Components/Card";

const Shop = ({ title }) => {
  let [categoryshow, setCategortyshow] = useState(false);
  let handalecategory = () => {
    setCategortyshow(!categoryshow);
  };
  return (
    <section className="mb-7 px-4">
      <Container>
        <div className="mt-7">
          <Bredcam title={title} />
        </div>
        <Flex className="mt-6 justify-between ">
          <div className="w-[40%] lg:w-[22%] border-[1px] border-[#0000001A] px-2 lg:px-6 py-5 rounded-xl">
            <Flex className="justify-between items-center border-b-[1px] border-[#0000001A] pb-6">
              <h2 className="font-Satoshi text-base lg:text-xl font-bold leading-[27px]">
                Filters
              </h2>
              <span>
                <HiOutlineAdjustmentsVertical className="text-base lg:text-xl" />
              </span>
            </Flex>
            <Flex className=" justify-between items-center mt-6">
              <h2 className="font-Satoshi text-base font-bold leading-[27px]">
                Category
              </h2>
              <span>
                {categoryshow ? (
                  <FaAngleDown
                    onClick={handalecategory}
                    className="text-base lg:text-xl"
                  />
                ) : (
                  <FaAngleRight
                    onClick={handalecategory}
                    className="text-base lg:text-xl"
                  />
                )}
              </span>
            </Flex>
            {categoryshow && (
              <ul className=" cursor-pointer">
                <li className="font-Satoshi text-sm lg:text-base font-normal text-[#00000099] mt-4">
                  T-shirts
                </li>
                <li className="font-Satoshi text-sm lg:text-base font-normal text-[#00000099] mt-4">
                  Shorts
                </li>
                <li className="font-Satoshi text-sm lg:text-base font-normal text-[#00000099] mt-4">
                  Shirts
                </li>
                <li className="font-Satoshi text-sm lg:text-base font-normal text-[#00000099] mt-4">
                  Hoodie
                </li>
              </ul>
            )}
            <div className="mt-6 border-b-[1px] border-[#0000001A] pb-6">
              <h2 className="font-Satoshi text-base lg:text-xl font-bold leading-[27px]">
                Price
              </h2>
              <ul className=" cursor-pointer">
                <li className="font-Satoshi text-sm lg:text-base font-normal text-[#00000099] mt-4">
                  $100
                </li>
                <li className="font-Satoshi text-sm lg:text-base font-normal text-[#00000099] mt-4">
                  $200
                </li>
                <li className="font-Satoshi text-sm lg:text-base font-normal text-[#00000099] mt-4">
                  $250
                </li>
                <li className="font-Satoshi text-sm lg:text-base font-normal text-[#00000099] mt-4">
                  $100
                </li>
              </ul>
            </div>
            <div className="mt-6 border-b-[1px] border-[#0000001A] pb-6">
              <h2 className="font-Satoshi text-base lg:text-xl font-bold leading-[27px]">
                Colors
              </h2>
              <Flex className="justify-between mt-5 ">
                <div className="w-[20px] lg:w-[37px] h-[20px] lg:h-[37px] rounded-full bg-[#00C12B]"></div>
                <div className="w-[20px] lg:w-[37px] h-[20px] lg:h-[37px] rounded-full bg-[#d90f45]"></div>
                <div className="w-[20px] lg:w-[37px] h-[20px] lg:h-[37px] rounded-full bg-[#d8ed1a]"></div>
                <div className="w-[20px] lg:w-[37px] h-[20px] lg:h-[37px] rounded-full bg-[#19c8c8]"></div>
                <div className="w-[20px] lg:w-[37px] h-[20px] lg:h-[37px] rounded-full bg-[#79139b]"></div>
              </Flex>
              <Flex className="justify-between mt-5">
                <div className="w-[20px] lg:w-[37px] h-[20px] lg:h-[37px] rounded-full bg-[#2b0ebe]"></div>
                <div className="w-[20px] lg:w-[37px] h-[20px] lg:h-[37px] rounded-full bg-[#d90f45]"></div>
                <div className="w-[20px] lg:w-[37px] h-[20px] lg:h-[37px] rounded-full bg-[#9dc811]"></div>
                <div className="w-[20px] lg:w-[37px] h-[20px] lg:h-[37px] rounded-full bg-[#1b8c8c]"></div>
                <div className="w-[20px] lg:w-[37px] h-[20px] lg:h-[37px] rounded-full bg-[#9b790b]"></div>
              </Flex>
            </div>
            <div className="mt-6 border-b-[1px] border-[#0000001A] pb-6">
              <h2 className="font-Satoshi text-xl font-bold leading-[27px]">
                Dress Style
              </h2>
              <ul className=" cursor-pointer">
                <li className="font-Satoshi text-base font-normal text-[#00000099] mt-4">
                  Casual
                </li>
                <li className="font-Satoshi text-base font-normal text-[#00000099] mt-4">
                  Formal
                </li>
                <li className="font-Satoshi text-base font-normal text-[#00000099] mt-4">
                  Party
                </li>
                <li className="font-Satoshi text-base font-normal text-[#00000099] mt-4">
                  Gym
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[58%] lg:w-[75%]">
            <Flex className="justify-between items-center">
              <div>
                <h2 className="font-Satoshi text-xl lg:text-[32px] font-bold leading-[32px] text-[#000000]">
                  Casual
                </h2>
              </div>
              <div className="flex gap-1">
                <h4 className="font-Satoshi hidden lg:block text-sm lg:text-base font-normal text-[#00000099]">
                  Sort by:
                </h4>
                <select className=" outline-none cursor-pointer">
                  <option
                    className="font-Satoshi text-sm lg:text-base text-bold text-[#000000] "
                    value=""
                  >
                    Most Popular
                  </option>
                  <option
                    className="font-Satoshi text-sm lg:text-base text-bold text-[#000000] "
                    value=""
                  >
                    New Araival
                  </option>
                  <option
                    className="font-Satoshi text-sm lg:text-base text-bold text-[#000000] "
                    value=""
                  >
                    Most Like
                  </option>
                </select>
              </div>
            </Flex>
            {/*================= prodduct show st================= */}
            <Flex className="justify-between mt-4 flex-wrap lg:flex-nowrap gap-y-5">
              <div className="w-full md:w-[47%] lg:w-[32%]">
                <Card
                  Crd_title="T-SHIRT WITH TAPE DETAILS"
                  img="./public/images/product2.png"
                  price="120"
                />
              </div>
              <div className="w-full md:w-[47%] lg:w-[32%]">
                <Card
                  Crd_title="T-SHIRT WITH TAPE DETAILS"
                  img="./public/images/product2.png"
                  price="120"
                />
              </div>
              <div className="w-full md:w-[47%] lg:w-[32%]">
                <Card
                  Crd_title="T-SHIRT WITH TAPE DETAILS"
                  img="./public/images/product2.png"
                  price="120"
                />
              </div>
            </Flex>

            <Flex className="justify-between mt-4 flex-wrap lg:flex-nowrap gap-y-5">
              <div className="w-full md:w-[47%] lg:w-[32%]">
                <Card
                  Crd_title="T-SHIRT WITH TAPE DETAILS"
                  img="./public/images/product2.png"
                  price="120"
                />
              </div>
              <div className="w-full md:w-[47%] lg:w-[32%]">
                <Card
                  Crd_title="T-SHIRT WITH TAPE DETAILS"
                  img="./public/images/product2.png"
                  price="120"
                />
              </div>
              <div className="w-full md:w-[47%] lg:w-[32%]">
                <Card
                  Crd_title="T-SHIRT WITH TAPE DETAILS"
                  img="./public/images/product2.png"
                  price="120"
                />
              </div>
            </Flex>

            <Flex className="justify-between mt-4 flex-wrap lg:flex-nowrap gap-y-5">
              <div className="w-full md:w-[47%] lg:w-[32%]">
                <Card
                  Crd_title="T-SHIRT WITH TAPE DETAILS"
                  img="./public/images/product2.png"
                  price="120"
                />
              </div>
              <div className="w-full md:w-[47%] lg:w-[32%]">
                <Card
                  Crd_title="T-SHIRT WITH TAPE DETAILS"
                  img="./public/images/product2.png"
                  price="120"
                />
              </div>
              <div className="w-full md:w-[47%] lg:w-[32%]">
                <Card
                  Crd_title="T-SHIRT WITH TAPE DETAILS"
                  img="./public/images/product2.png"
                  price="120"
                />
              </div>
            </Flex>

            {/*================= prodduct show end================= */}
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
