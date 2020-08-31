/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var target = document.getElementById("target");
    var table = document.createElement("table");
    var totalrows = 25;
    var totalcol = 2;

    for (var r = 0; r < totalrows; r++) {
        var row = document.createElement("tr");
        row.innerHTML = r;

        for (var c = 0; c < totalcol; c++) {
            var collumn = document.createElement("td");
            row.appendChild(collumn);
        }
        table.appendChild(row);
    }
    target.appendChild(table);
})();
