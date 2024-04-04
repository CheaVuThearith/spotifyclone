"use client";

import {
  BookmarkIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavbarLink from "./NavbarLink";

const Navbar = ({}) => {
  const [navExpanded, setNavExpanded] = useState(false);
  const [showText, setShowText] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    showText
      ? setShowText((s) => !s)
      : setTimeout(() => setShowText((s) => !s), 200);
  }, [navExpanded]);
  return (
    <div
      className={`sticky top-0 flex max-h-[93vh] flex-col items-center gap-y-2 p-2 transition-all ${navExpanded ? "w-96" : "w-[88px]"}`}
    >
      <div
        className={`flex flex-col items-center gap-y-5 rounded-md bg-[#121212] p-5 transition-all ${navExpanded ? "w-[368px]" : "w-[72px]"}`}
      >
        <NavbarLink name="home" showText={showText}>
          <HomeIcon
            stroke="white"
            strokeWidth={0.8}
            className={`size-8 ${pathname.startsWith("/home") ? "fill-white" : "fill-[#121212]"}`}
          />
        </NavbarLink>
        <NavbarLink name="search" showText={showText}>
          <div>
            <span
              className={` absolute size-[.5rem] translate-x-[.60rem] translate-y-[.6rem] rounded-full bg-white ${pathname.startsWith("/search") ? "opacity-100" : "opacity-0"}`}
            ></span>
            <MagnifyingGlassIcon fill="white" className={`size-8`} />
          </div>
        </NavbarLink>
      </div>
      <div
        className={`flex overflow-scroll flex-col items-center gap-y-5 rounded-md bg-[#121212] p-5 transition-all ${navExpanded ? "w-[368px]" : "w-[72px]"}`}
      >
        <span
          onClick={() => setNavExpanded((e) => !e)}
          className={`flex w-full cursor-pointer items-center gap-x-5 font-bold text-white transition-all duration-500 hover:opacity-100 ${navExpanded ? "opacity-100" : "opacity-70"}`}
        >
          <BookmarkIcon
            className={`size-7 transition-all duration-500 ${navExpanded ? "fill-white" : "fill-[#121212]"}`}
            stroke="white"
            strokeWidth={0.8}
          />
          {showText && "Your Library"}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
