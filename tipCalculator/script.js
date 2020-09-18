const tipCalculator = (quality, total) => {
  switch (quality) {
    case `bad`:
      return (5 / 100) * total;
    case `ok`:
      return (15 / 100) * total;
    case `good`:
      return (20 / 100) * total;
    case `excellent`:
      return (30 / 100) * total;
    default:
      return (18 / 100) * total;
  };
};

// console.log(tipCalculator('excellent', 75));