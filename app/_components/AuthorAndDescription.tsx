import React from "react";

type Props = {
  type: "big" | "small" | "hidden" | "xl";
};
const AuthorAndDescription = ({ type }: Props) => {
  return (
    <div className="flex flex-col">
      <p className={`${type === "xl" ? "py-4 text-6xl font-bold" : "text-sm"}`}>
        Title
      </p>
      <p className="text-xs opacity-70">Author</p>
    </div>
  );
};

export default AuthorAndDescription;
