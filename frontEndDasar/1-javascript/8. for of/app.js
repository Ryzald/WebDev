// for off array
  const animals = ["cat", "bull", "bufallo", "lion"];

  for(let animal of animals){
    console.log(`hewan ${animal}`);
  } // menampilkas setiap data pada array

  const animals2 = [
    ["cat", "bull", "bufallo", "lion"],
    ["turtle", "bull2", "bufallo2", "lion2"],
    ["cat3", "bull3", "bufallo3", "lion3"],
  ];

  // for of array nested
  for(let animal2 of animals2){
    console.log(animal2);
    for(let name of animal2){
      console.log(`hewan ${name}`);
    }
  }// menampilkan setiap data pada animals2


// array of for object

const nilaiSiswa={
  olivia : 90,
  dean : 95,
  rizal : 88,
  emma : 77,
};

for(let student in nilaiSiswa){
  console.log(`${student} memiliki skor ${nilaiSiswa[student]}`);
};
console.log(Object.values(nilaiSiswa));

// klo array menggunakan of sedangkan object menggunakna in
// menghitung nilai dari student diatas

let total = 0;
let scores = Object.values(nilaiSiswa);

for(let score of scores){
  total += score;
}

let mean = total/scores.length;
console.log(`nilai tota mahasiswa adalah ${mean}`);