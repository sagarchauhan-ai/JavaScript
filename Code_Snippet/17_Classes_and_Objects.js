//*********************Classes and Constructors****************************
class Form{
    fill(name, trainNum){
        this.name = name
        this.trainNum = trainNum
    }
    submit(){
        alert(`${this.name} : Your form is submitted. Train No. ${this.trainNum}`)
    }
    cancel(){
        alert(`${this.name} : Your form is cancelled. Train No. ${this.trainNum}`)
    }
}
let form1 = new Form()
form1.fill('Rajesh', 12565)

let form2 = new Form()
form2.fill('Suresh', 45789)

form1.submit()
form2.cancel()


let name = prompt('Enter your name :')
let age = prompt('Enter your age :')
let phNum = prompt('Enter your phone number :')


class Registration {
    constructor(name, age, phNum, regNum){
        this.name = name
        this.age = age
        this.phNum = phNum
        this.regNum = regNum
    }
    success(){
        alert(`${this.name} : Your registration is completed. Registration number ${this.regNum}.`)
    }
    fail(){
        alert(`${this.name} : Your registration is failed.`)
    }
    
}

let register1 = new Registration(name, age, phNum, 4782687236236)
register1.success()

let register2 = new Registration(name, age, phNum, 3764871354832)
register2.fail()






