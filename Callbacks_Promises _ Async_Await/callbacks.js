//Synchronous programming
//let prompt = require('prompt-sync')();

let a1 = prompt('What is your name?')
let b1 = prompt('What is your age?')
let c1 = prompt('What is your hobby?')

console.log(`${a1} is ${b1} years old and has ${c1} as a hobby.`)

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Asynchronous programming
console.log('Start')

setTimeout(function(e){
    console.log('Its an asynchorous programme.')
},5000)

console.log('End')

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Callback functions :: Error Handling
function loadScript(url, callback){
    let script = document.createElement('script')
    script.src = url
    
    script.onload = function(){
        console.log('Script Loaded')
        callback(null,url);
    }
    
    script.onerror = function(){
        console.log("404 Error!!")
        callback(new Error('Failure in script loading!'))
    }
    document.body.appendChild(script)
}

function loaded(error,url){
    if(error){
        alert('Error in script loading!')
    }
    else{
        alert(`Script loaded + ${url}`)
    }
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", loaded)