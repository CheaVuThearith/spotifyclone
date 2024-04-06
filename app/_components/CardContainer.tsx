"use client";
import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

const CardContainer = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(0);
  const childElements = React.Children.toArray(children);
  const handleResize = () => {
    if (containerRef.current) {
      const cols = getComputedStyle(
        containerRef.current,
      ).gridTemplateColumns.split(" ").length;
      setColumns(cols);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      ref={containerRef}
      className="grid auto-rows-min gap-x-6 gap-y-2 "
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
      }}
    >
      {childElements.slice(0, columns)}
    </div>
  );
};

export default CardContainer;
