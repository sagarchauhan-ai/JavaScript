//1. Write a program to print the marks of a student in an object using for loop.

const Karan = {
    Math : 45,
    Chemisentencey : 50,
    Hindi : 30,
    Physics : 60,
    English : 22
}
for (let key in Karan){
    console.log(`Marks in ${key} are ${Karan[key]}`)
}

//2. Write a program to print Try Again until the user enters the correct number.

let cn = 10;
let input = "" 
while( input != cn){
     input = prompt ("Enter the correct number : ")
    if(input != cn){
        console.log("Try Again. !")
    }
}
    console.log("You have entered the correct number.")

//3. Write a function to find the mean of 5 numbers.

const mean = (a, b, c, d, e)=>{
    return (a+b+c+d+e)/5;
}    
console.log(`Mean of 10, 30, 22, 13 and 23 is ${mean(10,30,22,13,23)}`)


//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//QuickQuiz: Use a for loop to print a sting.

let friend = "Shruti Rawat"
for(let i =0; i<friend.length; i++){
  console.log(friend[i]);
}
