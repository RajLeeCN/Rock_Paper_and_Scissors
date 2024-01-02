const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
// this step is to get the span for later use from the HTML file, the next, we will userChoiceDIsplay.innerHTML = userChoice to change the content of the span.
const resultDisplay = document.getElementById('result')

let computerChoice

const possibleChoices = document.querySelectorAll('button')
// declare a variable to receive the NodeList object 
// querySelectorAll means we want ask the document to find all the elements that match the selector

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    // event is the formal parameter of the function, it is the event object
    userChoice = event.target.id
    // After this assignment, user Choice holds the string that is the id of the clicked element.
    userChoiceDisplay.innerHTML = userChoice
    // innerHtml allows us to change the content of the corrsponding HTML element 
    computerRandomChoice()
    getResult()
}))

function computerRandomChoice(){

    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    // Math.floor() is to round down the number to the nearest integer

    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    else if (randomNumber === 2){
        computerChoice = 'paper'
    }
    else if (randomNumber === 3){
        computerChoice = 'scissors'
    }   

    computerChoiceDisplay.innerHTML = computerChoice
};

function getResult(){

    let result

    if (computerChoice === userChoice){
        result = 'it is a draw'
    }
    else if (computerChoice ==='rock' && userChoice ==='paper'){
        result = 'you win'
    }
    else if (computerChoice ==='rock' && userChoice ==='scissors'){
        result = 'you lose'
    }
    else if (computerChoice ==='paper' && userChoice ==='rock'){
        result = 'you lose'
    }
    else if (computerChoice ==='paper' && userChoice ==='scissors'){
        result = 'you win'
    }
    else if (computerChoice ==='scissors' && userChoice ==='rock'){
        result = 'you win'
    }
    else if (computerChoice ==='scissors' && userChoice ==='paper'){
        result = 'you lose'
    }
    else{
        result = 'something went wrong'
    }

    resultDisplay.innerHTML = result;
};




