let api = "https://pokeapi.co/api/v2/pokemon/"
document.getElementById("trigger").addEventListener("click", pokeFind)
var pokemon= {
    name: "",
    type: [],
    id : "",
    pokeFront: "",
    pokeShiny:"",
    moves: [],

}


async function pokeFind() {

    let pokemonID = document.getElementById("ID").value
    fetch(api + pokemonID)
        .then((res) => res.json())
        .then( data => {
            console.log(data);
            pokemon.name = data.name;
            pokemon.type = data.types[0].type.name;
            pokemon.id = data.id;
            pokemon.pokeFront = data.sprites["front_default"];
            pokemon.pokeShiny = data.sprites["front_shiny"];
            pokemon.moves = data.moves[0].move.name;
            console.log(pokemon)
            showPokemon()
        })
        .catch(function (error) {
            console.log("404 pokemon not found")
        })

}

function showPokemon(){
    document.getElementById("name").innerHTML = pokemon.name;
    document.getElementById("type").innerHTML = pokemon.type;
    document.getElementById("pokeId").innerHTML = pokemon.id;
    document.getElementById("pokeFront").innerHTML = "<img src=" + pokemon.pokeFront +">";
    document.getElementById("pokeShiny").innerHTML = "<img src =" + pokemon.pokeShiny +">"
    document.getElementById("moves").innerHTML = pokemon.moves;
}

