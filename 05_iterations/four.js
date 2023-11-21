const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: 'ruby',
  swift: 'swift by apple',
};
for (const key in myObject) {
  //forin loop
  console.log(`${key} shortcut for ${myObject[key]}`);
}

//forin loop in array
const programming = ['js', 'rb', 'py', 'java', 'cpp'];

for (const key in programming) {
  console.log(programming[key]);
}
