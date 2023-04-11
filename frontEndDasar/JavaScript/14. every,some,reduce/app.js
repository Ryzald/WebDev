// default value paramater pada function
function saty(a = 1) {
  //1  adalah default value
  return Math.floor(Math.random() * a) + 1;
}

//mengubah array/object menjadi deret value(mengubah array sehingga bisa digunakan dala suatu beberapa function)
// spread operator(penambahan ...)
angka = [1, 2, 3, 4, 5, 6];
Math.max(angka); //maka keluar NaN
Math.max(...angka); //muncul 6,
