let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset')
let newGame = document.querySelector('.new')
let p = document.querySelector('p')

let turnX = true;
let count = 0;

let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener('click',()=>{
        if(turnX){
            box.innerText = 'X';
            turnX =false;
            box.style.color = 'black';
        }
        else{
            box.innerText = 'O';
            turnX = true;
            box.style.color = 'white';
        }
        count++;
        box.disabled = true;
        console.log(count);
        checkWinner();
    })
})

const reset = ()=> {
    location.reload();
    count = 0;
}
const disableBoxes = ()=> {
    for(box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=> {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner =() =>{
    let winner = false;
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 !== "", pos2 !== "", pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                p.innerText = `Congratulatins! ${pos1} wins...`;
                newGame.classList.remove('hide');
                resetBtn.style.display = 'none';
                disableBoxes();
                winner = true;
            }
        }    
    }

    if(!winner && count === 9){
        p.innerText = "It's a draw !";
        newGame.classList.remove('hide');
        resetBtn.style.display = 'none';
    }
}

newGame.addEventListener('click', reset)
resetBtn.addEventListener('click', reset)