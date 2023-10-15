import { timing as timingURL } from "@/api/urls";
import { useEffect, useState } from "react";

const useSteakTimings = (thickness) => {
  const [timings, setTimings] = useState({});

  useEffect(() => {
    fetch(timingURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ thickness }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTimings(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [thickness]);

  return timings;
};

export default useSteakTimings;
