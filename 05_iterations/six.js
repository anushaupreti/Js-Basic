// const coding = ['js', 'ruby', 'java', 'python'];

// const values = coding.forEach((item) => {
//   // console.log(item);
//   return item;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNums = myNums.filter((num) => {
//   return num > 4;
// });

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1991, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1998, edition: 2001 },
  { title: 'Book Three', genre: 'History', publish: 1900, edition: 1991 },
  { title: 'Book Four', genre: 'Science', publish: 1989, edition: 2002 },
  { title: 'Book Five', genre: 'History', publish: 1990, edition: 1992 },
  { title: 'Book Six', genre: 'Fiction', publish: 1980, edition: 1981 },
  { title: 'Book Seven', genre: 'Non-Fiction', publish: 1991, edition: 2004 },
  { title: 'Book Eight', genre: 'Fiction', publish: 1975, edition: 1976 },
  { title: 'Book Nine', genre: 'Sciene', publish: 1999, edition: 2000 },
  { title: 'Book Ten', genre: 'Love', publish: 2019, edition: 2020 },
];
// const userBooks = books.filter((bk) => bk.genre === 'History');
let userBooks = books.filter((bk) => (bk.publish = 2000));
console.log(userBooks);
