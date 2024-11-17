import React from "react";
import Container from "../Components/Container";
import Bredcam from "../Components/Bredcam";

const Contact = ({title}) => {
  return (
    <section className="px-4 lg:px-0">
      <Container>
        <div className="mt-7">
          <Bredcam title={title} />
        </div>
        <div className="mt-[80px]">
          <input
            className="border-b-[1px] pb-4 w-full lg:w-[30%] border-[#8e8a8a] outline-none px-3"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mt-10">
          <input
            className="border-b-[1px] pb-4 w-full lg:w-[30%] border-[#8e8a8a] outline-none px-3"
            type="text"
            placeholder="Your email"
          />
        </div>
        <div className="mt-10">
          <textarea
            className="border-b-[1px] pb-4 w-full lg:w-[30%] border-[#8e8a8a] outline-none px-3"
            type="text"
            placeholder="Your message"
          />
        </div>
        <button className="font-Satoshi text-base font-bold py-4 w-full lg:w-[30%] border-[1px] border-[#8e8a8a] rounded-[62px] hover:bg-black hover:text-white duration-300 mt-12">
          Send
        </button>
      </Container>
    </section>
  );
};

export default Contact;
