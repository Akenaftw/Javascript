/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//When you click the button, do the following transformations to the array fruits: remove the first and the last element, add an element "banana"
//at the start of the array, and add an element "kiwi" at the end.
(function() {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    document.querySelector("button").onclick = function() {
        fruits.pop();
        fruits.shift();
        fruits.unshift("banana");
        fruits.push("kiwi");
    }
console.log(fruits)
})();
