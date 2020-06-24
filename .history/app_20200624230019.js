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
        <div class="image-container>
            <img src="${pokemon.sprites.front_default}"/>
        </div>
    `;

  pokemonEl.innerHTML = innerHtml;
  container.appendChild(pokemonEl);
}

fetchPokemons();
