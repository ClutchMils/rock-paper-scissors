// console.log("hello");

function getComputerChoice(){
    
    const min = 1;
    const max = 3;
    const computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;

    return computerChoice;
}

//  console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors","");

    return humanChoice;
}

// console.log(getHumanChoice());



// console.log(playRound(getHumanChoice(),getComputerChoice()));

function playGame (){
    let humanScore = 0;
    let computerScore = 0; 
    let i = 1;

    function playRound(humanChoice, computerChoice){
    let lowerCaseString = humanChoice.toLowerCase();
    
    switch(lowerCaseString){
        case "rock":
            if (computerChoice == 1){
                console.log("Draw! Rock is equal to Rock");
            }
            else if(computerChoice == 2){
                console.log("You lose! Paper beats Rock");
                return computerScore ++;
            }
            else {
                console.log("You win! Rock beats Scissors");
                return humanScore ++;
            }
            break;
        case "paper":
            if (computerChoice == 1){
                console.log("You win! Paper beats rock");
                return humanScore ++;
            }
            else if(computerChoice == 2){
                console.log("Draw! Paper equals paper");
            }
            else {
                console.log("You lose! Scissors beats Paper");
                return computerScore ++;
            }
            break;
        case "scissors":
            if (computerChoice == 1){
                console.log("You lose! Rock beats Scissors");
                return computerScore ++;
            }
            else if(computerChoice == 2){
                console.log("You win! Scissors beats Paper");
                return humanScore ++;
            }
            else {
                console.log("Draw! Scissors equals Scissors");
            }
            break;
        default:
            console.log("Enter rock, paper, scissors");
    }
}

for (i=1; i>=5; i++){
    console.log(playRound(getHumanChoice(), getComputerChoice()));
}
return 
}