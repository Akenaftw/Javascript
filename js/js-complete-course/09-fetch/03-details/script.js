/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var target = document.getElementById("target")
    document.getElementById('run').addEventListener('click', function (){
        fetch("http://localhost:3000/heroes")
            .then (function (response){
                return response.json();
            })
            .then (function (data){
                appendData(data);
            })
            .catch(function (err){
                console.log("error: " + err);
            })
    });
    function appendData(data){
        var target = document.getElementById("target");
        var HeroId = document.getElementById("hero-id").value;


        {
            var div = document.createElement("div");
            div.innerHTML = "Name: " + data[HeroId].name + " " + data[HeroId].alterEgo;
            target.innerHTML = "";
            target.appendChild(div);
        }
    }
    /* will review this exercise and add the node.cloneNode method */
})();
