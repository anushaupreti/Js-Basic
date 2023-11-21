//singleton
//Oject.create

//object literal
const mySym = Symbol('key1');

const JsUser = {
  name: 'anusha',
  'full name': 'anusha upreti',
  age: 25,
  [mySym]: 'mykey1',
  location: 'Jaipur',
  email: 'anusha@gmail.com',
  isLoggedIn: false,
  lastLoginDays: ['mondays', 'saturday'],
};
// console.log(JsUser['full name']);
// console.log(JsUser.email);
// console.log(JsUser[mySym]);
// JsUser.email = 'anusha@chatgpt.com';
// Object.freeze(JsUser);
// console.log(JsUser);

JsUser.greeting = function () {
  console.log(`Hello JS user,${this.name}`);
};
console.log(JsUser.greeting());
