document.write('Hello!')

//setTimeout is used to delay the execution  of a function for specified milliseconds. 
let a = setTimeout(function(){
alert("There's a delay of 2 sec.")
},1000)

let b = confirm('Do you want to run the setTimeout?')
if(b == false){
    clearTimeout(a); // stops/cancels the execution of the function if it hasn’t been executed yet.
}

console.log(a); // returns the timerID value assigned by the browser to the timeout object.

const add = (x, y, z) => {
    alert(`Yes! I'm adding a, b, c ${x + y + z}`)
    return x + y + z;
}

setTimeout(add, 2000, 20, 30, 10)


//setInterval is  similar to setTimeout but instead of executing once only, it repeatedly executes the given code in every time interval.
// setInterval(function(){
//     alert('This message appears in every 5 second');
// },5000)



let count = 0;
const pC = diff = (x1, y1, z1) => {
    alert(`Yes! I'm subtracting a, b, c ${x1-y1-z1}`)
    count++;
    return x1 - y1 - z1;
    }
// console.log(c)

const intervalID = setInterval(()=>{
    let result = diff(20, 5, 5)
    if(count === 5){
    let stop = confirm("Do you want to stop this Interval?")
    if(stop === true){
        clearInterval(intervalID)
    }
    else{
        count = 0;
    }
    }
},2000)



