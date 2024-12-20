//1. Write a program using prompt function to take a input of age as a value from the user and use 
//alert to tell him if he can drive.Also , confirm to verify again.

let repeat = true ;
const eligible =(inp)=>{
  return inp>=18 ? true : false
}

while(repeat){
  let inp = prompt('Enter your age to verify : ')
  inp=Number.parseInt(inp)

  if(inp<0){
    console.error("Invalid Input")
    break;
  }

if(eligible(inp)){
  alert("You are eligible to drive.")
  }
  else {
  alert("You are below 18 and cannot drive.")
  }
  repeat = confirm("Do you want to verify again.")
}

//2. Write a program to change the url to google.com(Redirection) if user enters a number greater than 4.
//Change the background color of the page to yellow or any color based on user input.

let number = prompt('Enter a number : ')
number = Number.parseFloat(number);
if(number>=4){
 window.open("https://google.com")
}

let color = prompt("Enter the color name :")
document.body.style.backgroundColor = color