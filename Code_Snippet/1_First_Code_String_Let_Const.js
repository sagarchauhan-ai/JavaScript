// string
console.log("My name is Sagar Chauhan.\nThis is my first code.")


// let and const

let x = 76
let y = "Javascript"
let z = true
{
    let z = false   // let is block scoped while
    console.log(z)  //var is globally scoped 
}
console.log(x, y, z)


const Bike = {
    Dominar : "400cc",
    ApacheRR310 : "312cc",
    HeroSplender : "125cc",
}
console.log(Bike.ApacheRR310)
console.log(Bike.Dominar)
console.log(Bike.HeroSplender)