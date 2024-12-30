"use client";

import Link from "next/link";
import Image from "next/image";
import Navigator from "@/components/shared/navigation";
import CastomLink from "@/components/ui/CastomLink";
import TelegramIcon from "@/public/telegram.svg";
import React from "react";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header className="flex items-center justify-between mt-10 max-xl:mt-5 h-[64px]">
      <Link
        className={`z-50 transition-all ${isOpen ? "max-xl:ml-4" : ""}`}
        href="/"
      >
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </Link>
      <Navigator isOpen={isOpen} setIsOpen={setIsOpen} />
      <CastomLink className="max-xl:hidden" href="/" icon={<TelegramIcon />}>
        Получить консультацию
      </CastomLink>
    </header>
  );
}
