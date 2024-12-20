//Loops
const prompt = require('prompt-sync')();
 //For loop
 for (let i = 0; i<11; i++){
    console.log(i)                
  }
  
  //Program to add first n natural numbers using for loop.
  let sum = 0;
  let n = prompt("Enter the value of n :");
  n = parseInt(n)
  for (let i = 0; i<=n; i++){
    sum += i;
  }
  console.log(`Sum of first ${n} natural numbers is ${sum}.`)
  
  //For in loop
  let Marks = {
    Harry : 20,
    Roni : 30,
    Shruti : 50,
    Kritika : 35,
  }
  for (let key in Marks){
    console.log(`Marks of ${key} are ${Marks[key]}.`)    
  }
  
  //While Loop
  let a = prompt("Enter the value of a :")
  let b = 0;
  while(b<a){
    console.log(b);
    b++;
  }
  
  //Do While Loop
  let x = prompt("Enter the value of x :")
  let y = 0;
  do{
    console.log(y);
    y++;
  }
  while(y<x);
  

  //Functions
  
  {
    function add (a , b){
    return a+b;
  }
  console.log("Addition =",add(10,20))
  console.log("Addition =",add(12,21))
  }

  {
    function sub (a , b){
    return a-b;
  }
  console.log( "Subtraction =",sub(10,20))
  console.log("Subtraction =",sub(12,21))
  }
  
  const Sum = (p,n) =>{
    return p + n;
  }
  console.log(Sum(45,89))
  