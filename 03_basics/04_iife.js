//Immediately Invoked Function EXpressions(IIFE)

//names IIFE
(function chai() {
  console.log(`DB CONNECTED`);
})();

//Unnamed IIFE
((name) => {
  console.log(`DB CONNECTED two ${name}`);
})('anusha');
