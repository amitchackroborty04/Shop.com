import React from 'react'
import Container from './Container'
import Card from './Card'
import Title from './Title'
import Flex from './Flex'
import producut from "../../public/images/product3.png"

const Top_selling = () => {
  return (
    <section className="mt-7 sm:mt-10 lg:mt-[72px] ">
    <Container>
      <Title title="top selling" />
      <div className="">
        <Flex className="justify-between mt-[55px] flex-wrap lg:flex-nowrap px-4 gap-y-7 ">
          <div className="w-[45%] lg:w-[23%] ">
            <Card
              Crd_title="T-SHIRT WITH TAPE DETAILS"
              img={producut}
              price="120"
            />
          </div>
          <div className="w-[45%] lg:w-[23%]">
            <Card
              Crd_title="T-SHIRT WITH TAPE DETAILS"
              img={producut}
              price="120"
            />
          </div>
          <div className="w-[45%] lg:w-[23%]">
            <Card
              Crd_title="T-SHIRT WITH TAPE DETAILS"
              img={producut}
              price="120"
            />
          </div>
          <div className="w-[45%] lg:w-[23%]">
            <Card
              Crd_title="T-SHIRT WITH TAPE DETAILS"
              img={producut}
              price="120"
            />
          </div>
        </Flex>
      </div>
      <div className="flex justify-center mt-9   border-b-[2px] border-[#0000001A] pb-10  lg:pb-[64px] ">
        <button className="py-2 lg:py-4 px-10 lg:px-[80px] border rounded-[62px] bg-[#0000001A] font-Satoshi font-medium text-sm lg:text-base leading-6 ">
          View All
        </button>
      </div>
    </Container>
  </section>
  )
}

export default Top_selling