const container = document.getElementById("container");
const pokemons = 150;

const getPokemon = (id) => {
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
  const innerHtml = `
        ${pokemon.id}
    `;

  pokemonEl.innerHTML = innerHtml;
  container.appendChild(pokemonEl);
}

fetchPokemons();
