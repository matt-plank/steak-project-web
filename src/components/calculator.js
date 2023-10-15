"use client";

import useSteakTimings from "@/hooks/useSteakTimings";
import { useState } from "react";

const Calculator = ({
  minThickness,
  maxThickness,
  stepThickness,
  defaultThickness,
}) => {
  const [thickness, setThickness] = useState(defaultThickness);
  const timings = useSteakTimings(thickness);

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

        <div className="grid grid-cols-5 grid-rows-2 gap-2 w-full rounded-md text-white">
          <p className="text-center text-black">Rare</p>
          <p className="text-center text-black"></p>
          <p className="text-center text-black">Medium</p>
          <p className="text-center text-black"></p>
          <p className="text-center text-black">Well</p>
          <div className="bg-rare rounded-sm p-2">{timings.rare}s</div>
          <div className="bg-mid-rare rounded-sm p-2">{timings.midRare}s</div>
          <div className="bg-medium rounded-sm p-2">{timings.medium}s</div>
          <div className="bg-mid-well rounded-sm p-2">{timings.midWell}s</div>
          <div className="bg-well rounded-sm p-2">{timings.well}s</div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
