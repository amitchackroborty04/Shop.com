import React from "react";
import Container from "../Components/Container";

const Login = () => {
  return (
    <section className="px-4">
      <Container>
        <h2 className="font-Satoshi text-xl lg:text-[32px] font-bold text-black mt-10 text-center">
          Singn In
        </h2>
        <div className="w-full lg:w-[40%] mt-[80px]">
          <input
            className="w-full border-b-[1px] border-[#787474] pb-4  pl-4 outline-none"
            type="text"
            placeholder="Enter your adress"
          />
        </div>
        <div className="w-full lg:w-[40%] mt-10">
          <input
            className="w-full border-b-[1px] border-[#787474] pb-4  pl-4 outline-none"
            type="password"
            placeholder="Enter your adress"
          />
        </div>
        <button className="font-Satoshi text-xl font-bold py-3 lg:py-4 w-full lg:w-[40%] border-[1px] border-[#000000] mt-10 rounded-[62px] hover:bg-black hover:text-white duration-300">Login</button>
      </Container>
    </section>
  );
};

export default Login;
