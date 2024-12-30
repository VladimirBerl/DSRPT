"use client";
import CastomLink, { CastomLinkTheme } from "@/components/ui/CastomLink";
import TelegramIcon from "@/public/telegram.svg";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Navigation({ isOpen, setIsOpen }: NavigationProps) {
  const navigation = ["Услуги", "Акселератор", "Компетенции"];

  return (
    <div className="flex h-full max-xl:h-[32px]">
      <div className="w-[12px] h-full max-xl:h-[32px] border border-r-0 border-primary rounded-bl-xl"></div>
      <div className="min-w-[48px] flex items-center justify-center gap-8 px-4 py-[6px] ">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-[32px] h-[32px] max-xl:h-[24px] max-xl:w-[24px] relative cursor-pointer group z-50"
        >
          <span
            className={`w-2/3 h-[2px] bg-white absolute top-1/2 -translate-y-1/2 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-full h-[2px] bg-white absolute -translate-y-1/2 transition-all ${
              isOpen ? "rotate-45 top-1/2 rounded" : "top-3/4"
            }`}
          ></span>
          <span
            className={`w-full h-[2px] bg-white absolute -translate-y-1/2 transition-all ${
              isOpen ? "-rotate-45 top-1/2 rounded" : "top-1/4"
            }`}
          ></span>
        </div>

        <nav
          className={`max-xl:inset-0 max-xl:bg-dark max-xl:flex max-xl:items-start max-xl:py-[104px] max-xl:px-5 max-xl:justify-center max-xl:w-full max-xl:z-40 ${
            isOpen ? "block max-xl:fixed" : "hidden max-xl:hidden"
          } `}
        >
          <div className="max-xl:flex max-xl:w-full max-xl:h-full">
            <div className="hidden max-xl:block w-[12px] h-[330px] border border-r-0 border-primary rounded-bl-xl translate-y-[-80px]"></div>
            <ul className="flex items-center gap-2 max-xl:w-full max-xl:flex-col max-xl:justify-start max-xl:h-auto">
              {navigation.map((item) => (
                <li key={item} className="max-xl:w-full">
                  <CastomLink
                    className="py-2"
                    theme={CastomLinkTheme.PARALLAX}
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </CastomLink>
                </li>
              ))}
              <CastomLink
                className="hidden max-xl:flex w-full mt-6"
                href="/"
                icon={<TelegramIcon />}
              >
                Получить консультацию
              </CastomLink>
            </ul>
            <div className="hidden max-xl:block w-[12px] h-[330px] border border-l-0 border-primary translate-y-[-80px]"></div>
          </div>
          <div className="hidden max-xl:block absolute bottom-0 p-5">
            <h2 className="text-4xl max-lg:text-2xl max-md:text-[18px] leading-[110%] mb-5">
              Реализуем идеи, создаём технологии, строим стратегии
            </h2>

            <CastomLink className="mb-[12px]" href="/" icon={<TelegramIcon />}>
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
        </nav>
      </div>
      <div className="w-[12px] h-full max-xl:h-[32px] border border-l-0 border-primary"></div>
    </div>
  );
}
