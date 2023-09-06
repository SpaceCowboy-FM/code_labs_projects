//Exercise 1
/*function greet(name = "Felix") {
  let message = "Hello " + name + "!";
  console.log(message);
}

greet();
*/

//Exercise 2
/*function multiply(a, b) {
  return a * b;
}
let mul = multiply(3, 5);
console.log(mul); */

//Exercise 3
/*const person = {
  name: "Felix",
  age: 36,
  gender: 'Male',
};
console.log(person);*/

//Exercise 4
/*const car = {
  make: "Fiat",
  model: "500",
  year: 2015,
};
console.log(car); */

//Exercise 5
// function reverseString(str) {
//   let chars = str.split('');
//   chars = chars.reverse();
//   return chars.join('');
// }
// console

function reverseString(inputString) {
  return inputString.split("").reverse().join("");
}
const originalString = "Toyota";
console.log(reverseString(originalString));
