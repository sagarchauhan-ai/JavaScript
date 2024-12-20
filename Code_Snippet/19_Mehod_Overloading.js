class Employee{
    constructor(firstName){
        this.firstName = firstName
    }
    login(){
        console.log(`Employee ${this.firstName} has logged in.`)
    }
    logoff(){
        console.log(`Employee ${this.firstName} has logged off.`)
    }
    reqLeaves(leave){ 
        console.log(`Employee is requesting for ${leave} leaves.`)
    }
}

class Programmer extends Employee{
    lang(proLang){
    console.log(`Employee uses ${proLang} programming language.`)
    }
    reqLeaves(){
        super.reqLeaves(4)
    }
}

let emp1 = new Employee("Abigail")
emp1.login()
emp1.reqLeaves(3)
emp1.logoff()

let prog1 = new Programmer('John')
prog1.login()
prog1.lang("JavaScript")
prog1.reqLeaves()
prog1.logoff()


//Static Keyword
class client{
    constructor(firstName){
        this.firstName = firstName
    }
    request(){
        console.log(`Client ${this.firstName}  has requested.`)
    }
    static capitalize(firstName, lastName){
        let a =  firstName.charAt(0).toUpperCase() + firstName.substr(1, firstName.length) 
        let b = lastName.charAt(0).toUpperCase() + lastName.substr(1, lastName.length)
        return `${a} ${b}`
    }
}

let client1 = new client(client.capitalize('prachi','rawat'))
client1.request()

let client2 = new client(client.capitalize('bruce', 'banner'))
client2.request()


//Getter, Setter and instanceOf

class school{
    constructor(name, age, standard){
        this._standard = standard
        this.name = name
        this.age = age
    }
    rank(percent){
        console.log(`Name : ${this.name} | Age : ${this.age}. Scored ${percent} in ${this._standard}th board.`)
    }
    set newclass(newclass){
        this._standard = newclass
    }
    get newclass(){
        return this._standard
    }
}

class Class extends school{
     present(){
        console.log('Student is present.')
     }
     absent(){
        console.log('Student is absent.')
     }
}


let student1 = new Class('Rajesh', 17, 10)
student1.rank('91%')
student1.newclass = 11
console.log(`You are promoted to ${student1.newclass}th class.`)

let student2 = new Class('Kamlesh',16, 10)
student2.rank('94%')
student2.newclass = 11
console.log(`You are promoted to ${student2.newclass}th class`)

//instanceof operator
console.log(student1 instanceof Class)
console.log(student2 instanceof school)