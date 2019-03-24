var userScore=0;
var computerScore=0;
const userScore_span =document.getElementById("user-score");
const computerScore_span =document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result >p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getComputerChoice() {
    const choices=["r","p","s"];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter== "r") return "Rock";
    if(letter=="p") return "Paper";
    return "Scissor";  
}

function win(user,computer) {
    const smallWordUser="user".fontsize(3).sub();
    const smallWordComputer="comp".fontsize(3).sub();
    const userChoice_div=document.getElementById(user);
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    
    result_p.innerHTML=`${convertToWord(user)}${smallWordUser} beats ${convertToWord(computer)}${smallWordComputer}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'),300);
}

function lose(user,computer){
    const smallWordUser="user".fontsize(3).sub();
    const smallWordComputer="comp".fontsize(3).sub();
    const userChoice_div=document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord(user)}${smallWordUser} loses to ${convertToWord(computer)}${smallWordComputer}. You lose!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() =>userChoice_div.classList.remove('red-glow'),300);
} 
function draw(user,computer){
    const userChoice_div=document.getElementById(user);
    const smallWordUser="user".fontsize(3).sub();
    const smallWordComputer="comp".fontsize(3).sub();   
    result_p.innerHTML=`${convertToWord(user)}${smallWordUser} equals ${convertToWord(computer)}${smallWordComputer}. It's a draw!`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'),300);
}

function game(userChoice) {
    const computerChoice=getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;

    }
}

function main() {
    rock_div.addEventListener('click', () =>
        game("r"));
    
    paper_div.addEventListener('click', () =>
        game("p"));
    
    scissor_div.addEventListener('click', () =>
        game("s"));

}

main();