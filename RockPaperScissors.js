function RPS(user, computer) {
    if (user === computer) return "Tie";
    if (user === "rock" && computer === "paper") return "Computer wins";
    if (user === "rock" && computer === "scissors") return "User wins";
    if (user === "paper" && computer === "rock") return "user wins";
    if (user === "paper" && computer === "scissors") return "Computer wins";
    if (user === "scissors" && computer === "rock") return "Computer wins";
    if (user === "scissors" && computer === "paper") return "User wins";
    return "invalid input"
}
console.log(RPS("rock", "scissors"));