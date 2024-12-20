//Hoisting is the process in which the interpretor appears to move the declarations to the top of the code.
console.log(a)
// console.log(b)
greet()
function greet(){
    console.log('Good Morning')
}

var a = 9;  //In case of var variable the declaration is hoisted.
let b = 10; //In case of let and const the variable should be declared at the beginning.

//Closure
//A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). 
//In other words, a closure gives you access to the outer function's scope from an inner function.

let message = "Hello"
function spam(){
    let message = "World"
    console.log(message)

    let a = function spam2(){
        console.log(`Hello ${message}`)
    }
    return a
}
print = spam()
print()

//Arrow Functions
//Arrow functions are a new feature in ES6 that allow us to write shorter function syntax.

const sayHello = (greeting,name)=> console.log(`${greeting} ${name}`)

const x = {
    name: 'Sagar',
    role: 'JS Developer',
    exp: '4 Years',
    show: function(){
        setTimeout(()=>{
            console.log(`Hello ${this.name}.\nYou are a ${this.role} with ${this.exp} experience.`)
        },2000)
    }
}
// sayHello('Good morning','Sagar')
x.show()
