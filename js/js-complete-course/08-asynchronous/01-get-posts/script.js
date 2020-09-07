/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let run = document.getElementById("run")
run.addEventListener("click",getPosts)
function getPosts() {
    window.lib.getPosts(function (error, response) {
        if (error) {
            console.log("kapoet")
        } else (response)
        {
            console.log(response)
        }
    })

};

