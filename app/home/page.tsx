import React from "react";
import Card from "../_components/Card";

type Props = {};

const page = async (props: Props) => {
  return (
    <>
      <div
        className="grid max-h-56 auto-rows-min gap-x-6 gap-y-2 overflow-hidden"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
      >
        {
          //TODO:FIX THIS
        }
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
        <Card type="big" />
      </div>
    </>
  );
};

export default page;
