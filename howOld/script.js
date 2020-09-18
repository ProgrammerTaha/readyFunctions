const howOld = (age, year) => {
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  const bornYear = currentYear - age;
  if (year > currentYear) {
    return `You will be ${year - currentYear + age} in the year ${year}`;
  } else if (bornYear > year) {
    return `The year ${year} was ${bornYear - year} years before you were born`;
  } else if (year > bornYear) {
    return `You were ${year - bornYear} in the year ${year}`;
  } else if (year = bornYear) {
    return `This the year you were born in.`;
  }
};

// console.log(howOld(24, 1900));