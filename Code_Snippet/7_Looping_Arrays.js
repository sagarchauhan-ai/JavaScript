//Looping Through Arrays.
//For loop.
let x = [3, 76, 8, 0, 1]
for (i=0; i<x.length; i++){
  console.log((i))
}

//ForEach loop.
x.forEach((i) => {
console.log(i*i)
})

//Array.From : Used to craete an array from any othe object.
let object = "Sagar"
console.log(object)
console.log(typeof object)
  
let a = Array.from(object)
console.log(a)
console.log(typeof a)

//for.....of loop.
for(let i of x){          //For...of gives values of array.
  console.log(i)
}

//for.....in loop.
for(let i in x){          //For..in gives keys of array.
  console.log(i)
}
