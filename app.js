let Username = prompt("What's your name?");
alert("Hi " + Username + ". Nice to meet you.");
console.log("User's name is " + Username);

function myQuiz() {
  let question1 = prompt("Is Vicky's surname Rooney?").toLowercase;
  if (question1 === "yes" || question1 === "no") {
    alert("Either is correct. Vicky has 3 surnames");
  }

  let question2 = prompt("Does Vicky know Akkadian?").toLowercase;
  if (question2 === "no") {
    alert("No, but she does know Egyptian hieroglyphic, which is > all Assyrian languages");
  } else {
    alert("no, that's not correct");
  }

  let question3 = prompt("Does Vicky have a cat named Kira?").toLowercase;
  if (question3 === "no") {
    alert("Thats the correct answer, Kira is her Homuncula.");
  } else {
    alert("Thats incorrect, Bo is her cat. Kira is a Homuncula.");
  }

  let question4 = prompt("Is Vicky's favourite game on the PS2 Silent Hill?").toLowercase;
  if (question4 === "yes") {
    alert(
      "Thats the correct answer, Vicky's favourite game on the PS2 Silent Hill."
    );
  } else {
    alert("Thats incorrect.");
  }

  let question5 = prompt("Would Vicky would like to work for Google?").toLowercase;
  if (question5 === "no") {
    alert("Thats the correct answer, Vicky would not like to work for Google.");
  } else {
    alert("Thats incorrect.");
  }

let answer = 5;
let number = prompt("What number between 1 and 10 am I thinking of?");
let attempts = 4;

while (attempts > 1) {
    attempts--;
    if(number > answer) {
        alert("Too high!");
        number = prompt("Guess again. You have " + attempts + " left.")
    }
if (number < answer) {
    alert("Too low!");
    number = prompt("Guess again. You have " + attempts " left.")
}

else if (number == answer){
    alert("Correct.")
}



}

let games = ["Silent Hill", "Dragon Age", "Contre Jour", "Oblivion"];

let gamesGuess = prompt("What is one of my favourite games?").toLowerCase;

if (games.indexOf(plantsGuess) !== -1) {
alert("Thats correct! I really like " + plantsGuess);
}

}