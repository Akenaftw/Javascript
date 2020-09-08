/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", getPosts);
function getPosts() {
    window.lib.getPosts(function (result, error) {
        if (result) {
            console.log(result)
        } else (error)
        {
            console.error(error);
        }
    })
}