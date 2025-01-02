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

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const imageArray = new Array(8).fill("/polygon.svg");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const numbers = [
    { number: 7, label: "Отраслей: большой опыт работы" },
    { number: 25, label: "Реализованных проектов" },
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
    if (humberRef.current) {
      gsap.to(humberRef.current, {
        scrollTrigger: {
          trigger: humberRef.current,
          start: "top 60%",
          end: "bottom top",
          once: true,
          onEnter: () => {
            runCountUpAnimation(numbers[currentIndex].number);
          },
        },
      });
    }
  }, [currentIndex, numbers]);

  React.useEffect(() => {
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: "bottom top",
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.floor(progress * numbers.length);
            setCurrentIndex(index === 3 ? 2 : index);
          },
        },
      });
    }
  }, [numbers.length]);

  React.useEffect(() => {
    const images = document.querySelectorAll(".image-stack img");
    gsap.to(images, {
      yPercent: (index: number) => {
        return index * 10;
      },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress; // Получаем прогресс анимации
          const offset = progress * 10; // Отступ меняется в зависимости от прогресса
          gsap.to(images, {
            y: (index) => index * 10 + offset, // Увеличиваем отступы между изображениями
          });
        },
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-between mb-[180px] max-xl:mb-[92px] max-xl:flex-col max-xl:justify-center max-xl:h-screen gap-10"
    >
      <div className="image-stack absolute max-xl:relative top-0 left-0 w-full min-h-[300px]">
        {imageArray.map((src, index) => (
          <Image
            key={index}
            className="absolute top-0 left-0 max-xl:w-[250px] max-xl:h-[120px]"
            src={src}
            alt="polygon"
            width={320}
            height={170}
            style={{
              top: `${index * 2}%`,
              zIndex: index,
            }}
          />
        ))}
      </div>

      <div className="max-xl:w-full text-left ml-auto">
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
