"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";

const CardContainer = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleResize = () => {
    if (containerRef.current) {
      const childHeight = getComputedStyle(containerRef.current.children[0]).height;
      containerRef.current.style.height = childHeight;
      console.log(childHeight)
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize)
    return ()=>window.removeEventListener("resize", handleResize)
  }, []);
  return (
    <div
      ref={containerRef}
      className="grid auto-rows-min gap-x-6 gap-y-2 overflow-hidden"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
    >
      {children}
    </div>
  );
};

export default CardContainer;
