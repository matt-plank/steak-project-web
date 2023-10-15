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
      </div>
    </>
  );
};

export default Calculator;
