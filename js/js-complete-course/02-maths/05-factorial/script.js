(function () {
    document.getElementById("run").addEventListener("click", function () {
        let number = parseInt(document.getElementById("number").value);

        if (number === 0 || number === 1) {
            return 1;
        }   

        for (let i = 1; 1 > number; i++) {
            number *= (number - 1); // result  = result + number * number -1
        }
        document.getElementById("number").value = number;
    });
})()


/*
(function () {

    // to get the value of an input: document.getElementById("element-id").value

    function factory(num) {
        // If the number is less than 0, reject it.
        if (num < 0)
            return -1;

        // If the number is 0, its factorial is 1.
        else if (num === 0)
            return 1;

        // Otherwise, call the recursive procedure again
        else {
            return (num * factory(num - 1));
        }
    }


    document.getElementById("run").addEventListener("click", function () {

        let x = document.getElementById('number').value;
        let intX = parseFloat(x);

        document.getElementById('number').value  = factory(intX);



    });

})();
*/
