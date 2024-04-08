import React, { ReactNode } from "react";
import Card from "../_components/Card";
import {
  Bars3BottomLeftIcon,
  Bars3Icon,
  ClockIcon,
  PlayCircleIcon,
  PlusCircleIcon,
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
        <table className="text-sm w-full">
          <thead className="pb1">
            <tr className="opacity-70">
              <th className="text-start font-normal ">#</th>
              <th className="text-start font-normal">Title</th>
              <th className="text-start font-normal">Album</th>
              <th className="text-start font-normal">Date added</th>
              <th className="text-start font-normal">
                <ClockIcon className="size-4" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Card type="small" />
              </td>
              <td>Album Name</td>
              <td>dd:mm:yy</td>
              <td>mm:ss</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default layout;
