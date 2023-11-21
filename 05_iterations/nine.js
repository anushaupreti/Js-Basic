const array1 = [1, 2, 3, 4, 5];

// const myTotal = array1.reduce(function (acc, currval) {
//   console.log(`acc:${acc} and curval:${currval}`);
//   return acc + currval;
// }, 0);

const myTotal = array1.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: 'js course',
    price: 999,
  },
  {
    itemName: 'python course',
    price: 2000,
  },
  {
    itemName: 'data science',
    price: 5000,
  },
];
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
