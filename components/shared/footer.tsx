import TopIcon from "@/public/top.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto px-5 flex justify-between items-center mt-[40px] mb-[20px] max-md:mt-[20px] h-[48px]">
      <p className="text-grey">©2024. DSRPT</p>
      <Link className="flex items-center gap-2" href="/">
        <p className="uppercase text-grey">К началу</p>
        <TopIcon />
      </Link>
    </footer>
  );
}
