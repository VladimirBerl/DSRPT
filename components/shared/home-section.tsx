import CastomLink, { CastomLinkTheme } from "@/components/ui/CastomLink";
import Image from "next/image";
import TelegramIcon from "@/public/telegram.svg";

export default function HomeSection() {
  return (
    <section className="flex justify-between py-[180px] max-sm:flex-col max-xl:py-[92px] ">
      <div className="flex flex-col justify-between">
        <h1 className="font-etude font-medium text-[72px] max-xl:text-[48px] max-lg:text-[32px] max-sm:text-[26px] max-sm:mb-[190px] leading-[96%] uppercase">
          Запуск <br /> стартапов <br /> и цифровая <br /> трансформация <br />
          вашего бизнеса
        </h1>

        <div className="flex items-center gap-6 mt-auto max-sm:hidden">
          <p className="uppercase">Узнать больше</p>
          <Image src="/arrow-double.svg" alt="arrow" width={16} height={16} />
        </div>
      </div>
      <div className="mt-[300px] w-1/3 max-lg:mt-[150px] max-sm:mt-0 max-sm:w-full">
        <h2 className="text-4xl max-lg:text-2xl max-md:text-xl leading-[110%] mb-10">
          Реализуем идеи, создаём технологии, строим стратегии
        </h2>

        <CastomLink className="mb-[20px]" href="/" icon={<TelegramIcon />}>
          Получить консультацию
        </CastomLink>

        <CastomLink
          className="h-[64px]"
          href="/"
          theme={CastomLinkTheme.SECONDARY}
        >
          Присоединиться к акселератору
        </CastomLink>
      </div>
    </section>
  );
}
