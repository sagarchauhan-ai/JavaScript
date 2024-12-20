//try and catch method.
/*setTimeout(() => {
    console.log('*Starting the process of making tea.')
},1000);

setTimeout(() => {
    console.log('Step 1 : Take a pan and fill it with 100 ml of water..')
},2000);

setTimeout(() => {
    console.log('Step 2 : Boil the water for 10 min and add 1ts of tea leaves and ginger.')
},4000);

setTimeout(() => {
    console.log('Step 3 : Boil the water with tea leaves until the leaves are properly mixed..')
},6000);

setTimeout(() => {
    console.log('Step 4 : After that add 1 cup milk and boil the tea on lowered flame for atleast 10 min.')
},8000);

setTimeout(() => {
    console.log('Step 5 : Filter the tea in another jar.')
},10000);

setTimeout(() => {
    console.log('*Finally the tea is ready to serve.')
},12000);

setTimeout(()=>{
    try{
        console.log(coffee)
    }
    catch(error){
        console.log(error)
        console.log('Coffee is not available.')
    }
},14000)

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//The Error Object and Custom Errors
try {
    let age = prompt('Enter your age :')
    age = Number.parseInt(age)
    if(age<18){
        throw new Error('Invalid age.')
    }
    else if(age>100){
        throw new Error('This is not possible.')
    }
    else{
        console.log('You are eligible to vote.')
    }
} 
catch (error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

console.log('The Script is still running.')*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------

//Finally Clause
const x = ()=>{
    try {
        let a = 0;
        console.log(program)
        console.log("Program ran successfully.")
        return
    }
    catch (error) {
        console.log("Program got some error")
        console.log(error)
    }
    finally{
        console.log("The finally clause is always executed.")
    }
}
x()
