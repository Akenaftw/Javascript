/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    function tablemaker() {
        var target = document.getElementById("target");
        var table = document.createElement("table");
        var totalrows = 10;
        var totalcol = 10;

        for (var r = 0; r < totalrows; r++) {
            var row = document.createElement("tr");


            for (var c = 0; c < totalcol; c++) {
                var collumn = document.createElement("td");
                row.appendChild(collumn);
            }
            table.appendChild(row);
        }
        target.appendChild(table);
    }

    tablemaker();
    var tableshaker = document.getElementsByTagName("table");
    for (x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            let c = tableshaker[0].rows[y].cells;
            let d = y + 1;
            let a = x + 1;
            let b = d * a;
            c[x].innerHTML = b;

        }

    }
})();
