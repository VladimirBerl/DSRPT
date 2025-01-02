"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OfferCard from "@/components/ui/OfferCard";

// Регистрируем ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function OfferSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const cards = [
    {
      title: "Разработка стартапов",
      elements: [
        "Анализ идей и формирование стратегии",
        "Создание MVP для тестирования на рынке",
        "Привлечение инвестиций",
      ],
      images: "/offer-element-one.png",
    },
    {
      title: "Развитие существующего бизнеса",
      elements: [
        "Оптимизация и цифровизация бизнес-процессов",
        "Внедрение современных подходов (data-driven, agile)",
        "Увеличение прибыли через новые модели",
      ],
      images: "/offer-element-two.png",
    },
    {
      title: "Цифровая трансформация бизнеса",
      elements: [
        "Полный переход на цифровую модель",
        "Автоматизация процессов",
        "Внедрение метрик KPI, OKR для контроля и роста",
      ],
      images: "/offer-element-tree.png",
    },
  ];

  useEffect(() => {
    const cardElements = document.querySelectorAll(".offer-card");

    // Создаем timeline для управления обеими анимациями
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Начало анимации, когда верх секции достигает 80% экрана
        end: "center center", // Конец анимации, когда секция уходит из поля зрения
        scrub: 1, // Плавная анимация с прокруткой
        markers: false, // Отключаем маркеры для отладки
        once: false, // Анимации должны повторяться при повторном входе в секцию
        onEnter: () => {
          // Сброс состояния при входе в секцию
          gsap.set(cardElements, { opacity: 0.5, x: 2000 });
        },
        onLeaveBack: () => {
          // Сброс состояния при выходе из секции и возвращении обратно
          gsap.set(cardElements, { opacity: 0.5, x: 2000 });
        },
        onEnterBack: () => {
          // Перезапуск анимации при возвращении в секцию
          gsap.set(cardElements, { opacity: 0.5, x: 2000 });
          ScrollTrigger.refresh();
        },
      },
    });

    // Анимация появления карточек (слева направо)
    tl.fromTo(
      cardElements,
      {
        opacity: 0.5,
        x: 2000, // Начальная позиция
      },
      {
        opacity: 1,
        x: 0, // Финальная позиция
        stagger: 0.1, // Задержка между анимациями
        duration: 1, // Продолжительность появления
      }
    );

    // Анимация исчезновения карточек (справа налево)
    tl.to(
      cardElements,
      {
        opacity: 0.5,
        x: -2000, // Исчезновение карточек
        stagger: 0.2, // Задержка между анимациями
        duration: 0.5, // Продолжительность исчезновения
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom center", // Начало исчезновения, когда секция выходит из центра экрана
          end: "bottom top", // Конец анимации, когда секция полностью выходит из поля зрения
          scrub: 1, // Плавная анимация с прокруткой
          markers: false, // Отключаем маркеры для отладки
          once: false, // Анимация должна повторяться при возвращении в секцию
          onEnterBack: () => {
            // Сброс при входе назад
            gsap.set(cardElements, { opacity: 0.5, x: 2000 });
            ScrollTrigger.refresh();
          },
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="mb-[180px] max-xl:mb-[92px]">
      <h4 className="font-etude text-[40px] max-md:text-[24px] leading-[100%] mb-24 max-md:mb-[32px] font-medium uppercase">
        Что мы можем для вас сделать
      </h4>

      <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:grid-rows-3 h-[554px] max-lg:h-auto gap-7">
        {cards.map((card, index) => (
          <OfferCard key={index} card={card} className="offer-card" />
        ))}
      </div>
    </section>
  );
}
