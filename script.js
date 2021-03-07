let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_btn = document.getElementById('r-btn');
const paper_btn = document.getElementById('p-btn');
const scissors_btn = document.getElementById('s-btn');

function getComputerChoice () {
    const choices = ["r", "p", "s"];
    const getRandom = Math.floor(Math.random() * 3);
    return choices[getRandom];
}

function turnToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    else return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserScore = "user".fontsize(3).sub();
    const smallCompScore = "comp".fontsize(3).sub();
    userScore++
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
result_p.innerHTML = `${turnToWord(userChoice)}${smallUserScore} beats ${turnToWord(computerChoice)}${smallCompScore}. You win!`;
}

function lost(userChoice, computerChoice) {
    const smallUserScore = "user".fontsize(3).sub();
    const smallCompScore = "comp".fontsize(3).sub();
    compScore++
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
result_p.innerHTML = `${turnToWord(userChoice)}${smallUserScore} loses to ${turnToWord(computerChoice)}${smallCompScore}. You Lose!`;
} 


function draw(userChoice, computerChoice) {
    result_p.innerHTML = "It's a draw!";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lost(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}


rock_btn.addEventListener('click', () => {
    game('r');
})

paper_btn.addEventListener('click', () => {
    game('p');
})

scissors_btn.addEventListener('click', () => {
    game('s');
})