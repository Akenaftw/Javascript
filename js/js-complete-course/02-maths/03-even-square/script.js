/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.getElementById("run").addEventListener("click", sqrt);
})()

function sqrt(){
    let n = "21";
    let msg = "";
    let res = "0";

    for (let x = 1; x <= n; x++) {
        res = x * x;
        msg = msg + " " + x + " * " + x + " = " + res + "\n";
    }

    alert(msg);
}