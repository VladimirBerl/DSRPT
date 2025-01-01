import CastomLink from "@/components/ui/CastomLink";
import TelegramIcon from "@/public/telegram.svg";

export default function RequestSection() {
  return (
    <section className="mb-[180px] max-xl:mb-[92px]">
      <h3 className="font-etude text-[96px] max-2xl:text-[64px] max-lg:text-[48px] max-md:text-[24px] leading-[92%] font-medium uppercase mb-[80px] max-md:mb-[32px]">
        Запустите стартап <br /> с минимальными <br /> рисками
      </h3>
      <div className="flex max-md:flex-col-reverse items-center justify-between gap-10">
        <CastomLink
          className="max-w-[403px] max-md:max-w-full w-full mt-auto"
          href="/"
          icon={<TelegramIcon />}
        >
          Подать заявку
        </CastomLink>
        <p className="w-2/3 max-md:w-full text-[32px] max-md:text-[18px] leading-[110%]">
          Мы организовали акселерационную программу для стартапов и
          предпринимателей, которые хотят запускать проекты быстро и с
          минимальными потерями
        </p>
      </div>
    </section>
  );
}
