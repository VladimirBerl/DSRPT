"use client";

import React from "react";
import Slider from "react-slick";

// Подключение стилей для slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "@/components/ui/SliderItem";
import Image from "next/image";

export default function SliderSection() {
  const settings = {
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };

  const items = [
    { title: "Экспертное менторство на всех этапах", subtitle: "Вы получите" },
    { title: "Идея и концепция", subtitle: "Программа" },
    { title: "Подать заявку в акселератор" },
  ];

  return (
    <section className="relative mb-[180px] max-xl:mb-[92px] h-[836px] max-md:h-[400px]">
      <Slider {...settings}>
        {items.map((item, index) => (
          <SliderItem key={index} title={item.title} subtitle={item.subtitle} />
        ))}
      </Slider>
      <Image className="absolute z-[-1] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/circle-slider.png" alt="slider" width={836} height={836} />
    </section>
  );
}
