//Arrays : Collection of item; Variables which can store more than one value.

let array = [1, 2, 3, 4 ,5,]
array[5] = 6                      //  New Values(Elements) can be added in an array.
array[4] = 7                      //  Values(Elements) can be changed in an array.
console.log(array)                // Arrays are mutable and can be changed or modified.  
console.log(array[2])
console.log(array[4])
console.log(array.length)

const prompt = require('prompt-sync')();

let arr = prompt('Enter array number :');
arr = Number.parseInt(arr)
for(let i=1; i<=arr; i++){
  console.log([i])
}


//Array Methods

let a = [23, 45, 67, 210, 45, 7]
let b = [433, 67, 89, 304, 67, 98]

let c = a.concat(b)     
console.log(c)
//Used to join one or more arrays together.

let X = a.toString()  
console.log(X)
//Converts an array to a string.

let Y = a.join("_")   
console.log(Y)
//Joins an array to an argument.

let Z = a.pop()    
console.log(Z)
//pop returns the popped out element.

let A = a.push(34)    
console.log(A)
//push returns the new array length.

let B = a.shift()    
console.log(B)
//shift removes the first element and returns it.

let C = a.unshift(78)    
console.log(C)
//unshift adds an element to the beginning of the array and returns new array length.

delete a[0];          
console.log(a)
//Deletes the given element but the length is not affected.


a.sort()
console.log(a)            
//Sort is to sort array alphabetically.

let compare =(A, B)=>{
  return A - B;
}
a.sort(compare)
console.log(a)            
//Compare function compares the array value and sort it in ascending or desending order.

b.reverse()
console.log(b)
//reverses the whole array

b.splice(3, 2, 34, 65, 88)     
console.log(b)
//Splice is used to add items to an array.

let deletedValues = a.splice(3, 4, 34, 65, 88)    
console.log(deletedValues)
//Returns the deleted values.

let n = b.slice(3,5)               
console.log(n)
//Slices out a piece of array and returns a new array.



