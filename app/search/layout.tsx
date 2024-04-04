import React, { ReactNode } from "react";
import BodyNav from "../_components/BodyNav";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
      <BodyNav search />
      {children}
    </>
  );
};

export default layout;
