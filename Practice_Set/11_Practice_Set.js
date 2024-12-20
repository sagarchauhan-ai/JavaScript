//1. Create a JS class to create a complex number.Create a constructor to set the real and complex part.
// Write a method to add two complex numbers.
//Use getter and setter to get and set the value of real & imaginary parts of the complex number.
class complexNum{
    constructor(real, imaginary){
        this._real = real
        this._imaginary = imaginary
    }
    add(num){
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }
    get real(){
        return this._real
    }
    get imaginary(){
        return this._imaginary
    }
    set real(newReal){
        this._real = newReal
        console.log(`Real part : ${newReal}`)
    }
    set imaginary(newImaginary){
        this._imaginary = newImaginary
        console.log(`Imaginary part : ${newImaginary}`)
    }
}

let a = new complexNum()
a.real = 12
a.imaginary = 7
console.log(`Complex Number : ${a.real}+${a.imaginary}i`)

let b = new complexNum()
b.real = 5
b.imaginary = 9
console.log(`Complex Number : ${b.real}+${b.imaginary}i`)

a.add(b)
console.log(`Complex Number : ${a.real}+${a.imaginary}i`)


//2. Create a class student from a class human.Override a method & see changes.
//See if student is an instance of human class.
class human{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    walk(){
        console.log(`Human is walking.`)
    }
    introduce(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

class student extends human{
    walk(){
        console.log(`Student is walking.`)
    }
}

let x = new human('John', 8)
x.introduce()
x.walk()
let y = new student('Nick',9)
y.introduce()
y.walk()

console.log(y instanceof human)

