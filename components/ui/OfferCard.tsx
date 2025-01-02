import CastomLink from "@/components/ui/CastomLink";
import ArrowOut from "@/public/arrow_out.svg";
import Image from "next/image";

interface OfferCardProps {
  title: string;
  elements: string[];
  images: string;
}

export default function OfferCard({
  card,
  className,
}: {
  card: OfferCardProps;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-[32px] p-[32px] max-sm:p-[16px] pt-[60px] max-sm:pt-[32px] h-full text-dark bg-white hover:bg-primary hover:text-white group transition-all duration-500 ${className}`}
    >
      <h5 className="font-etude font-medium text-[26px] max-sm:text-[17px] uppercase mb-[28px]">
        {card.title}
      </h5>
      <ul className="list-disc pl-5">
        {card.elements.map((element: string, index: number) => (
          <li className="text-xl leading-[140%] max-sm:text-[16px]" key={index}>
            {element}
          </li>
        ))}
      </ul>
      <CastomLink
        className="mt-auto ml-auto w-[64px] h-[64px] px-0 py-0 max-md:py-0 max-md:px-0 gap-0 group-hover:bg-white group-hover:text-primary max-lg:mt-[100px] max-sm:mt-auto"
        href="/"
      >
        <div className="m-auto">
          <ArrowOut />
        </div>
      </CastomLink>
      <Image
        className="absolute bottom-0 left-0 max-sm:w-[250px] max-sm:h-[250px] max-sm:bottom-[-20px] pointer-events-none"
        src={card.images}
        alt="offer"
        width={408}
        height={408}
      />
    </div>
  );
}
