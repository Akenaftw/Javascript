
document.getElementById("run").addEventListener("click",getPersons)
function getPersons() {
    window.lib.getPersons(function (error, response) {
        if (error) {
            console.error("kapoet")
        } else (response)
        {
            console.log(response)
        }
    })

}