"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "@/components/ui/SliderItem";
import Image from "next/image";

const SliderSection = () => {
  const [progress, setProgress] = useState(33);

  const items = [
    { title: "Экспертное менторство на всех этапах", subtitle: "Вы получите" },
    { title: "Идея и концепция", subtitle: "Программа" },
    { title: "Подать заявку в акселератор" },
  ];

  const settings = {
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    afterChange: (current: number) => {
      setProgress(((current + 1) / items.length) * 100);
    },
  };

  return (
    <section className="relative mb-[180px] max-xl:mb-[92px] h-[836px] max-md:h-[400px]">
      <Slider {...settings}>
        {items.map((item, index) => (
          <SliderItem key={index} title={item.title} subtitle={item.subtitle} />
        ))}
      </Slider>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-[200px] bg-grey rounded-full">
        <div
          className="w-full bg-white rounded-full transition-all"
          style={{ height: `${progress}%` }}
        ></div>
      </div>
      <Image
        className="absolute z-[-1] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        src="/circle-slider.png"
        alt="slider"
        width={836}
        height={836}
      />
    </section>
  );
};

export default SliderSection;
