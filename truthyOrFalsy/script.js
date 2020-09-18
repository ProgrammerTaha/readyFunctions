const truthyOrFalsy = (val) => (val === false) ? false : (val === 0) ? false : (val === -0) ? false : (val === '') ? false : (val === null) ? false : (val === undefined) ? false : (val === NaN) ? false : (val === false) ? false : true;
// console.log(truthyOrFalsy());

/*
//Another way
const truthyOrFalsy = (val) => {
  if (val === false) {
    return false;
  } else if (val === 0) {
    return false;
  } else if (val === -0) {
    return false;
  } else if (val === '') {
    return false;
  } else if (val === null) {
    return false;
  } else if (val === undefined) {
    return false;
  } else if (val === NaN) {
    return false;
  } else {
    return true;
  };
};
*/
