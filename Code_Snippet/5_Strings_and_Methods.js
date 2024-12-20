//Strings : Collection of Characters.
let string = 'Sagar Chauhan';
console.log(string)

console.log(string.length)

console.log(string[0])

console.log(string[1])

console.log(string[2])

console.log(string[3])

console.log(string[4])


//Template literals
let a = "Man"
let b = "Mohan"
let sentence = `${a} is the father of ${b}.`
console.log(sentence)


//Escape Sequence Characters
let H1 = "Headi\'ng1"
let H2 = "Headi\nng2"  //Newline
let H3 = "Headi\tng3"  //Tab
let H4 = "Headi\rng4"  //Carriage return
console.log(H1, H2, H3, H4)



//String Methods

let web = 'Sagar Chauhan   ';

console.log(web.toUpperCase())  
//Converts to Uppercase

console.log(web.toLowerCase())  
//Converts to Lowercase

console.log(web.slice(0,6))     
//Prints from 0th index upto 6th index which is not included.

console.log(web.slice(6))       
//Prints from 6th index upto end

console.log(web.replace("Chauhan", "Singh"))  
//Replaces 1st argument with 2nd argument

console.log(web.concat("Always\t", a, b))  
//Adds up two or more strings

console.log(web.trim(web))   
//Removes whitespaces

