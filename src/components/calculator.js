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
      <div className="flex flex-col gap-2 items-center">
        <p className="text-gray-400">{thickness} cm</p>

        <div className="flex gap-2">
          <p>{minThickness} cm</p>
          <input
            type="range"
            value={thickness}
            onChange={(e) => {
              setThickness(e.target.value);
            }}
            min={minThickness}
            max={maxThickness}
            step={stepThickness}
          />
          <p>{maxThickness} cm</p>
        </div>
      </div>
    </>
  );
};

export default Calculator;
