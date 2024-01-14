"use client";
import React from "react";
import Slider from "react-slick";
import sliderImgTwo from "../public/assets/images/slider/sliderImgTwo.webp";
import sliderImgThree from "../public/assets/images/slider/sliderImgThree.webp";
import sliderImgFour from "../public/assets/images/slider/sliderImgFour.webp";
import sliderImgFive from "../public/assets/images/slider/sliderImgFive.webp";
import bannerImg from "../public/assets/images/slider/bannerImg.webp";

import Image from "next/image";
import BannerText from "./BannerText";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute bottom-12 left-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-blue hover:border-transparent hover:text-white cursor-pointer duration-300 z-10"
    >
      <BsArrowLeft />
    </div>
  );
}
function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute bottom-12 right-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-blue hover:border-transparent hover:text-white cursor-pointer duration-300 z-10"
    >
      <BsArrowRight />
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full bg-white px-4 py-6 flex gap-4 border-b-[1px]">
      <div className="w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative">
        <Slider {...settings}>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rouned-lg"
              src={sliderImgTwo}
              alt="sliderImgOne"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-0 flex flex-col gap-3 text-white m-4"
              title="Spring fashion in bloom"
              description="New trends &styles to turn heads anytime, on any budget."
              btnText="Shop now"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rouned-lg"
              src={sliderImgThree}
              alt="sliderImgOne"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-0 flex flex-col gap-3 text-blue m-4"
              title="You can save $1,300+ a year!"
              description="Start saving with free delivery"
              btnText="Try free"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rouned-lg"
              src={sliderImgFour}
              alt="sliderImgOne"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-0 flex flex-col gap-3 text-black m-4"
              title="Up to 65% off"
              description="New savings every week! Hurry to score low, low prices"
              btnText="Shop now"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rouned-lg"
              src={sliderImgFive}
              alt="sliderImgOne"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-0 flex flex-col gap-3 text-black m-4"
              title="Spring fashion in bloom"
              description="New trends & styles to turn heads anytime, on any budget."
              btnText="Shop now"
            />
          </div>
        </Slider>
      </div>
      <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-black">
            Flash Pick of the day
          </h2>
        </div>
        <Image className="h-60 object-cover" src={bannerImg} alt="flashsale" />
        <p className="text-lg text-black font-semibold">From $199.90</p>
        <p className="text-base text-gray-500 -mt-1">
          Homepro TV Stand Cabinet for Living Room...
        </p>
      </div>
    </div>
  );
};

export default Banner;
