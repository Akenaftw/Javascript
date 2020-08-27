/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.querySelector("button").onclick = function () {
        var td = document.getElementsByTagName("td");
        var numbers = [];
        console.log(td[0])
        for (var i = 0; i < 10; i++) {
            var rng = Math.floor((Math.random() * 100)); //generates number between 1 and 100
            numbers.push(rng)
        }
        numbers = numbers.sort(function (a, b) {
            return a - b
        });
        for (var j = 1; j <= numbers.length; j++) {
            document.getElementById("n-" + j).innerHTML = numbers[j - 1];
        }
        let arrSum = numbers.reduce((a, b) => a + b, 0);
        let arrAvg = numbers.reduce((a, b) => a + b, 0) / numbers.length;
        document.getElementById("min").innerHTML = numbers[0];
        document.getElementById("max").innerHTML = numbers[9];
        document.getElementById("sum").innerHTML = arrSum;
        document.getElementById("average").innerHTML = arrAvg;
    }
})();
