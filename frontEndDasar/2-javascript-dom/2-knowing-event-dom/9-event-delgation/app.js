const form = document.querySelector("#form");
const input = document.querySelector("input");
const list = document.querySelector("#notes");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const noteValue = input.value;
  const newLi = document.createElement("li");
  newLi.innerText = noteValue;
  list.append(newLi);
  input.value = "";
});

list.addEventListener("click", function (e) {
  // e.target.remove(); // semua child UL akan diremove

  e.target.nodeName === "LI" && e.target.remove(); // hanya jika child li
});
