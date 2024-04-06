import React from "react";
import AuthorAndDescription from "./AuthorAndDescription";

type Props = {
  type: "big" | "small" | "hidden";
  showText?: boolean;
};

const Card = ({ type, showText }: Props) => {
  if (type === "big" || type === "small")
    return (
      <>
        <div
          className={`flex ${type === "big" ? "grow flex-col gap-y-2" : "items-center gap-x-3"}`}
        >
          <div
            className={`${type === "big" ? "aspect-square min-w-40 max-w-52" : "size-14"} rounded-md bg-white`}
          ></div>
          <AuthorAndDescription /> 
          {/* 204 / 252 */}
        </div>
      </>
    );
  else
    return (
      <div className="flex items-center gap-x-4">
        <div className="size-9 shrink-0 rounded-md bg-white"></div>
        {showText && <AuthorAndDescription />}
      </div>
    );
};

export default Card;
