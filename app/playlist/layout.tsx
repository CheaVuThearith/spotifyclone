import React, { ReactNode } from "react";
import Card from "../_components/Card";
import {
  Bars3Icon,
  ClockIcon,
  PlayCircleIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";
import BodyNav from "../_components/BodyNav";

type Props = { children: ReactNode };

const layout = ({ children }: Props) => {
  return (
    <>
      <BodyNav />
      <div className="flex flex-col">
        <div className="py-6">
          <Card type="xl"></Card>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-6 py-2">
            <PlayCircleIcon className="size-16 fill-green-500" />
            <PlusIcon className="size-7 rounded-full border-[3px] opacity-70" />
            <p className="text-xl font-extrabold opacity-70">. . .</p>
          </div>
          <div className="flex items-center gap-x-4">
            <p className="text-sm font-semibold opacity-70">List</p>
            <Bars3Icon className="size-5 opacity-70" />
          </div>
        </div>
        <table className="w-full table-auto text-sm ">
          <thead className="">
            <tr className="border-b border-[#ffffff20] opacity-70">
              <th className="pb-2 px-2 text-center font-normal">#</th>
              <th className="pb-2 text-start font-normal">Title</th>
              <th className="pb-2 text-start font-normal">Album</th>
              <th className="pb-2 text-start font-normal">Date added</th>
              <th className="pb-2 text-start font-normal">
                <ClockIcon className="size-4" />
              </th>
            </tr>
          </thead>
          <tbody className="">{children}</tbody>
        </table>
      </div>
    </>
  );
};

export default layout;
