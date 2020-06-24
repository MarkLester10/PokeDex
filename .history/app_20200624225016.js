const container = document.getElementById("container");
const pokemons = 150;

const getPokemon = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((pokemon) => createPokemonCard(pokemon));
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
