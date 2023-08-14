const form = document.querySelector("#form");

// ! prevent default akan mencegah behavior default
// form.addEventListener("submit", (e) => {
//   console.log("submited");
//   // e.preventDefault();
//   console.log("submited");
// });

// document.querySelector("a").addEventListener("click", (e) => {
//   e.preventDefault();
// });

//! prevent default 2

const input = document.querySelector("input");
const notes = document.querySelector("#notes");

form.addEventListener("click", (e) => {
  e.preventDefault();
  const notValue = input.value;
  const newLi = document.createElement("li");
  newLi.innerText = notValue;

  notes.append(newLi);
});
