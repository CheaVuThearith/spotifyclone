import React from "react";
import AuthorAndDescription from "./AuthorAndDescription";
import { Router } from "next/router";
import { redirect, useRouter } from "next/navigation";

type Props = {
  type: "big" | "small" | "hidden" | "xl";
  showText?: boolean;
};

const Card = ({ type, showText }: Props) => {
  if (type === "big" || type === "small" || type === "xl")
    return (
      <>
        <a
          href="/playlist"
          className={`flex cursor-pointer ${type === "big" ? "grow flex-col gap-y-2" : "items-center"} ${type === "xl" ? "gap-x-6" : `${type === "small" && "gap-x-3"}`}`}
        >
          <div
            className={`${type === "big" || type === "xl" ? "aspect-square min-w-40 max-w-52" : "size-14"} rounded-md bg-white`}
          ></div>
          <div>
            {type === "xl" && <p className="text-sm opacity-70">Playlist</p>}
            <AuthorAndDescription type={type} />
            {type === "xl" && (
              <p className="text-sm">
                <span className="opacity-70">Made for</span>
                <span className="font-bold"> user •</span>
                <span className=""> x songs,</span>
                <span className="opacity-70"> about y time</span>
              </p>
            )}
          </div>
        </a>
      </>
    );
  else
    return (
      <a href="/playlist" className="flex items-center gap-x-4">
        <div className="size-9 shrink-0 rounded-md bg-white"></div>
        {showText && <AuthorAndDescription type={type} />}
      </a>
    );
};

export default Card;
