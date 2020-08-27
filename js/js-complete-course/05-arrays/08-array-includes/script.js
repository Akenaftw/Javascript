/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.querySelector("button").onclick = function () {
        var fruits = [
            "apple",
            "perry",
            "strawberry",
            "tomato",
            "kiwi",
            "banana",
            "orange",
            "mandarin",
            "durian",
            "peach",
            "grapes",
            "cherry",
        ];
        var found = false;
        for (var i = 0; i < fruits.length; i++) {
            if (fruits[i] == "apple") {
               // found = true;
                console.log("found apple")
            }

        }

//When you click the button, log in the console if, yes or no, there is an apple in the array fruits.
    }
})();
