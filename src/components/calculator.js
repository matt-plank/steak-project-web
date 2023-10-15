"use client";

import { useState } from "react";

const Calculator = ({
  minThickness,
  maxThickness,
  stepThickness,
  defaultThickness,
}) => {
  const [thickness, setThickness] = useState(defaultThickness);

  return (
    <>
      <div className="flex flex-col gap-2 items-center w-full">
        <input
          type="range"
          value={thickness}
          onChange={(e) => {
            setThickness(e.target.value);
          }}
          min={minThickness}
          max={maxThickness}
          step={stepThickness}
          className="w-full"
        />

        <p className="text-gray-400">Thickness: {thickness} cm</p>

        <div className="h-8"></div>

        <div className="grid grid-cols-5 grid-rows-1 gap-2 w-full rounded-md">
          <div className="bg-rare rounded-sm p-2"></div>
          <div className="bg-mid-rare rounded-sm p-2"></div>
          <div className="bg-medium rounded-sm p-2"></div>
          <div className="bg-mid-well rounded-sm p-2"></div>
          <div className="bg-well rounded-sm p-2"></div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
