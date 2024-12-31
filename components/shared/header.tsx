"use client";

import Link from "next/link";
import Image from "next/image";
import Navigator from "@/components/shared/navigation";
import CastomLink from "@/components/ui/CastomLink";
import TelegramIcon from "@/public/telegram.svg";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  useEffect(() => {
    const checkScreenWidthAndToggleScroll = () => {
      if (window.innerWidth < 1280) {
        setIsScrollDisabled(true);
      } else {
        setIsScrollDisabled(false);
      }
    };

    checkScreenWidthAndToggleScroll();

    window.addEventListener("resize", checkScreenWidthAndToggleScroll);

    return () => {
      window.removeEventListener("resize", checkScreenWidthAndToggleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrollDisabled && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, isScrollDisabled]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = isScrolled
    ? "bg-[#09091a] bg-opacity-90"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full ${headerClass} transition-all`}
    >
      <div className="container flex items-center justify-between mx-auto px-5 my-5 h-[64px]">
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
      </div>
    </header>
  );
}
