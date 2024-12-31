import ArrowOut from "@/public/arrow_out.svg";

interface SliderItemProps {
  title: string;
  subtitle?: string;
}

export default function SliderItem(item: SliderItemProps) {
  return (
    <div className="flex items-center justify-center w-full h-[836px] max-md:h-[400px] mx-auto">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="flex items-center justify-center mb-5">
          <div className="w-[12px] h-full max-xl:h-[32px] border border-r-0 border-primary rounded-bl-xl"></div>
          <p className={`text-grey max-md:text-[14px] uppercase px-3 ${!item.subtitle && "text-white"}`}>
            {item.subtitle ? item.subtitle : <ArrowOut />}
          </p>
          <div className="w-[12px] h-full max-xl:h-[32px] border border-l-0 border-primary"></div>
        </div>
        <h5 className="font-etude text-center text-[40px] max-md:text-[20px] leading-[110%] font-medium uppercase max-w-[566px] max-md:max-w-[268px]">
          {item.title}
        </h5>
      </div>
    </div>
  );
}
