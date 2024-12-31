import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="flex items-start justify-between gap-10 max-lg:flex-col">
      <div>
        <Image
          className="rounded max-md:w-[154px] max-md:h-[154px]"
          src="/author.png"
          alt="author"
          width={408}
          height={408}
        />
        <div className="py-5 border-b border-grey">
          <p className="text-2xl mb-2 max-md:text-sm">Руслан Бакиев</p>
          <p className="text-grey max-md:text-[12px]">Основатель компании</p>
        </div>
      </div>
      <h3 className="text-[40px] leading-[44px] w-[60%] max-xl:text-[26px] max-lg:ml-auto max-md:text-xl max-md:leading-[22px]">
        Мы — команда профессионалов, которая превращает идеи в работающие
        бизнесы. Наша цель — помогать предпринимателям и компаниям расти в
        условиях быстро меняющегося цифрового мира.
      </h3>
    </section>
  );
}
