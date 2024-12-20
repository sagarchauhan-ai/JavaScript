//OOP is a programming based on the concept of objects, which can contain data and code.
//Data in the form of fields(attributes or properties) and Code in the form of procedure(methods).

//*****************************Prototype**********************************
//Prototype is a mechanism by which one object can share its properties and methods with other objects.
//Prototype is a property of an object.

let a ={
    FirstName : 'Sagar',
    Age : 23,
    run: ()=>{
        alert('self run')
    }
}
console.log(a)

let b = {
    run: ()=>{
        alert('run')
    }
}

b.__proto__={
    LastName : 'Chauhan',
}

a.__proto__ = b
a.run()
console.log(a.LastName)

