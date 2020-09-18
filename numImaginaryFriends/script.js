/*

person’s number of imaginary friends = 33% of their total friends

*/

const numImaginaryFriends = (toNumFriends) => Math.round(toNumFriends / (100 / 33));

console.log(numImaginaryFriends(18));