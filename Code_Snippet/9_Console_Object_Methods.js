console.log(console)

console.error("404 Error")
//used for errors

console.assert(false)
console.assert(true)
//used for assertion of a statement

console.clear()
//clears the console 

let obj = {
    a : 1, b : 2, c : 3, d : 4,
}
console.table(obj)
//displays a tabular data

console.warn("You are under age!!")
//used for warning

console.info('Hey this file is confidential.')
//used for special information

console.time(obj)
console.timeEnd(obj)
//displays time taken by a block of code to execute.