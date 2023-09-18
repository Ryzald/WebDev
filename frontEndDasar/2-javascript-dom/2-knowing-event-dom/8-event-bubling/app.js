const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

button.addEventListener("click", function (e) {
  container.style.backgroundColor = generateColor();
  console.log("click");
  // jika ditekan maka event setelah ini akan dimatikan
  e.stopPropagation();
});

container.addEventListener("click", function () {
  container.classList.toggle("hide");
  console.log("tekan");
});

const generateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};
