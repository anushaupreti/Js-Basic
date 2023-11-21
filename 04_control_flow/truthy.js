const userEmail = '';
if (userEmail) {
  console.log('Got user email');
} else {
  console.log('Dont have user email');
}
//falsy values

// false, 0, -0, BigInt 0n, "",null,undefined,NaN

//Truthy values

//[], "0",'false'," ",{},function(){},

// if (userEmail.length === 0) {
//   console.log('Array ia empty');
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log('Object is empty');
}

//Nullish Coalesting Operator(??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;

val = null ?? 10 ?? 15;
console.log(val1);

//Terniary Operator

//condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log('less then 80') : console.log('more then 80');
