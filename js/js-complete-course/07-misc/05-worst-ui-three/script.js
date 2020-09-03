/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let buttonOne = document.getElementById("fix-part-one");
    let buttonTwo = document.getElementById("fix-part-two");
    let buttonThree = document.getElementById("fix-part-three");
    let buttonFour = document.getElementById("fix-part-four");
    let buttonValueOne = document.getElementById("part-one")
    let buttonValueTwo = document.getElementById("part-two")
    let buttonValueThree = document.getElementById("part-three")
    let buttonValueFour = document.getElementById("part-four")

    function update() {
        document.getElementById("target").innerHTML = "0" + buttonValueOne.value + buttonValueTwo.value + buttonValueThree.value + buttonValueFour.value;
    }

    buttonOne.onclick = function(){
        let w = Math.floor(Math.random() * 39) + parseInt(buttonValueOne.dataset.min);
        buttonValueOne.value = w
        update()
    }

    buttonTwo.onclick = function (){
        let x = Math.floor(Math.random() * parseInt(buttonValueTwo.dataset.max));
        buttonValueTwo.value = x
        update()
    }

    buttonThree.onclick = function (){
        let y = Math.floor(Math.random() * parseInt(buttonValueThree.dataset.max));
        buttonValueThree.value = y
        update()
    }

    buttonFour.onclick = function (){
        let z = Math.floor(Math.random() * parseInt(buttonValueFour.dataset.max));
        buttonValueFour.value = z
        update()
    }
})();
