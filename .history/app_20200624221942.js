const conatiner = document.getElementById("container");
const pokemons = 150;

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = res.json();
  console.log(pokemon);
};
