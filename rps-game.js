function getComputerChoice () {

    let rand_choice;
    let comp_choice;

    rand_choice = Math.floor(Math.random() * (4 - 1) + 1);
    //console.log("number: "+rand_choice);

    switch(rand_choice) {
        case 1:
            return comp_choice = "rock"
            break;
        case 2:
            return comp_choice = "paper"
            break;
        case 3:
            return comp_choice = "scissors"
            break;
        }
}

//console.log(getComputerChoice())

function getHumanChoice(choice) {

   // let input = prompt("Please enter your choice: ");

    switch(choice) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
        default:
            return console.log("That wasn't a valid option!");

        }

}
//console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice){

    if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        const results = document.querySelector("#results");
        results.textContent = "You win! Rock smashes scissors!"
        console.log(humanChoice + " - " + computerChoice);
        console.log("You win! Rock smashes scissors!")
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        const results = document.querySelector("#results");
        results.textContent = "You lose! Paper covers rock!"
        console.log(humanChoice + " - " + computerChoice);
        console.log("You lose! Paper covers rock!")
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        const results = document.querySelector("#results");
        results.textContent = "You win! Paper covers rock!"
        console.log(humanChoice + " - " + computerChoice);
        console.log("You win! Paper covers rock!")
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        const results = document.querySelector("#results");
        results.textContent = "You lose! Scissors cuts paper!"
        console.log(humanChoice + " - " + computerChoice);
        console.log("You lose! Scissors cuts paper!")
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        const results = document.querySelector("#results");
        results.textContent = "You win! Scissors cuts paper!"
        console.log(humanChoice + " - " + computerChoice);
        console.log("You win! Scissors cuts paper!")
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        const results = document.querySelector("#results");
        results.textContent = "You lose! Rock smashes scissors!"
        console.log(humanChoice + " - " + computerChoice);
        console.log("You lose! Rock smashes scissors!")
    }
    else if (humanChoice === computerChoice ){
        const results = document.querySelector("#results");
        results.textContent = "That's a tie!"
        console.log(humanChoice + " - " + computerChoice);
        console.log("That's a tie!")
    }

        //Display score
    const score = document.querySelector("#score");
    score.textContent = "Score: "+humanScore;

    if (humanScore === 5){
    score.textContent = "You won the RPS Game!! wooHOO!!! Score: "+humanScore;
    console.log("You won the RPS Game!! wooHOO!!!")
    }
    else if (computerScore === 5){
    score.textContent = "You lost the RPS Game! booHOO :(  Score: "+humanScore;
    console.log("You lost the RPS Game! booHOO :( ")
    }
}

//TODO: diasable buttons after the 

//Rock Button
const btnRock = document.querySelector("#btn-rock");
btnRock.addEventListener("click", () => {
 console.log("Rock");
 playRound(getHumanChoice("rock"), getComputerChoice());
});

//Paper Button
const btnPaper = document.querySelector("#btn-paper");
btnPaper.addEventListener("click", () => {
  console.log("Paper");
  playRound(getHumanChoice("paper"), getComputerChoice());
});
//Scissors Button
const btnScissors = document.querySelector("#btn-scissors");
btnScissors.addEventListener("click", () => {
   console.log("Scissors");
   playRound(getHumanChoice("scissors"), getComputerChoice());
});





/*
-------- For now, remove the logic that plays exactly five rounds.

function playGame(){

    for (let i = 1; i <= 5; i++) {
        console.log("Round: "+  i);
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Your score is: "+humanScore);
    }

    if (humanScore > computerScore){
        console.log("You won the RPS Game!! wooHOO!!!")
    }
    else if (humanScore === computerScore){
        console.log("That's a tie between you and me! ")
    }
    else{
        console.log("You lost the RPS Game! booHOO :( ")
    }
}
    */

//playGame();