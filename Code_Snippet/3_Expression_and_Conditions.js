// Expressions And Conditions
console.log("Operators in JS")
let a = 10;
let b = 5;
// Airthmetic Operators
console.log("a + b = ", a+b) // Addition

console.log("a - b = ", a-b) // Subtraction

console.log("a / b = ", a/b) // Division

console.log("a * b = ", a*b) // Multiplication

console.log("a ** b = ", a**b) // Exponential

console.log("a % b = ", a%b) // Modulus

console.log("a++ =", a++) //First prints the value and then does increment

console.log("a-- =", a--) //First prints the value and then does decrement 

console.log("++a =", ++a) //First increases the value and prints the value

console.log("--a =", --a) //First decreases the value and prints the value

//Assignment Operators
let v = 20;
v +=5 // same as v = v + 5
console.log("v is now = ", v)

v -=5 // same as v = v - 5
console.log("v is now = ", v)

v *=5 // same as v = v * 5
console.log("v is now = ", v)

v /=5 // same as v = v / 5
console.log("v is now = ", v)

v %=5 // same as v = v % 5
console.log("v is now = ", v)

v **=5 // same as v = v ** 5
console.log("v is now = ", v)

//Comparison Operators
comp1 = 6;
comp2 = "6";
comp3 = 7

console.log("comp1 == comp2 is", comp1 == comp2) //Compares only the value
console.log("comp1 != comp2 is", comp1 != comp2) //Compares only the value
console.log("comp1 === comp2 is", comp1 === comp2) //Compares value and the datatype
console.log("comp1 !== comp2 is", comp1 !== comp2) //Compares value and the datatype
console.log("comp1 < comp3 is", comp1 > comp3) //Greater then
console.log("comp1 > comp3 is", comp1 < comp3) //Lesser then

//Logical Operators
let x = 12;
let y = 14;
//AND 
console.log(x<y && x == 12) // true && true = true
console.log(x>y && x == 12) // false && true = false
console.log(x<y && x == 14) // true && false = false
console.log(x>y && x == 14) // false && false = false

//OR
console.log(x<y || x == 12) // true || true = true
console.log(x>y || x == 12) // false || true = true
console.log(x<y || x == 14) // true || false = true
console.log(x>y || x == 14) // false || false = false

//!(NOT)
console.log(!false)
console.log(!true)
 
//Conditional Statements

const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);

let message = prompt('Enter your age to verify :');
message = parseInt(message);
if (message >= 18){
  console.log('This is a valid age.\nYou are eligible to drive')
}
else{
  console.log('This is not a valid age.\a You are not eligible.')
}
console.log('You must', message>=18?'drive.': 'not drive.')   // Ternary Operator

const game = prompt("Enter your game name:")
switch (game){
  case 'Clash of Clan'.toLocaleLowerCase():
  console.log('This game is for COC players.')
  break;
  case 'Candy Crush'.toLocaleLowerCase():
  console.log('This game is for Candy Crush players.');
  break;
  case 'BGMI'.toLocaleLowerCase():
  console.log('This game is for BGMI players.');
  break;
  default: console.log(`Sorry this game ${game} is not included.`);
}
