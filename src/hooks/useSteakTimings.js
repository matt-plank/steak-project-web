const useSteakTimings = (thickness) => {
  const rare = thickness * 30;
  const midRare = thickness * 40;
  const medium = thickness * 50;
  const midWell = thickness * 60;
  const well = thickness * 70;

  return {
    rare,
    midRare,
    medium,
    midWell,
    well,
  };
};

export default useSteakTimings;
