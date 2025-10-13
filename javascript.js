
let computerScore = 0;
let humanScore = 0;
let countRounds = 0;

function getComputerChoice(){
    
    const min = 1;
    const max = 3;
    const computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;

    return computerChoice;
}

 // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    // alert(button.id);
    countRounds ++;
    function playRound(humanChoice, computerChoice){
        
    
    switch(humanChoice){
        case "rock":
            if (computerChoice == 1){
                return "Draw! Rock is equal to Rock";
            }
            else if(computerChoice == 2){
                computerScore ++;
                return "You lose! Paper beats Rock";            
            }
            else {
                humanScore ++;
                return "You win! Rock beats Scissors";         
            }
        case "paper":
            if (computerChoice == 1){
                humanScore ++;
                return "You win! Paper beats rock";   
            }
            else if(computerChoice == 2){
                return "Draw! Paper equals paper";
            }
            else {
                computerScore ++;
                return "You lose! Scissors beats Paper";    
            }
        case "scissors":
            if (computerChoice == 1){
                computerScore ++;
                return "You lose! Rock beats Scissors";
            }
            else if(computerChoice == 2){
                humanScore ++;
                return "You win! Scissors beats Paper"; 
            }
            else {
                return ("Draw! Scissors equals Scissors");
            }
        // default:
        //     return ("Enter rock, paper, scissors");
        }

   
    }

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = playRound(button.id, getComputerChoice())
    + " "+ "Player Score: " + humanScore + " "+"Computer Score: " + computerScore;

container.appendChild(content);

if(countRounds == 5){
    
    if (humanScore > computerScore) {
    
        container.textContent = "You win!" + "Player Score: " + humanScore + " " +"Computer Score: " + computerScore;
    } 
    else 
        if(humanScore == computerScore){
            container.textContent = "Draw!" + "Player Score: " + humanScore + " " +"Computer Score: " + computerScore;
        }

    else {
    container.textContent = "You lose!" + "Player Score: " + humanScore + " " +"Computer Score: " + computerScore;
    }

humanScore = 0;
computerScore = 0;
countRounds = 0;
}


  });
});









