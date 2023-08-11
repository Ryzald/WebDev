// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
// 	// console.log(img.src);
// 	img.src =
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }

// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
// 	img.src =
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }

const links = document.querySelectorAll("a");

for (let link of links) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

//1. selecting with dom
// id
document.getElementById("banner");
const banner = document.getElementById("banner");
console.dir(banner);
//tag
// const allImg = document.getElementsByTagName("img"); // berupa array(html collection) terdapat 4 length
// document.getElementsByTagName("img")[0];
// for (let image of allImg) {
//   // mengganti semua image dengan satu src
//   console.log(image.src);
//   image.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg";
// }
//class
const kotak = document.getElementsByClassName("square");
for (const gg of kotak) {
  gg.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg";
}

// 2. quaeryselector
// TAG
// p yang pertama kali muncul
console.log(document.querySelector("p"));
// semua p
console.log(document.querySelectorAll("p"));
//ID
console.log(document.querySelector("#banner"));
//CLASS
//awal square
console.log(document.querySelector(".square"));
//semua square
console.log(document.querySelectorAll(".square"));
