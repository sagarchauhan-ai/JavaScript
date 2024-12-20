//1.Write a program to show different alaerts when different buttons are clicked.

let alert1 = document.getElementById('alert1')
let alert2 = document.getElementById('alert2')
let alert3 = document.getElementById('alert3')

alert1.onclick=(e)=>{
  alert('This is your first warning')
}

alert2.onclick=(e)=>{
  alert('This is your second warning')
}

alert3.onclick=(e)=>{
  alert('This is your last warning')
}

//2.Create a website which is capable of storing bookmarks of your favorite websites using eventListener.

let bookmark1 = document.getElementsByClassName('bookmarks')[0]
let bookmark2 = document.getElementsByClassName('bookmarks')[1]
let bookmark3 = document.getElementsByClassName('bookmarks')[2]

let linK1 = function(e) {window.open ("https://www.instagram.com/")} 
let linK2 = function(e) {window.open ("https://www.twitter.com/")}
let linK3 = function(e) {window.open ("https://www.facebook.com/")}

bookmark1.addEventListener('click',linK1)
bookmark2.addEventListener('click',linK2)
bookmark3.addEventListener('click',linK3)

//3.Write a JS program to keep fetching contents of a website(Every 5 sec).

let bTn = document.getElementById('fetch');
let Count = 0;

const asyncfunction = async() => {
    let div = document.createElement('div');
    let db = document.getElementById('db');
    url = "https://jsonplaceholder.typicode.com/todos/1";
    div.innerHTML = await fetch(url);
    Count++;
    db.append(div);
  }

  bTn.onclick=()=>{
    Interval = setInterval(()=>{
      asyncfunction();
      console.log(Count)
      },5000)
  }

  let stop = document.getElementById('stop')
  let bold = document.getElementById('bold')

  stop.onclick=()=>{
    clearInterval(Interval)
    console.log('fetching stopped')
    bold.innerHTML = 'Data fetching completed.'
  }

//4.Create a glowing bulb effect using classlist toggle method in JS.

const glow = ()=>{document.querySelector("#beat").classList.toggle("dil")};
setInterval(()=>{glow()},500)