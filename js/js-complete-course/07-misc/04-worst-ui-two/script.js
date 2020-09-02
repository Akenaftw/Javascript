/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
        let buttonOne = document.getElementById("part-one");
        let buttonTwo = document.getElementById("part-two");
        let buttonThree = document.getElementById("part-three");
        let buttonFour = document.getElementById("part-four");
        let value = 0;

        function update() {
            document.getElementById("target").innerHTML = "0" + buttonOne.innerHTML + buttonTwo.innerHTML + buttonThree.innerHTML + buttonFour.innerHTML;
        }

        buttonOne.onclick = function () {
            value = parseInt(buttonOne.innerHTML);
            if (value < buttonOne.dataset.max) {
                value++;
                buttonOne.innerHTML = value;
            } else {
                buttonOne.innerHTML = buttonOne.dataset.min;
            }
            update()
        }

        buttonTwo.onclick = function () {
            value = parseInt(buttonTwo.innerHTML);
            if (value < buttonTwo.dataset.max) {
                value++;
                if(value < 10)
                {
                    value = "0" + value
                }
                buttonTwo.innerHTML = value;
            } else {
                buttonTwo.innerHTML = buttonTwo.dataset.min;
            }
            update()
        }

        buttonThree.onclick = function () {
            value = parseInt(buttonThree.innerHTML);
            if (value < buttonThree.dataset.max) {
                value++;
                if(value < 10)
                {
                    value = "0" + value
                }
                buttonThree.innerHTML = value;
            } else {
                buttonThree.innerHTML = buttonThree.dataset.min;
            }
            update()
        }

        buttonFour.onclick = function () {
            value = parseInt(buttonFour.innerHTML);
            if (value < buttonFour.dataset.max) {
                value++;
                if (value < 10) {
                    value = "0" + value
                }
                buttonFour.innerHTML = value;
            } else {
                buttonFour.innerHTML = buttonFour.dataset.min;
            }
            update()
        }


    }
)();
