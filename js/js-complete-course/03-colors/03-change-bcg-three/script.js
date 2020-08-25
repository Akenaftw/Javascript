/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (function () {
//
//     document.getElementById("run").addEventListener("click", function () {
//         document.body.style.backgroundColor = randomNumber();
//     })
//
//
// })();
setInterval(function(){ document.body.style.backgroundColor = randomNumber(); }, 3);
function randomNumber() {
    let returnstring = "rgb(";
    for (i = 0; i <= 2; i++) {
        returnstring += Math.floor(Math.random() * (Math.floor(255)));
        if (i !== 2){returnstring += ", ";
        }
    }
    returnstring += ")";
    return returnstring;
}
