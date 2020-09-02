/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
var text = "Woo-hoo! I'm making waves! Wéééé! Oh ... I think I'm having seasickness ...";
    var target = document.getElementById("target");
    var fontsize = ["xx-small", "x-small", "small", "medium", "large" ,"x-large", "xx-large"];
    var increment = true
    var j = 0;


    for (i = 0; i < text.length; i++){

        var span = document.createElement("span")
        span.innerHTML = text[i];
        if (j== fontsize.length){
            increment = false;
        }
        else if (j== 0){
            increment = true;
        }
        span.style.fontSize = fontsize[j]; // text.charat(0)
        target.appendChild(span);
        if (increment){
            j++
        }
        else{
            j--
        }
    }

})();
