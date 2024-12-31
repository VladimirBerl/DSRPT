"use client";

import { CountUp } from "countup.js"; // Импорт CountUp
import Image from "next/image";
import React from "react";

export default function StatisticsSection() {
  const [text, setText] = React.useState("Реализованных проектов");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const textRef = React.useRef<HTMLHeadingElement | null>(null);

  const numbers = React.useMemo(
    () => [
      { number: 25, label: "Реализованных проектов" },
      { number: 7, label: "Отраслей: большой опыт работы" },
      { number: 300, label: "Коэффициент возврата инвестиций" },
    ],
    []
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % numbers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [numbers.length]);

  React.useEffect(() => {
    const targetNumber = numbers[currentIndex].number;
    const targetText = numbers[currentIndex].label;
    setText(targetText);

    // Запуск анимации числа
    if (textRef.current) {
      const countUp = new CountUp(textRef.current, targetNumber, {
        startVal: 0,
        duration: 2,
        formattingFn: (n) => `${n}+`,
      });
      countUp.start();
    }
  }, [currentIndex, numbers]);

  return (
    <section className="flex items-center justify-between mb-[180px] max-xl:mb-[92px] max-xl:flex-col gap-10">
      <Image
        className="animate-swaying"
        src="/figure-statistics.svg"
        width={320}
        height={300}
        alt="figure-statistics"
      />
      <div className="max-xl:w-full">
        <h5
          ref={textRef}
          className="font-etude w-[710px] max-xl:w-full max-xl:text-left font-medium text-[230px] max-xl:text-[180px] max-md:text-[80px] leading-[100%] text-primary"
        >
          0+
        </h5>
        <p className="absolute max-w-[658px] font-etude uppercase text-[40px] max-xl:text-xl leading-[44px]">
          {text}
        </p>
      </div>
    </section>
  );
}
