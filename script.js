let resultPlayer = 0;
let resultComputer = 0;

const rockButton = document.querySelector('#Rock');
const paperButton = document.querySelector('#Paper');
const scissorsButton = document.querySelector('#Scissors');
const results = document.querySelector('#Results');
const winner = document.querySelector('#Winner');

rockButton.addEventListener('click', () => results.textContent = SingleRound('Rock', ComputerPlay()));
paperButton.addEventListener('click', () => results.textContent = SingleRound('Paper', ComputerPlay()));
scissorsButton.addEventListener('click', () => results.textContent = SingleRound('Scissors', ComputerPlay()));

function ComputerPlay(){
    let wordArray = ["Rock", "Paper", "Scissors"];

    return wordArray[Math.floor(Math.random() * (wordArray.length))];
}

function SingleRound(playerSelection, computerSelection){
    let isWinner = false;
    if(resultPlayer >= 5 && !isWinner){
        isWinner = true;
        winner.textContent = "Player Wins by " + resultPlayer + " " + resultComputer;
    }
    else if(resultComputer >= 5 && !isWinner){
        isWinner = true;
        winner.textContent = "Computer Wins by " + resultComputer + " " + resultPlayer;
    }

    if(isWinner) return;

    if(playerSelection === "Rock" && computerSelection === "Scissors"){
        resultPlayer++;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        resultPlayer++;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        resultPlayer++;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else if(playerSelection === computerSelection){
        return "Tie";
    }
    else{
        resultComputer++;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}