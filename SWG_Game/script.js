let snake = document.getElementById('snake');
let gun = document.getElementById('gun');
let water = document.getElementById('water');

let userScore = document.getElementById('userScore');
let compScore = document.getElementById('compScore');

let res = document.getElementById('result');
let btn = document.querySelector('button');

snake.addEventListener("click", () => game(0));
gun.addEventListener("click", () => game(1));
water.addEventListener("click", () => game(2));

function compChoice() {
    return Math.floor(Math.random() * 3);
}

function getEmoji(choice) {
    if (choice === 0) return "🐍";
    if (choice === 1) return "🔫";
    return "🌊";
}

function game(userChoice) {
    let comp = compChoice();

    if (comp === userChoice) {
        btn.textContent = `You and AI both choose ${getEmoji(comp)} It's a draw ✌️`;
    }
    else if ((comp == 0 && userChoice == 2) || (comp == 1 && userChoice == 0) || (comp == 2 && userChoice == 1)) {
        compScore.textContent = Number(compScore.textContent) + 1;
        btn.textContent = `AI chose ${getEmoji(comp)} and you chose ${getEmoji(userChoice)} AI wins 💀`;
    }
    else {
        userScore.textContent = Number(userScore.textContent) + 1;
        btn.textContent = `You chose ${getEmoji(userChoice)} and AI chose ${getEmoji(comp)} You win 🎉`;
        confetti({
            particleCount: 200, // Number of confetti particles
            spread: 70,         // How wide the confetti spreads
            origin: { y: 0.6 }  // Starting vertical position (0.5 is center)
        });
    }
}