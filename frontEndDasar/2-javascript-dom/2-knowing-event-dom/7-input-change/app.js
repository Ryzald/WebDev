const form = document.querySelector("#form");
const input = document.querySelector("input");

//akan keluar jiuka nilai berubah
// input.addEventListener("change", (e) => {
//   console.log("nilai berubah");
// });

// keluiar jika terjadi perubahan setiap huruf di inputan
input.addEventListener("input", (e) => {
  document.querySelector("h1").innerText = input.value;
  console.log("nilai berubah");
});

// ! prevent default akan mencegah behavior default
form.addEventListener("submit", (e) => {
  console.log("submited");
  e.preventDefault();
});

document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
});

//! prevent default 2

// const input = document.querySelector("input");
// const notes = document.querySelector("#notes");

// form.addEventListener("click", (e) => {
//   e.preventDefault();
//   const notValue = input.value;
//   const newLi = document.createElement("li");
//   newLi.innerText = notValue;
//   notes.append(newLi);
//   input.value = "";
// });
