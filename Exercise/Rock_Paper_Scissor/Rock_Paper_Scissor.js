let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const result = document.querySelector('.result');
const userResult = document.querySelector('#user-score');
const compResult = document.querySelector('#comp-score');

const getcompChoice = ()=>{
  const compChoiceArray = ['rock', 'paper','scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return compChoiceArray[randomNumber];
}
choices.forEach((choice)=>{
  choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
  })
})
const playGame =(userChoice)=>{
    const compChoice = getcompChoice();
    if(userChoice === compChoice){
       result.innerText = "It's a draw."
       result.style.backgroundColor = 'black';
    }
    else{
      if((userChoice === 'rock' && compChoice ==='scissors') || 
      (userChoice ==='paper' && compChoice === 'rock') || 
      (userChoice === 'scissor' && compChoice === 'paper')){
        userScore++;
        result.innerText = 'You won.';
        userResult.innerText = userScore;
        result.style.backgroundColor = 'green';
      } 
      else{
        compScore++;
         result.innerText = 'You Lose.';
         compResult.innerText = compScore;
         result.style.backgroundColor = 'red';
      }
    }
}
    
