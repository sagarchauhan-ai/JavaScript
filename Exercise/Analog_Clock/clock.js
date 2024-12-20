let hour = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

function displayTime(){
    let date = new Date();

//Getting hour, min, secs from date
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())

let hRotation = 30*h + m/2;
let mRotation = 6*m;
let sRotation =  6*s;

// console.log({hRotation, mRotation, sRotation});

hour.style.transform = `rotate(${hRotation}deg)`;
min.style.transform = `rotate(${mRotation}deg)`;
sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);

let timer = document.getElementById('timer')
 setInterval(() => {
    let time = new Date()
    let options = {
        weekday: 'long', year: 'numeric',
        month: 'short',  day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    }
    timer.innerHTML = time.toLocaleTimeString('en-US', options)

}, 1000);