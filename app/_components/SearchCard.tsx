import React from "react";

type Props = {
  tittle: string;
};

const SearchCard = ({ tittle }: Props) => {
  return (
    <div
      /*@ts-ignore*/
      before={tittle}
      className="relative size-40 overflow-hidden rounded-lg bg-white before:relative before:left-3 before:top-4 before:text-2xl before:font-bold before:text-black before:content-[attr(before)] after:absolute after:-bottom-1 after:-right-4 after:size-24 after:rotate-[20deg] after:bg-black"
    ></div>
  );
};

export default SearchCard;
