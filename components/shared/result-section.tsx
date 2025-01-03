"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ResultSection() {
  const [progress, setProgress] = React.useState(0);

  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 2,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    slidesToScroll: 1,
    afterChange: (current: number) => {
      setProgress(current);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-[180px] max-md:mt-[92px]">
      <div className="container mx-auto px-5">
        <h4 className="font-etude text-[60px] max-lg:text-[48px] max-md:text-[28px] leading-[100%] font-medium uppercase mb-[80px] max-md:mb-[32px]">
          Реальные результаты наших <br /> клиентов
        </h4>
      </div>

      <div className="slider-container container mx-auto">
        <Slider {...settings}>
          <div className="min-h-[410px] h-full bg-custom-gradient p-10 max-lg:p-4 max-lg:pt-8 rounded-[32px] backdrop-blur-sm border-[1.5px] border-[#e5e7eb33]">
            <div>
              <p className="font-etude font-medium text-[24px] max-lg:text-[14px] leading-[116%] uppercase mb-10 max-lg:mb-8">
                Проект А
              </p>

              <p className="text-grey max-lg:text-[12px] leading-[124%] uppercase mb-3 max-lg:mb-2">
                Задача
              </p>

              <h5 className="text-[40px] max-lg:text-[20px] mb-[100px] max-lg:mb-[56px]">
                Оптимизация бизнес-процессов в производственной компании
              </h5>
            </div>

            <div className="">
              <p className="text-grey max-lg:text-[12px] leading-[124%] uppercase mb-3 max-lg:mb-2">
                Решение
              </p>
              <p className="text-xl max-lg:text-base">
                Внедрение CRM и автоматизация учёта
              </p>

              <div className="flex max-lg:flex-col items-center justify-between gap-10 max-lg:gap-3 mt-8">
                <div className="border-t-[2px] border-white max-w-[358px] max-lg:max-w-full max-lg:w-full">
                  <p className="font-etude font-medium text-[22px] max-lg:text-[14px] leading-[116%] my-5 max-lg:my-3 uppercase">
                    Снижение издержек на 25% ↓
                  </p>
                </div>
                <div className="border-t-[2px] border-white max-w-[358px] max-lg:max-w-full max-lg:w-full">
                  <p className="font-etude font-medium text-[22px] max-lg:text-[14px] leading-[116%] my-5 max-lg:my-3 uppercase">
                    Рост выручки на 30% ↑
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-[410px] h-full bg-custom-gradient p-10 max-lg:p-4 max-lg:pt-8 rounded-[32px] backdrop-blur-sm border-[1.5px] border-[#e5e7eb33]">
            <div>
              <p className="font-etude font-medium text-[24px] max-lg:text-[14px] leading-[116%] uppercase mb-10 max-lg:mb-8">
                Проект B
              </p>

              <p className="text-grey max-lg:text-[12px] leading-[124%] uppercase mb-3 max-lg:mb-2">
                Задача
              </p>

              <h5 className="text-[40px] max-lg:text-[20px] mb-[100px] max-lg:mb-[56px]">
                Запуск нового сервиса в сфере логистики
              </h5>
            </div>

            <div>
              <p className="text-grey max-lg:text-[12px] leading-[124%] uppercase mb-3 max-lg:mb-2">
                Решение
              </p>
              <p className="text-xl max-lg:text-base">
                Создание MVP, привлечение инвестиций
              </p>

              <div className="flex max-lg:flex-col items-center justify-between gap-10 mt-8 max-lg:w-full">
                <div className="border-t-[2px] border-white max-lg:max-w-full max-lg:w-full">
                  <p className="font-etude font-medium text-[22px] max-lg:text-[14px] leading-[116%] my-5 max-lg:my-3 uppercase">
                    Успешный запуск с привлечением $1 млн инвестиций
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="container mx-auto px-5 hidden max-lg:flex items-center gap-2 justify-center mt-7">
        <div
          className={`w-[8px] h-[8px] rounded-full transition-all duration-500 ${
            progress === 0 ? "bg-primary" : "bg-grey"
          }`}
        ></div>
        <div
          className={`w-[8px] h-[8px] rounded-full transition-all duration-500 ${
            progress === 1 ? "bg-primary" : "bg-grey"
          }`}
        ></div>
      </div>
    </section>
  );
}
