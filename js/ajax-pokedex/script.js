let api = "hhtps://pokeapi.co/api/v2/pokemon/"
let ID
document.getElementById("trigger").addEventListener("click", pokeFind)

function pokeFind() {
    fetch(api)
        .then((res) => res.json())
        .then(data => {
            console.log(data);
        })
    console.log(pokeName)
        .catch(function (error) {
            console.log("404 pokemon not found")
        })
    let pokeData = data.pokemon;
    let pokeName = document.getElementById(ID).value
    let pokeSearch = pokeData + pokeName


    fetch(pokeSearch)
        .then ((res) => res.json())
    .then (data => {
            console.log(data.id)
    })


}

