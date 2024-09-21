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

function getHumanChoice () {

    let input = prompt("Please enter your choice: ");

    switch(input.toLowerCase()) {
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
        console.log(humanChoice + " - " + computerChoice);
        console.log("You win! Rock smashes scissors! Score: "+humanScore)
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        console.log(humanChoice + " - " + computerChoice);
        console.log("You lose! Paper covers rock!")
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        console.log(humanChoice + " - " + computerChoice);
        console.log("You win! Paper covers rock! Score: "+humanScore)
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        console.log(humanChoice + " - " + computerChoice);
        console.log("You lose! Scissors cuts paper!")
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        console.log(humanChoice + " - " + computerChoice);
        console.log("You win! Scissors cuts paper! Score: "+humanScore)
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        console.log(humanChoice + " - " + computerChoice);
        console.log("You lose! Rock smashes scissors!")
    }
    else if (humanChoice === computerChoice ){
        console.log(humanChoice + " - " + computerChoice);
        console.log("That's a tie!")
    }
}

//playRound(getHumanChoice(), getComputerChoice());


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

playGame();