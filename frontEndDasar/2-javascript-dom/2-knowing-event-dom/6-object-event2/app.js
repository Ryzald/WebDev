const form = document.querySelector("#form");
const input = document.querySelector("input");
const notes = document.querySelector("#notes");

input.addEventListener("change", (e) => {
  console.log("nilai berubah");
});

input.addEventListener("input", (e) => {
  console.log("nilai berubah");
});

// form.addEventListener("click", (e) => {
//   e.preventDefault();
//   const notValue = input.value;
//   const newLi = document.createElement("li");
//   newLi.innerText = notValue;
//   notes.append(newLi);
//   input.value = "";
// });
