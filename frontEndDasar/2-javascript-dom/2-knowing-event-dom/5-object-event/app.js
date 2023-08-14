const input = document.querySelector("input");

// * keydown = ketika tombo ditekan
// input.addEventListener("keydown", () => {
//   console.log("tombol ditekan");
// });

// * keyup = ketika tombol diangkat
// input.addEventListener("keyup", () => {
//   console.log("tombol dirilis");
// });

// * keydown = ketika tombo ditekan
// input.addEventListener("keydown", (e) => {
//   console.log(e);
//   console.log(e.key);
//   console.log(e.code);
// });

// ! pengkondisian keyboard tertentu
input.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("Tombol arah atas");
      break;
    case "ArrowDown":
      console.log("Tombol arah bawah");
      break;
    case "ArrowLeft":
      console.log("Tombol arah kiri");
      break;
    case "ArrowRight":
      console.log("Tombol arah kanan");
      break;
  }
});
