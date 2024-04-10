import React, { ReactNode } from "react";
import BodyNav from "../_components/BodyNav";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
      <BodyNav search />
      <div className="flex flex-col">
        <h1 className="mb-4 text-xl font-bold ">Browse All</h1>
        <div className="flex w-full flex-wrap gap-4">
      {children}
        </div>
      </div>
    </>
  );
};

export default layout;
