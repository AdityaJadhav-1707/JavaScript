// Rock-Paper-Scissor

function rps(user, computer) {
    if (user === computer) return "Draw";

    if (user === "rock" && computer === "scissor") return "user";
    if (user === "paper" && computer === "rock") return "user";
    if (user === "scissor" && computer === "paper") return "user";

    return "computer";
}

console.log(rps("rock", "paper"));