const ul=document.querySelector('.pokemon');
console.log(ul)
const getPokemons= async ()=>{
    const pokemonUrl = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
    const pokemonsJson = await pokemonUrl.json();
    const pokemons=pokemonsJson.results.map((pokemon,imagen)=>(
        {
        name:pokemon.name,
        image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${imagen+1}.png`
        }
    ))
    console.log(" name ",pokemons)
    printPokemon(pokemons)
}
const printPokemon=pokemons=>{
    const pokemonsHtml=pokemons.map(
        (element)=>
        `<li class="element__title"><h3>${element.name}</h3>
        <img class="element__image" src="${element.image}" alt="${element.name}"/></li>`
    ).join('');
    ul.innerHTML=pokemonsHtml
}

getPokemons();
  