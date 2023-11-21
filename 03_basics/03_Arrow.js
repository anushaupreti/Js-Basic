const user = {
  username: 'anusha',
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = 'sam';
// user.welcomeMessage();
// console.log(this);

// function chai() {
//   let username = 'ansu';
//   console.log(this.username);   *You cannot use this keyboard inside function*
// }
// chai();

// const chai = function () {
//   let username = 'hitesh';
//   console.log(this.username);
// };
// chai();

// const chai = () => {
//   let username = 'hitesh';
//   console.log(this);
// };
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => ({
  username: 'raksha',
});

console.log(addTwo(3, 4));

const myArray = [2, 4, 6, 8];
