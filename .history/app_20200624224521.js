const conatiner = document.getElementById("container");
const pokemons = 150;

const fetchPokemons = async () => {
  for (let i = 0; i <= pokemons; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

fetchPokemons();

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const innerHtml = `

    `;

  pokemonEl.innerHTML = innerHtml;
}
