
document.getElementById("run").addEventListener("click",getPersons)
function getPersons() {
    window.lib.getPosts(function (error, response) {
        if (error) {
            console.error("kapoet")
        } else (response)
        {
            console.log(response)
        }
    })

};