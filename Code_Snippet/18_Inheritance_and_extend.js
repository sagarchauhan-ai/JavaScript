//Inheritance and extend keyword
class animal{
    constructor(name, color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(`${this.name} is Running.`)
    }
    shout(){
        console.log(`${this.name} is Shouting.`)
    }
}

class monkey extends animal{
    eat(){
        console.log(`${this.name} is Eating Banana.`)
    }
}

let dog = new animal('Bruno', 'Brown')
dog.run()
dog.shout()

let monkey1 = new monkey('Kong', 'Black')
monkey1.eat()
monkey1.run()

