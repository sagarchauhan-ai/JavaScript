const prompt = require('prompt-sync')();

const airthmeticOperator = () => {
    console.log("Operators in JS")
    let a = 10;
    let b = 5;
    // Airthmetic Operators
    console.log("a + b = ", a+b) // Addition
    
    console.log("a - b = ", a-b) // Subtraction
    
    console.log("a / b = ", a/b) // Division
    
    console.log("a * b = ", a*b) // Multiplication
    
    console.log("a ** b = ", a**b) // Echoiceponential
    
    console.log("a % b = ", a%b) // Modulus
    
    console.log("a++ =", a++) //First prints the value and then does increment
    
    console.log("a-- =", a--) //First prints the value and then does decrement 
    
    console.log("++a =", ++a) //First increases the value and prints the value
    
    console.log("--a =", --a) //First decreases the value and prints the value
    
}

function assignmentOperator(){
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
}

const obj = {
    1 : {
        title : "Airthmetic Operator",
        functionToBeCalled : airthmeticOperator
    },
    2 : {
        title : "Assignment Operators",
        functionToBeCalled : assignmentOperator
    },
}

let choice ;

while(choice != 0) {
    for(const [key,  value] of Object.entries(obj)) {
        console.log(`${key}. ${value.title}`);
    }
    choice = prompt('Enter the menu number to run the title function else enter 0 to exit: ');
    console.log(`You entered No. : ${choice}`);
    if(choice > 0) {
        if( choice = Object.keys(obj).length ) {
            obj[choice].functionToBeCalled();
        } else {
            console.log("Invalid choice");
        }
    }
}