const btn = document.querySelector("#clickme");

// mengapa add event listener maka jika terdapat 2 function yang dijalankan akan dijalankan keduanya
btn.addEventListener("click", function () {
  console.log("step satu");
});
btn.addEventListener("click", stepSatu);

function stepSatu() {
  console.log("step dua");
}

// color generator
const button = document.querySelector("#generate");

button.addEventListener("click", () => {
  const newColor = generateColor();
  document.body.style.backgroundColor = newColor;
  console.log(newColor);
});

const generateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};
