"use client";

import { CountUp } from "countup.js";
import Image from "next/image";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Регистрируем ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function StatisticsSection() {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const humberRef = React.useRef<HTMLHeadingElement | null>(null);

  const [currentIndex, setCurrentIndex] = React.useState(0); // Индекс текущего массива

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const numbers = [
    { number: 25, label: "Реализованных проектов" },
    { number: 7, label: "Отраслей: большой опыт работы" },
    { number: 300, label: "Коэффициент возврата инвестиций" },
  ];

  const runCountUpAnimation = (targetNumber: number) => {
    if (humberRef.current) {
      const countUp = new CountUp(humberRef.current, targetNumber, {
        startVal: 0,
        duration: 2,
        formattingFn: (n) => `${n}+`,
      });
      countUp.start();
    }
  };

  React.useEffect(() => {
    // Запускаем анимацию при появлении блока в поле зрения
    if (humberRef.current) {
      gsap.to(humberRef.current, {
        scrollTrigger: {
          trigger: humberRef.current,
          start: "top 80%", // Анимация запускается, когда верх блока окажется на 80% от экрана
          end: "bottom top", // Анимация завершается, когда блок покидает экран
          once: true, // Анимация запускается только один раз
          onEnter: () => {
            // Когда блок появляется в поле зрения
            runCountUpAnimation(numbers[currentIndex].number);
          },
        },
      });
    }
  }, [currentIndex, numbers]);

  React.useEffect(() => {
    // GSAP ScrollTrigger для фиксации блока при прокрутке
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center", // Начало анимации, когда верх блока достигнет центра экрана
          end: "bottom top",   // Когда блок полностью уйдет
          pin: true,           // Фиксируем блок на экране
          scrub: true,         // Сделать анимацию плавной с прокруткой
          // markers: true,       // Показывать маркеры для отладки
          onUpdate: (self) => {
            // self.progress возвращает значение от 0 до 1
            const progress = self.progress; // Получаем прогресс анимации (от 0 до 1)
            const index = Math.floor(progress * numbers.length); // Вычисляем индекс в зависимости от прогресса
            setCurrentIndex(index % numbers.length); // Обновляем индекс с учетом модуля
          },
        },
      });
    }
  }, [numbers.length]);

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-between mb-[180px] max-xl:mb-[92px] max-xl:flex-col gap-10"
    >
      <div className="max-xl:w-full">
        <Image
          src="/figure-statistics.svg"
          alt="polygon"
          width={300}
          height={300}
        />
      </div>

      <div className="max-xl:w-full text-center">
        <h5
          ref={humberRef}
          className="font-etude w-[710px] max-xl:w-full max-xl:text-left font-medium text-[230px] max-xl:text-[180px] max-md:text-[80px] leading-[100%] text-primary"
        >
          0+
        </h5>
        <p className="max-w-[658px] font-medium font-etude uppercase text-[40px] max-xl:text-xl max-xl:text-left leading-[44px]">
          {numbers[currentIndex].label}
        </p>
      </div>
    </section>
  );
}
