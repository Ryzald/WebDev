const links = document.querySelector("b");
console.log(links);

// parent element
const paragraf = links.parentElement;
//2 kali parent element
console.log(links.parentElement.parentElement);

// Children
console.log(paragraf.children);
// spesifik children
console.log(paragraf.children[5]);

// sibling
const squareImg = document.querySelector(".square");
console.log(squareImg);
// mengambli next or previous element
console.log(squareImg.previousSibling); //menampilkan '#text "\n\n" penulisan adalm text editor
console.log(squareImg.previousElementSibling); //menampilkan <p></p> yaitu element sebelum

console.log(squareImg.nextSibling);
console.log(squareImg.nextElementSiblingSibling);
