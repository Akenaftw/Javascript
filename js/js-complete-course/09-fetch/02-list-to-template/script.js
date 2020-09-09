/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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
            for (i = 0; i < data.length; i++){
                var div = document.createElement("div")
                div.innerHTML = "Name: " + data[i].name + " " + data[i].alterEgo;
                target.appendChild(div)
            }
        }
})();
