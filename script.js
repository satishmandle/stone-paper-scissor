let userScore=0;
let computerScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const user= document.querySelector("#user-score");
const comp= document.querySelector("#computer-score");





const genCompChoice = () =>{
    let options =["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]; 
}
const drawGame=() => {
    console.log("game was draw");
    msg.innerText="Game  was draw  . play again";
    msg.style.backgroundColor = "grey";

}

const showWinner =(userWin)=>{
    if(userWin){
        userScore++;
        console.log("you won...!");
        msg.innerText="You won..!";
        user.innerText=userScore;
        msg.style.backgroundColor = "green ";
         
    }
    else{
        computerScore++;
        console.log("You lose");
        msg.innerText="You lost  . try again ";
        comp.innerText=computerScore;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    console.log("User choice= ",userChoice);
    //generate computer choice 
    const compChoice=genCompChoice();
    console.log("computer  choice",compChoice);

    if(userChoice===compChoice){
        //draw game 
        drawGame();

    }
    else{
        let userWin=true;
        if(userChoice === 'rock'){
            // scissors or paper
            userWin=compChoice === 'paper'?false: true;
        }
        else if (userChoice=="paper"){
            //rock or scissors
            userWin= compChoice === "scissors"? false : true;

        }
        else{
            // rock ,paper
            userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin);
    }
    
     
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        console.log("choice was clicked");
        const userChoice= choice.getAttribute("id");
        console.log("Choice clicked  was ", userChoice);
        playGame(userChoice);
        
    })

    })
      
