let a = 10;
const b = 20;
var c = 30;

function one() {
  const username = 'anusha';
  function two() {
    const website = 'youtube';
    console.log(username);
  }
  // console.log(website);
  // two();
}
// one ();

if (true) {
  const username = 'anushaUpreti';
  if (username === 'anushaUpreti') {
    const website = ' youtube';
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

//+++++++++++ INteresting +++++++++++
console.log(addone(5));
function addone(num) {
  return num + 1;
}

addtwo(5); // ya error aouxa its called hoesting
const addtwo = function (num) {
  return num + 2;
};
