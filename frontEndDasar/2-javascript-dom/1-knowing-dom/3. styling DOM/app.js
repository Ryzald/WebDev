const links = document.querySelectorAll("a");
let number = 1;

for (let link of links) {
  console.log(number);
  number++;
  console.log(link);
  link.style.color = "#65c78b";
  link.style.textDecorationColor = "black";
  link.style.textDecorationStyle = "wavy";
}

// claslist styling
const heading = document.querySelector("h1");
heading.setAttribute("class", "border-danger");
// jika code dibawah dijalankan maka kan overwrite code diatas
heading.setAttribute("class", "bg-info");
// cara menambahkan
heading.classList.add("border-danger");
