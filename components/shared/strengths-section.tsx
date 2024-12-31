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
    </section>
  );
}
