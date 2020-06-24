const container = document.getElementById("container");
const pokemons = 150;

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons; i++) {
    await getPokemon(i);
  }
};

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const innerHtml = `
        <div class="image-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
        </div>
        ${name}
        <div class="info">
            <span class="number">${pokemon.id}</span>
            <h3>${name}</h3>
        </div>
    `;

  pokemonEl.innerHTML = innerHtml;
  container.appendChild(pokemonEl);
}

fetchPokemons();
