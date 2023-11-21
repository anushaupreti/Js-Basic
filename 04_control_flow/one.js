//if
// const userLoggedIn = true;
// const temperature = 41;
// if (userLoggedIn) {
//   console.log('less then 50');
// } else {
//   console.log('temperature is greater than 50');
// }

//<,>,<=,>=,==,!=,===,!==

// const score = 200;
// if (score > 100) {
//   const power = 'fly';
//   console.log(`User power:${power}`);
// }
// console.log(`User power:${power}`);

const balance = 1000;
// if (balance > 500) console.log('test'), console.log('test2');
if (balance < 500) {
  console.log('less than');
} else if (balance < 750) {
  console.log('less then 750');
} else if (balance < 900) {
  console.log('less then 900');
} else {
  console.log('less then 1200');
}

const userLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if (userLoggedIn && debitcard && 2 == 2) {
  //all conditions must be true
  console.log('Allow to buy couse');
}
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log('User logged in');
}
