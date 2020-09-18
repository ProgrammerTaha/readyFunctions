/*

mass remains consistent throughout the universe

weight is determined by the force of gravity on an object

Since different planets have different gravity, the same object would weigh different amounts on each of those planets!

earthWeight = number

planet = string

*/

const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
    case 'Mercury':
      return earthWeight * 0.378;
    case 'Venus':
      return earthWeight * 0.907;
    case 'Mars':
      return earthWeight * 0.377;
    case 'Jupiter':
      return earthWeight * 2.36;
    case 'Saturn':
      return earthWeight * 0.916;
    default:
      return `Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.`;
  }
};

console.log(calculateWeight(100, 'Jupiter'));
