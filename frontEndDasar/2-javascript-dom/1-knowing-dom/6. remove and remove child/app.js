//remove child
//jika menggunakan remove child maka harus ke element parent setealh itu baru dapat menghapus
// step 1
const firstLi = document.querySelector("li");
// step 2
firstLi.parentElement;
// step3
firstLi.parentElement.removeChild(firstLi);
// kode diatas akan menhapus firstli

// remove ( browser baru  seperti chrome)
const img = document.querySelector("img");
img.remove;
