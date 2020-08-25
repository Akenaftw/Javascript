/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function info() {
    let age =prompt("How old are you", "example 18")
    let gender = prompt("Are you a male of female?")
    let hometown = prompt("where are you from?")
    alert ("name: " + age + " gender: " + gender + " Hometown: " + hometown )

    if (confirm("Please confirm")){
    }
    else {
        info();
    }

})();
