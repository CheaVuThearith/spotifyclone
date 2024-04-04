"use client";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { useScroll } from "framer-motion";
import React, { useRef, useState } from "react";

type Props = {};
const SearchBar = (props: Props) => {
  const [input, setInput] = useState("");
  return (
    <div className="relative flex items-center">
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        className="h-12 w-80 rounded-full bg-[#2a2a2a] p-2 pl-9 text-sm text-white"
        placeholder="What do you want to play?"
      />
      <MagnifyingGlassIcon className="absolute left-3 size-5 fill-[#999c92]" />
      {input !== "" && (
        <XMarkIcon
          onClick={() => setInput("")}
          className="absolute right-3 size-5 fill-[#999c92]"
        />
      )}
    </div>
  );
};

export default SearchBar;
