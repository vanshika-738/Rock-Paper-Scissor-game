let userscorep = document.querySelector("#userscore");
let compscorep = document.querySelector("#compscore");
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

let usersc = 0;
let compsc = 0;

const gencomchoice = () => {
    const option = ["rock", "paper", "scissor"]
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
};

const drawgame = () => {
    msg.innerText = "Game draw. Play again!";
    msg.style.backgroundColor = "#056781";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        usersc++;
        userscorep.innerText = usersc;
        msg.innerText = `You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compsc++;
        compscorep.innerText = compsc;
        msg.innerText = `You Lose!  ${compchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});

const playgame = (userchoice) => {
    const compchoice=gencomchoice();

    if (userchoice == compchoice) {
        drawgame();
    }
    else {
        let userwin = true;

        if (userchoice == "rock") {
            userwin = compchoice == "scissor" ? true: false;
        }
        else if (userchoice == "paper") {
            userwin = compchoice == "scissor" ? false : true;
        }
        else {
            userwin = compchoice == "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);

    }
}
