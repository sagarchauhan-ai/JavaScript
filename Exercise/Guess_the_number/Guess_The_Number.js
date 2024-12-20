
let randomNumber = Math.floor(Math.random()*100)
console.log(randomNumber)

let numberOfguesses = 0;
let score = 100;

let check = document.getElementById('check')
function startGame(){
    let input = document.getElementById('number_input').value
    console.log(input)
    
    if(isNaN(input) || input === ""){
        check.innerHTML = 'Please enter a valid number between 1 to 100.'
    }
    else{
        numberOfguesses++;
        input = Number.parseInt(input)
        console.log(numberOfguesses)
    }
    let finalScore = score - numberOfguesses*2;
    
    if(input === randomNumber){
        let winner = document.getElementById('winner')
        check.remove()
        winner.innerHTML = `Hurray! You guessed the correct number [ ${randomNumber} ] in ${numberOfguesses} ${numberOfguesses === 1 ? 'guess' : 'guesses'}.\nYour score is ${finalScore}.`
        resetGame()
    }
    else if(input < randomNumber && input > 0){
        check.remove()
        winner.innerHTML = 'Too low! Try Again.'
    }
    else if(input > randomNumber && input > 0 ){
        check.remove()
        winner.innerHTML = 'Too high! Try Again.'
    }

    if(numberOfguesses === 10){
        winner.innerHTML = `GAME OVER! You used all your chances. The correct number was ${randomNumber}.`
        check.remove()
        resetGame()
    }
}

function resetGame(){
    let playAgain = document.createElement('button')
    playAgain.innerHTML = 'Play Again'
    playAgain.setAttribute('class', 'btn')
    playAgain.onclick = function(){
        location.reload()
        }
    winner.insertAdjacentElement('afterend', playAgain)
}