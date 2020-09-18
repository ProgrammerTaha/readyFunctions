const finalGrade = (num1, num2, num3) => {
  if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100)) {
    return 'You have entered an invalid grade.';
  };
  const average = (num1 + num2 + num3) / 3;
  console.log(`Your average degree is ${average}%`);
  if (average < 60) {
    return 'F';
  } else if (average < 70) {
    return 'D';
  } else if (average < 80) {
    return 'C';
  } else if (average < 90) {
    return 'B';
  } else {
    return 'A';
  }
};
console.log(finalGrade(100, 100, 100));