"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";

const CardContainer = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (containerRef.current) {
      if (height === 0) {
        setHeight(parseInt(getComputedStyle(containerRef.current).height));
      } else {
        const rows = getComputedStyle(
          containerRef.current,
        ).gridTemplateRows.split(" ").length;
        const computedHeight = (height / rows).toString() + "px";
        containerRef.current.style.height = computedHeight
      }
    }
  }, [height]);
  const handleResize = ()=>{

  }

  return (
    <div
    onResize={handleResize}
      ref={containerRef}
      className="grid auto-rows-min gap-x-6 gap-y-2 overflow-hidden"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
    >
      {children}
    </div>
  );
};

export default CardContainer;
