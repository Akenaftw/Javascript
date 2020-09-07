/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    var total = parseInt(localStorage.getItem("total"));
    let addition = document.getElementById("increment");

    function update(){
        document.getElementById("target").innerHTML = total
    }

    addition.onclick = function(){
        total = total +1;
        update();
    }
    window.onbeforeunload = function (){
        localStorage.setItem("total", total)
    }
})();
