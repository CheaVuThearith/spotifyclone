import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {};

const NavbarLink = ({
  children,
  name,
  showText,
}: {
  children: ReactNode;
  name: string;
  showText: boolean;
}) => {
  const pathname = usePathname();
  return (
    <>
      <a
        href={`/${name}`}
        className={`flex w-full cursor-pointer items-center gap-x-5 font-bold text-white hover:opacity-100 ${pathname.startsWith(`/${name}`) ? "opacity-100" : "opacity-70"}`}
      >
        {children}
        {showText && name.charAt(0).toUpperCase()+name.slice(1)}
      </a>
    </>
  );
};

export default NavbarLink;
