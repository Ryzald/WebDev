//function lempar dadu
function lemparDadu() {
  console.log(Math.floor(Math.random() * 6 + 1));
}
//pemanggilan function
lemparDadu();

// mendefinisikan dan menjalankan function
function nyanyi() {
  console.log("cek...");
  console.log("Do re mi");
}

// run / pemanggilan
nyanyi();
nyanyi();
nyanyi();

// argumen dan parameter pada function
function greet(name) {
  //name adalah parameter
  console.log(name);
}

greet("rizal"); // rizal adalah argument

// multiple parameter
function jumlahkan(a, b) {
  const total = a + b;
  console.log(total);
}
// run
jumlahkan(5, 3);

// memberikan default value
function jumlahkan2(a = 0, b = 0) {
  const total = a + b;
  console.log(total);
}

// Statement Return Pada Function  (digunakan untuk menyimpan variabel)
function jumlahkan3(a = 0, b = 0) {
  const total = a + b;
  return total;
}
//implementasi
let soal1 = jumlahkan3(5, 6);

// Visibilitas Variabel Sesuai Scope Atau Ruang Lingkup

let programming = "javascript";

function prog() {
  let programming = "python";
  console.log(programming);
}

prog(); // berisi python
console.log(programming); //berisi javascript
