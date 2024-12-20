//1.Write a JS program to print the following after 2 sec delay : Hello World
const a = async(text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(text) 
        },2000)
    })
}
(
 async()=>{
 let text = await a('Hello')
 console.log(text)
 text = await a('World')
 console.log(text)
    }
)()

//2.Write a Js program to find average of numbers in an array using spread syntax.
function average(a, b, c, d){
    return (a+b+c+d)/4
}
let x = [56, 45, 89, 34]
console.log(average(...x))

/*3.Write a JS function which resolves a promise after n seconds. The function takes n as the parameter.
Use an IIFE to execute the function with different value of n.*/
const promise = async(n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`There's a delay of ${n} seconds`)
        },1000*n)
    }
)}
(
    async()=>{
        let delay = await promise(6)
        console.log(delay)
        delay = await promise(8)
        console.log(delay)
    }
)()

//4.Write a simple interest calculator using JS.
function simpleInterest(p,r,t){
    return (p*r*t)/100
}
console.log(`Your simple interest is :`,simpleInterest(1000,8,2))