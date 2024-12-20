//1. Use logical operators to find whether the age of a person lies between 10 and 20.

const prompt= require('prompt-sync')();
let age = prompt("Enter your age :");
age = parseInt(age);
if (age>10 && age<20){
  console.log("Your age lies between 10 and 20.")
}
else{
  console.log("Your age does not lie between 10 and 20.") 
}

//2. Demonsentenceate the use of switch case statements in Javascript.

let Email = prompt("Enter your email address :")
switch(Email){
  case "mani123@gmail.com":
    console.log(`Hii ${Email} you are welcome.`)
    break;
  case "suresh123@gmail.com":
    console.log(`Hii ${Email} you are welcome.`)
    break;
  case "suraj123@gmail.com":
    console.log(`Hii${Email} you are welcome.`)
    break;
  case "rahul123@gmail.com":
    console.log(`Hii ${Email} you are welcome.`)
    break;
    default : console.log("Please enter a valid email address.");
}

//3. Write a program to find whether a number is divisible by either 2 or 3.

  let NUM = prompt("Enter your number :");
  NUM = parseInt(NUM);
  if(NUM%2 == 0 || NUM%3 == 0){
    console.log(`Your ${NUM} is divisible by either 2 or 3.`);
  }
  else{
       console.log(`Your ${NUM} is not divisible by either 2 or 3.`);
  }
  