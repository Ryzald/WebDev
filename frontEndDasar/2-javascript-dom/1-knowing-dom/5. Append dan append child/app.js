// append (similar to inner text)
const para = document.querySelector("p");
para.append("ini append saja");

// appendChild (adding an element)
const newImg = document.createElement("img"); // Fix here
newImg.src =
  "https://mojokbisnis.com/wp-content/uploads/2023/02/Gambar-Naga-Merah-Marah.jpg"; // dragon image
// adding the element
document.body.appendChild(newImg);
// penambahan class
newImg.classList.add("square");

/*inserAdjacent ( method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.)
 
 syntax 'insertAdjacentHTML(position, text)'

"beforebegin"  Before the element. Only valid if the element is in the DOM tree and has a parent element.
"afterbegin"    Just inside the element, before its first child.
"beforeend"     Just inside the element, after its last child.
"afterend"      After the element. Only valid if the element is in the DOM tree and has a parent element.
*/

const h1 = document.querySelector("h1");
h1.insertAdjacentText("beforebegin", "ini before begin"); // Insert text content
