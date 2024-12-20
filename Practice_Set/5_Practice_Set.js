//1.Create an array of numbers and take input from the user to add numbers to this array.

let array = [10, 20, 30, 40, 50, 60]
let entry = prompt('Enter the number to add :');
entry = Number.parseInt(entry);
let add = array.push(entry);
console.log(array,add);

//2.Keep adding numbers to the array in until 0 is added to the array.

let Array = [10, 20, 30, 40, 50, 60]
let query;
do {
query = prompt('Enter the number :');
query = Number.parseInt(query);
Array.push(query);
} while (query != 0);
console.log(Array)

//3.Filter for numbers divisible by 10 from a given array.

let x = [120, 130, 250, 123, 456]
let y = x.filter((i)=>{
return  i%10 == 0;
} )
console.log(y)

//4.Create an array of square of given numbers.

let numbers = [2, 3, 4, 5, 6, 7, ]
let square = numbers.map((i)=>{
  return i*i
})
console.log(square)

//5.Use reduce to calculate factorial of a given numbers from an array of first n natural numbers.

let count = [1, 2, 3, 4, 5, 6, 7, 8]; 
let fact = count.reduce((n1, n2) =>{
  return n1 * n2;
})
console.log(fact)