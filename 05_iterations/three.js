//for of
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greetings = 'hello world';
for (const greet of greetings) {
  // console.log(`Each char is ${greet} `);
}

//Maps
const map = new Map();

map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');

for (const key in map) {
  //forin loop in map
  console.log('key', map[key]);
  //Map is not iterable
}

console.log(map);
// for (const [key, value] of map) {
//   console.log(key, ':-', value);
// }

for (const item of map) {
  const [key, value] = item;
  console.log(key, ':-', value);
}

const myObject = {
  game1: 'NFS',
  game2: 'Spiderman',
};

console.log(Object.keys(myObject));
console.log(Object.values(myObject));
// for (const [key, value] of myObject) {
//   console.log(key, ':-', value);
// }
