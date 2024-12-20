//----------------------------Docs for events listeners-------------------------------------------------------------------------------------------------------

//onclick event
let x = document.getElementById('btn')
x.onclick = ()=>{
    z = document.getElementsByClassName('container')[1]
    z.innerHTML = "<b>It's an event.</b>"
    alert('You clicked the button.!.!')
}

//-----------------------------------------------------------------------------------------------------------------------------------

//onmouseenter event
let y = document.getElementById('bttn')
y.onmouseenter = ()=>{
    alert('You hovered the button.!.!')
}

//-----------------------------------------------------------------------------------------------------------------------------------

//onclick event to open a link through a button
let a = document.getElementById('link')
a.onclick=(e)=>{
    window.open('https://www.youtube.com/@theaverageguyy')
    console.log(e)
    console.log(e.target)
    console.log(e.type)
    console.log(e.x, e.y)
}

//-----------------------------------------------------------------------------------------------------------------------------------

//addEventListener and removeEventListener
let btn = document.getElementById('AI')

let link1 = function(e){
    location.href('https://chat.openai.com/')
}

let link2 = function(r){
    location.href('https://www.google.com/')
}


btn.addEventListener('click', link1)
btn.addEventListener('click', link2)

let choice1 = 'GOOGLE'.toLocaleLowerCase()
let choice2 = 'CHATGPT'.toLocaleLowerCase()

let input = prompt('Enter input to open ChatGPT OR Google.')
    if(input===choice2){
        btn.removeEventListener('click',link2 )
        alert('Click on "CLICK ME" to open ChatGPT.')
    }
    else if(input===choice1){
        btn.removeEventListener('click', link1)
        alert('Click on "CLICK ME" to open Google.')
    }
    else{
        alert('Invalid input.\n Refresh the page and Try Again!')
    }
   

