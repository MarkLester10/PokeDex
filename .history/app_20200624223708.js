const conatiner = document.getElementById("container");
const pokemons = 150;

const getPokemon = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

getPokemon(2);
