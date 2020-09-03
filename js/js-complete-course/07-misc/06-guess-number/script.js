/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let x = Math.floor(Math.random() * 100) + 1;
    let totalGuesses = []

    do {
        var guess = Number(prompt("Guess a number between 1 and 99"))
        totalGuesses.push(guess)
            if (guess > x){
                alert("The number we are looking for is lower")
            }
            else if(guess < x){
                alert("The number we are looking for is higher")
            }
    }
    while (guess != x);
    alert("You guessed the correct number! It took you " + (totalGuesses.length + 1) + " attempts!");

})();
