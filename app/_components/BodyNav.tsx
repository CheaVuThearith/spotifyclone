"use client";
import {
  BellAlertIcon,
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/16/solid";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
const BodyNav = ({ search = false }: { search?: boolean }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex sticky top-0 items-center justify-between">
        <div className="flex items-center h-10 gap-x-2">
          <ChevronLeftIcon
            onClick={() => router.back()}
            className="size-8 cursor-pointer rounded-full bg-[#050505] fill-white hover:scale-105"
            stroke="#050505"
            strokeWidth={0.4}
          />
          <ChevronRightIcon
            onClick={() => router.forward()}
            className="size-8 cursor-pointer rounded-full bg-[#050505] fill-white hover:scale-105"
            stroke="#050505"
            strokeWidth={0.4}
          />
          {search && <SearchBar />}
        </div>
        <div className="flex items-center gap-x-2">
          <BellIcon className="size-8 cursor-pointer rounded-full bg-[#050505] stroke-[#ffffff] p-2 hover:scale-105" />
          <div className="size-8 cursor-pointer rounded-full bg-[#050505] stroke-[#ffffff] p-2 hover:scale-105"></div>
        </div>
      </div>
    </>
  );
};
export default BodyNav;
