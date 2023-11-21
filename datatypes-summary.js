//datatypes - two types
//premitive and non-premitive

// ********premitive********
// ---call by value
// 7 types: string,Number, Boolean, null, undefined, BigInt,Symbol

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id == anotherId);
const bigNumber = 12345678912345678234567;

//Reference(Non primitive)
// call by value
//Array, Objects, Functions

const heros = ['shaktiman', 'naagraj', 'doga'];
let myObj = {
  name: 'anusha',
  age: '22',
};
const myFunction = function () {
  console.log('Hello world');
};
console.log(typeof myFunction);
// *Javascript

//++++++++++++++++++++++++++++++++++++++
//Stack (Primitive, Heap(Non-primitive))
let myYoutubename = 'anushaupreti';

let anothername = myYoutubename;
anothername = 'chaiorcode';
console.log(anothername);
console.log(myYoutubename);
