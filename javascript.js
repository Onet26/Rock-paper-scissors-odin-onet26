console.log("Hello! World")

function getComputerChoice(game) {
    return Math.floor(Math.random() * game);
}

console.log(getComputerChoice(3));