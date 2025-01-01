import CastomLink from "@/components/ui/CastomLink";
import TelegramIcon from "@/public/telegram.svg";

export default function ContactUsSection() {
  return (
    <section className="mt-[180px] max-md:mt-[92px] py-[140px] max-2xl:py-[90px] max-2xl:px-[60px] max-lg:py-[70px] max-lg:px-[40px] max-md:py-[32px] max-md:px-[20px] px-[110px] bg-white/5 backdrop-blur-sm border-[1.5px] border-[#e5e7eb33] border-x-0 rounded-tl-[36px] rounded-tr-[36px]">
      <h4 className="font-etude text-[96px] max-2xl:text-[64px] max-lg:text-[42px] max-md:text-[28px] max-sm:text-[22px] leading-[100%] font-medium uppercase mb-[120px] max-lg:mb-[50px] max-md:mb-[32px]">
        Начнём работу над <br /> вашим проектом?
      </h4>
      <div className="w-full">
        <p className="text-4xl max-lg:text-2xl max-md:text-[18px] max-md:max-w-[320px] mb-[40px] max-md:mb-[20px]">
          Свяжитесь с нами через Telegram
        </p>
        <CastomLink
          className="font-etude font-medium text-[40px] leading-[110%] max-lg:text-[24px] max-md:text-[20px]"
          href="/"
          icon={<TelegramIcon />}
        >
          Связаться прямо сейчас
        </CastomLink>
      </div>
    </section>
  );
}
