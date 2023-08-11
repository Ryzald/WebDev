const container = document.querySelector("#container");
const url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let index = 1; index <= 500; index++) {
  const pokeBall = document.createElement("div");
  pokeBall.classList.add("pokemon");

  const imgPokemon = document.createElement("img");
  imgPokemon.src = `${url}${index}.png`;

  const label = document.createElement("span");
  label.append(`#${index}`);

  pokeBall.appendChild(imgPokemon);
  pokeBall.appendChild(label);
  container.appendChild(pokeBall);
}
