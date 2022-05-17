let resultPlayer = 0;
let resultComputer = 0;

function ComputerPlay(){
    // Random number between 0 and 2
    // If 1 rock, if 2 paper, if 3 scissors

    let randomNumber = Math.floor(Math.random() * 3);
    let word;

    if (randomNumber === 0){
        word = "Rock";
    }
    else if (randomNumber === 1){
        word = "Paper";
    }
    else if (randomNumber === 2){
        word = "Scissors";
    }
    return word;

    //Array 3 words rock paper scissors
    //Pick random in array

    let wordArray = ["Rock", "Paper", "Scissors"];

    return wordArray[Math.floor(Math.random() * (wordArray.length))];
}

function SingleRound(playerSelection, computerSelection){
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

    // Paper wins rock
    // Rock wins scissors
    // Scissors wins paper
}

function Game(){
    for(let i = 0; i < 5; i++){
        let playerSelectionPrompt = prompt("Rock Paper or Scissors?");
        let computerPlay = ComputerPlay();

        let singleRound = SingleRound(playerSelectionPrompt, computerPlay)

        console.log(singleRound);

        if(singleRound === "Tie"){
            i--;
        }
    }

    console.log(Results());
}

function Results(){
    if(resultPlayer > resultComputer){
        return "Player Wins by " + resultPlayer + " " + resultComputer;
    }
    else{
        return "Computer Wins by " + resultComputer + " " + resultPlayer;
    }
}

Game();
