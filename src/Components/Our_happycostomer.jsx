import React from "react";
import Container from "./Container";
import Costomrt_Review from "./Costomrt_Review";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Our_happycostomer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 684,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !top-[-30px] !right-[20px]  `}
        style={{
          ...style,
          display: "block",

          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "100px",
        }}
        onClick={onClick}
      >
        <FaLongArrowAltRight className="text-sm lg:text-xl text-black" />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !top-[-30px]  `}
        style={{
          ...style,
          display: "block",

          width: "64px",
          height: "64px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "0px",
          zIndex: "999",
        }}
        onClick={onClick}
      >
        <FaLongArrowAltLeft className=" text-sm lg:text-xl text-black" />
      </div>
    );
  }

  return (
    <section className="mt-[80px]">
      <Container>
        <h2 className="font-Integral text-[20px] sm:text-[35px] lg:text-[48px] font-bold text-[#000000]  uppercase mb-10 text-center lg:text-left">
          OUR HAPPY CUSTOMERS
        </h2>

        <Slider {...settings}>
          <div>
            <Costomrt_Review
              name="Sarah M."
              comment="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            />
          </div>
          <div>
            <Costomrt_Review
              name="Alex K."
              comment="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            />
          </div>
          <div>
            <Costomrt_Review
              name="Sarah M."
              comment="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            />
          </div>
          <div>
            <Costomrt_Review
              name="James L."
              comment="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            />
          </div>
          <div>
            <Costomrt_Review
              name="Sarah M."
              comment="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            />
          </div>
          <div>
            <Costomrt_Review
              name="James L."
              comment="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            />
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Our_happycostomer;
