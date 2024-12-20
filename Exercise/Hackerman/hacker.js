//Write a JS program to pretend to look like a hacker.Write an async/await function which will simply display the following output.

let message = document.getElementById("message");

let button = document.getElementById('btn')
        
let Add = function(e){
    let input = document.getElementById('name')
    let Name = input.value
    console.log(Name)
    
    let number = document.getElementById('number')
    let Num = number.value.toString()
    
    if(Name == false && Num == false){
        check()
    }
    else{
        Name = input.value
        start(Name)
    }
}


button.addEventListener('click', Add)

let get = document.getElementsByClassName('alert')[0]
let set = document.createElement('div')
function check(){
    get.insertAdjacentElement('afterend',set)
    set.innerHTML = `<div class="alert-danger">
        Please enter name and number.
        </div>`
    }
        
async function start(Name){
    set.remove()
    async function h1(){
        setTimeout(() => {
            message.innerHTML = message.innerHTML + "Initializing Hack Simulation...."+'<br>'
        },3000);
    }
    const a = async()=>{let f1 = await h1()}
    await a()
    
    async function h2(){
        setTimeout(() => {
            message.innerHTML = message.innerHTML + "Connecting to the server...."+'<br>'
        },6000);
    }
    const b = async()=>{let f2 = await h2()}
    await b()
    
    async function h3(){
        setTimeout(() => {
            message.innerHTML = message.innerHTML + `Retrieving username on Social Media platforms....`+'<br>'
        },9000);
    }
    const c = async()=>{let f3 = await h3()}
    await c()
    
    async function h4(){
        setTimeout(() => {
            message.innerHTML = message.innerHTML + `Retrieving  ${Name}'s email address....`+'<br>'
        },12000);
    }
    const d = async()=>{let f4 = await h4()}
    await d()
    
    async function h5(){
        setTimeout(() => {
            message.innerHTML =  message.innerHTML + `Match Found ${Name}'s Instagram [], Facebook[], E-mail[]....`+'<br>'
        },15000);
    }
    const e = async()=>{let f5 = await h5()}
    await e()
    
    async function h6(){
        setTimeout(() => {
            message.innerHTML =  message.innerHTML + `Completing the Hack Simulation....`+'<br>'
        },18000);
    }
    const f = async()=>{let f6 = await h6()}
    await f()
    
    async function h7(){
        setTimeout(() => {
            prank.innerHTML = `You were tricked !. Look at the camera at top of your screen.`
        },21000);
    }
    const g = async()=>{let f7 = await h7()}
    await g()
    
}
document.cookie = "Name=Sagar"
console.log(document.cookie)




