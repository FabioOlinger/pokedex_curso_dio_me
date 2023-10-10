const unit = document.querySelector("#unit")
const pokemon = document.querySelector(".pokemons")


const convertPokemonToHtml = pokemon => {
    return `
    <section class="pokemon-details">
    
    <div class="header">
     <a href="/">Fechar</a>
      
     <h1>Características do<p>&nbsp</p> <span> </span><span class="info">${pokemon.name}</span></h1>
      
    </div>
    <div class="num">
      <span>#${pokemon.number}</span>
    </div>
    <div class="poke-details">
      <div class="details">
       <div class="typeDetails">
        ${pokemon.types.map((type) => `<h3 class="type ${type}">${type}</h3>`).join('')}
        </div>
        <img 
        src="${pokemon.photo}" 
        alt="${pokemon.name}">
        </div>
        <div class="abilities">
        <h3>Abilities</h3>        
        <span>${pokemon.abilities.join(', ')}</span>
      </div>
      
      <div class="about">
        <h2>Stats</h2>
        <div class="stats">
          <h2>Hp</h2>
          <h4>${pokemon.stats["hp"]}</h4>
          <h2>Attack</h2>
          <h4>${pokemon.stats["attack"]}</h4>
          <h2>Defense</h2>
          <h4>${pokemon.stats["defense"]}</h4>
          <h2>Special Attack</h2>
          <h4>${pokemon.stats["special-attack"]}</h4>
          <h2>Special Defense</h2>
          <h4>${pokemon.stats["special-defense"]}</h4>
          <h2>Speed</h2>
          <h4>${pokemon.stats["speed"]}</h4>
        </div>
        
        
      </div>
    </div>
  </section>`
}

function openUnit(id) {
  unit.classList.remove('hide')
  pokeApi.getPokemonCardDetail(id).then((pokemon) => {
    const newHtml = convertPokemonToHtml(pokemon)
    unit.innerHTML = newHtml;
  })
}

