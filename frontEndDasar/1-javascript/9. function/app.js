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

// blocked scope
let tinggi = 8;
if (tinggi > 8) {
  let lebar = 5;
  console.log(lebar);
}

// console.log(lebar); // tidak keluar karena lebar didefinisikan / dibuat pada scope kurung kurawal "{}" if

if (tinggi > 5) {
  var width = 9;
}
console.log(width); // width dapat tampil karena menggunakan Var
// let dan const setara scope, var top level

// lexical scope
//sebuah function yang dipanggil didalam function
function lamarKerja() {
  const jabatan = "programmer";

  function orangDalam() {
    let kenalan = `orang dalam bisa memasukkan ${jabatan}`;
    console.log(kenalan);
  }
}
console.log(lamarKerja());

// jika dipanggil orang dalam undefined karena function belom terbuat
// jika dipanggil lamar kerja akan tidak muncul apapun
function lamarKerja2() {
  const jabatan = "programmer";

  function orangDalam2() {
    let kenalan = `orang dalam bisa memasukkan ${jabatan}`;
    console.log(kenalan);
  }
  orangDalam2();
}
console.log(lamarKerja2());
// jika dipanngi orangDalam2 maka akan mucul "orang dalam bisa memasukkan $jabatas" karena dalam lamarKerja2 function orangDalam2 dipanggil

// function expression / perpangkatan

const hitun = function perpangkatan(nilai) {
  return nilai * nilai;
};
// pemanggilannya adalah  hitun(5)

// Function Sebagai Argument Function Lain

function duakali(func) {
  func();
  func();
}
function lemparDadu2() {
  const result = Math.floor(Math.random() * 6) + 1;
  console.log(result);
}

console.log(duakali(lemparDadu2));
//expecting result pemanggilan lemparDadu2 dua kali

// Function Bernilai Balik Function / return function
function returnFunction() {
  const rand = Math.random();
  if (rand >= 0.1) {
    return function () {
      console.log("selamat, ankga lebih besar");
    };
  } else {
    return function () {
      console.log("try again");
    };
  }
}
console.log(returnFunction()); //output function
const result = returnFunction();
console.log(result); //output selamat, anka lebih besar / try again

// definisi sebuah method
// function
function name(params) {
  console.log("ini fucntion");
}

// method (funtion yang didefinisikan didalam object)
//object
const myMath = {
  //method
  perkalian: function (x, y) {
    return x * y;
  },
};
// pemanggilan
console.log(myMath.perkalian(5, 6));

// This
const saya = {
  nama: "rizal",
  hobi: "belajar",
  kenalan: function () {
    return `hai, kenalin saya ${this.nama}. Hobi saya ${rhis.hobi}`;
  },
};
//pemanggilan
console.log(saya.kenalan());
