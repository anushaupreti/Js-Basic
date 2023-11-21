const name = 'anusha';
const repoCount = 50;
// console.log(`My name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('hiteshhc');
console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = ' anusha ';
console.log(newStringOne);
console.log(newStringOne.trim());
const url = 'https://anusha%20upreti.com';
console.log(url.replace('%20', '-'));
console.log(url.includes('anusha'));
