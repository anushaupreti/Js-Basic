function sayMyName() {
  console.log('A');
  console.log('N');
  console.log('U');
  console.log('S');
  console.log('H');
  console.log('A');
}

//sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}

const result = addTwoNumbers(3, 'e');

// console.log('Result:', result);

function loginUserMessage(username = 'sam') {
  if (username === undefined) {
    console.log('Please enter a username');
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage('anu'));

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 600));

const user = {
  username: 'anusha',
  price: 200,
};
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and the price is${anyobject.price}`,
  );
}

// handleObject(user);
handleObject({
  username: 'sam',
  price: 800,
});

const myNewArray = [200, 300, 500, 800];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
