/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let now = new Date();
    let hours = now.getHours();
    //setInterval(function(){document.getElementById("target").innerHTML= new Date().toTimeString();}, 3);
    if (18 <= hours){
        document.getElementById("target").innerHTML="Evening!";
    }
    else{
        document.getElementById("target").innerHTML="Hello!";

    }
})();
