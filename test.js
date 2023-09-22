let answer = 5;
let number = prompt("Guess a number");
let attempts = 4;

while (attempts > 1) {
    attempts--;
    if(number > answer) {
        alert("Too high!");
        number = prompt("Guess again. You have " + attempts)
    }

    alert()
}
