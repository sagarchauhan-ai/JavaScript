//Map : Creates a new array by performing some operation on each array element.

const a = [45, 23, 21, 30]
a.map((value)=>{
console.log(value += value)
})

const b = [3, 6, 7, 1, 4]
c = b.map((value, index, array)=>{
console.log(value, index, array)
return value + index
})
console.log(c)


//Filter : Filters an array with values that passes a test and creates a new array.
 const x = [6, 45, 32, 1, 7 ,8]
 let y = x.filter((i)=>{
    return i<10
 })
 console.log(y)


 //Reduce : Reduces an array to a single value.
 let n = [12, 13, 14, 15, 16]
 let m = n.reduce((i,j) => {
return i+j
 })
 console.log(m)

 const l = (i,j)=>{
    return i-j
 }
 
let reduce = n.reduce(l)
console.log(reduce)