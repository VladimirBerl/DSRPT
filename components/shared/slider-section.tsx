"use client";

import React from "react";
import Slider from "react-slick";

// Подключение стилей для slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "@/components/ui/SliderItem";

export default function SliderSection() {
  const settings = {
    // dots: true, // Показывать точки
    // infinite: true, // Зациклить слайдер
    speed: 500, // Скорость перехода
    slidesToShow: 1, // Показывать 1 слайд за раз
    slidesToScroll: 1, // Прокручивать 1 слайд за раз
    vertical: true, // Включаем вертикальную прокрутку
    verticalSwiping: true, // Включаем поддержку вертикального свайпа
    arrows: true, // Выключаем стрелки
    // autoplay: true, // Включаем автопрокрутку
    // autoplaySpeed: 3000, // Время между слайдами
  };

  const items = [
    { title: "Экспертное менторство на всех этапах", subtitle: "Вы получите" },
    { title: "Идея и концепция", subtitle: "Программа" },
    { title: "Подать заявку в акселератор" },
  ];

  return (
    <section className="mb-[180px] max-xl:mb-[92px] relative h-[836px]">
      <Slider {...settings}>
        {items.map((item, index) => (
          <SliderItem key={index} title={item.title} subtitle={item.subtitle} />
        ))}
      </Slider>
    </section>
  );
}
