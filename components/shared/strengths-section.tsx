import CastomLink from "@/components/ui/CastomLink";
import TelegramIcon from "@/public/telegram.svg";

export default function StrengthsSection() {
  return (
    <section className="mt-[180px] max-md:mt-[92px]">
      <div>
        <h4 className="font-etude text-[60px] max-lg:text-[48px] max-md:text-[28px] leading-[100%] font-medium uppercase mb-[80px] max-md:mb-[32px]">
          Наши ключевые <br /> сильные стороны
        </h4>
        <div className="max-w-[404px] max-md:max-w-full">
          <p className="text-grey text-xl max-md:max-w-[320px] max-md:text-[16px] leading-[140%] mb-[40px] max-md:mb-[20px]">
            Мы помогаем бизнесу расти, используя современные подходы
          </p>
          <CastomLink
            className="max-md:w-full"
            href="/"
            icon={<TelegramIcon />}
          >
            Получить консультацию
          </CastomLink>
        </div>
      </div>

      <div className="flex-col mt-[-80px] max-lg:mt-[80px] max-md:mt-[32px]">
        <div className="w-1/2 max-lg:w-full ml-auto rounded-[24px] overflow-hidden bg-white/5 backdrop-blur-sm mb-10 border-[1.5px] border-[#e5e7eb33]">
          <div className="flex max-[320px]:flex-col max-[320px]:items-start items-center gap-6 backdrop-blur-sm p-[32px] pb-[40px] max-md:px-[16px] max-md:py-[24px]">
            <div className="flex items-center gap-2 py-[9px] px-[7.5px] max-w-[48px]">
              <p className="text-grey ">01</p>
              <div className="w-[8px] h-[30px] border border-l-0 border-white"></div>
            </div>
            <h5 className="font-etude font-medium uppercase leading-[116%] text-[22px] max-md:text-[17px]">
              Анализ рынка и трендов
            </h5>
          </div>

          <ul className="list-disc p-[32px] pl-[42px] max-md:py-[24px] max-md:px-[16px] max-md:pl-[36px] text-xl max-md:text-[16px] leading-[140%]">
            <li>Выявляем перспективные ниши</li>
            <li>Проводим конкурентный анализ</li>
            <li>Помогаем принимать обоснованные решения</li>
          </ul>
        </div>

        <div className="w-1/2 max-lg:w-full rounded-[24px] overflow-hidden bg-white/5 backdrop-blur-sm mb-10 border-[1.5px] border-[#e5e7eb33]">
          <div className="flex max-[320px]:flex-col max-[320px]:items-start items-center gap-6  backdrop-blur-sm p-[32px] pb-[40px] max-md:px-[16px] max-md:py-[24px]">
            <div className="flex items-center gap-2 py-[9px] px-[7.5px] max-w-[48px]">
              <p className="text-grey ">02</p>
              <div className="w-[8px] h-[30px] border border-l-0 border-white"></div>
            </div>
            <h5 className="font-etude font-medium uppercase leading-[116%] text-[22px] max-md:text-[17px]">
              Проектирование иоптимизация бизнес-процессов
            </h5>
          </div>

          <ul className="list-disc p-[32px] pl-[42px] max-md:py-[24px] max-md:px-[16px] max-md:pl-[36px] text-xl max-md:text-[16px] leading-[140%]">
            <li>Создаём простые и эффективные модели работы</li>
            <li>Внедряем инструменты автоматизации</li>
          </ul>
        </div>

        <div className="w-1/2 max-lg:w-full ml-auto rounded-[24px] overflow-hidden bg-white/5 backdrop-blur-sm mb-10 border-[1.5px] border-[#e5e7eb33]">
          <div className="flex max-[320px]:flex-col max-[320px]:items-start items-center gap-6  backdrop-blur-sm p-[32px] pb-[40px] max-md:px-[16px] max-md:py-[24px]">
            <div className="flex items-center gap-2 py-[9px] px-[7.5px] max-w-[48px]">
              <p className="text-grey ">03</p>
              <div className="w-[8px] h-[30px] border border-l-0 border-white"></div>
            </div>
            <h5 className="font-etude font-medium uppercase leading-[116%] text-[22px] max-md:text-[17px]">
              Разработка программного обеспечения
            </h5>
          </div>

          <ul className="list-disc p-[32px] pl-[42px] max-md:py-[24px] max-md:px-[16px] max-md:pl-[36px] text-xl max-md:text-[16px] leading-[140%]">
            <li>От мобильных приложений до CRM-систем</li>
            <li>Индивидуальные решения под вашу задачу</li>
          </ul>
        </div>

        <div className="w-1/2 max-lg:w-full rounded-[24px] overflow-hidden bg-white/5 backdrop-blur-sm mb-10 border-[1.5px] border-[#e5e7eb33]">
          <div className="flex max-[320px]:flex-col max-[320px]:items-start items-center gap-6  backdrop-blur-sm p-[32px] pb-[40px] max-md:px-[16px] max-md:py-[24px]">
            <div className="flex items-center gap-2 py-[9px] px-[7.5px] max-w-[48px]">
              <p className="text-grey ">04</p>
              <div className="w-[8px] h-[30px] border border-l-0 border-white"></div>
            </div>
            <h5 className="font-etude font-medium uppercase leading-[116%] text-[22px] max-md:text-[17px]">
              Data-driven подход
            </h5>
          </div>

          <ul className="list-disc p-[32px] pl-[42px] max-md:py-[24px] max-md:px-[16px] max-md:pl-[36px] text-xl max-md:text-[16px] leading-[140%]">
            <li>
              Сбор и анализ данных для роста продаж и оптимизации расходов
            </li>
            <li>Построение моделей прогнозирования</li>
          </ul>
        </div>

        <div className="w-1/2 max-lg:w-full ml-auto rounded-[24px] overflow-hidden bg-white/5 backdrop-blur-sm mb-10 border-[1.5px] border-[#e5e7eb33]">
          <div className="flex max-[320px]:flex-col max-[320px]:items-start items-center gap-6  backdrop-blur-sm p-[32px] pb-[40px] max-md:px-[16px] max-md:py-[24px]">
            <div className="flex items-center gap-2 py-[9px] px-[7.5px] max-w-[48px]">
              <p className="text-grey ">05</p>
              <div className="w-[8px] h-[30px] border border-l-0 border-white"></div>
            </div>
            <h5 className="font-etude font-medium uppercase leading-[116%] text-[22px] max-md:text-[17px]">
              Продуктовый подход и agile
            </h5>
          </div>

          <ul className="list-disc p-[32px] pl-[42px] max-md:py-[24px] max-md:px-[16px] max-md:pl-[36px] text-xl max-md:text-[16px] leading-[140%]">
            <li>Быстрое тестирование гипотез</li>
            <li>Постоянное улучшение продукта</li>
          </ul>
        </div>

        <div className="w-1/2 max-lg:w-full rounded-[24px] overflow-hidden bg-white/5 backdrop-blur-sm mb-10 border-[1.5px] border-[#e5e7eb33]">
          <div className="flex max-[320px]:flex-col max-[320px]:items-start items-center gap-6  backdrop-blur-sm p-[32px] pb-[40px] max-md:px-[16px] max-md:py-[24px]">
            <div className="flex items-center gap-2 py-[9px] px-[7.5px] max-w-[48px]">
              <p className="text-grey ">06</p>
              <div className="w-[8px] h-[30px] border border-l-0 border-white"></div>
            </div>
            <h5 className="font-etude font-medium uppercase leading-[116%] text-[22px] max-md:text-[17px]">
              Разработка цифровых стратегий
            </h5>
          </div>

          <ul className="list-disc p-[32px] pl-[42px] max-md:py-[24px] max-md:px-[16px] max-md:pl-[36px] text-xl max-md:text-[16px] leading-[140%]">
            <li>Внедрение KPI и OKR для контроля и достижения целей</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
