const generateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};
0;

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", () => {
    button.style.backgroundColor = generateColor();
  });
}

// cara membuat dengan this
function colorize() {
  this.style.backgroundColor = generateColor();
}

const headings = document.querySelectorAll("h1");

for (let heading of headings) {
  heading.addEventListener("click", colorize);
}
