import OfferCard from "@/components/ui/OfferCard";

export default function OfferSection() {
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

  return (
    <section className="mb-[180px] max-xl:mb-[92px]">
      <h4 className="font-etude text-[40px] max-md:text-[24px] leading-[100%] mb-24 max-md:mb-[32px] font-medium uppercase">
        Что мы можем <br /> для вас сделать
      </h4>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:grid-rows-3 h-[554px] max-lg:h-auto gap-7">
        {cards.map((card, index) => (
          <OfferCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
}
