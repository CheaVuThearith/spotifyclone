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
      className={`sticky top-0 flex h-full flex-col items-center gap-y-2 p-2 transition-all ${navExpanded ? "w-96" : "w-[88px]"}`}
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
              className={` absolute size-[.5rem] translate-x-[.63rem] translate-y-[.63rem] rounded-full bg-white ${pathname.startsWith("/search") ? "opacity-100" : "opacity-0"}`}
            ></span>
            <MagnifyingGlassIcon fill="white" className={`size-8`} />
          </div>
        </NavbarLink>
      </div>
      <div
        className={`flex h-full flex-col items-center gap-y-5 overflow-hidden rounded-md bg-[#121212] transition-all ${navExpanded ? "w-[368px]" : "w-[72px]"}`}
      >
        <span
          onClick={() => setNavExpanded((e) => !e)}
          className={`sticky top-0 flex w-full cursor-pointer items-center gap-x-5 p-5 pb-0 font-bold text-white transition-all duration-500 hover:opacity-100 ${navExpanded ? "opacity-100" : "opacity-70"}`}
        >
          <BookmarkIcon
            className={`size-7 translate-x-[2px] transition-all duration-500 ${navExpanded ? "fill-white" : "fill-[#121212]"}`}
            stroke="white"
            strokeWidth={0.8}
          />
          {showText && "Your Library"}
        </span>
        <div
                   className={`flex w-full flex-col gap-y-5 overflow-scroll p-[18px]`}
        >
          <div className="flex items-center gap-x-4">
            <div className="size-9 shrink-0 rounded-sm bg-white"></div>
            {showText && (
              <span className="flex flex-col">
                <p className="text-sm">Title</p>
                <p className="text-xs opacity-70">Author</p>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
