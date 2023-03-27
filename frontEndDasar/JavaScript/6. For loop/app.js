// 1. sintaks perulangan for
for (let index = 0; index < 4; index++) {
  console.log(index);
}
// expected output 0 sampai 9

// infinite loop ( jangan memberi syarat tanpa batas!!)
// for (let index = 0; index >= 0; index++) {
//     const element = array[index];
// }

// 2. Mendapatkan Data Dari Array Dengan Perulangan
const animals = ["cat", "bull", "bufallo", "lion"];
for (let i = 0; i < animals.length; i++) {
  console.log(`${i + 1}. hewan ${animals[i]}`);
}

// 3. Nested loop
let str = "LOL";
for (let a = 0; a < str.length; a++) {
  console.log("outer : ", a);
  for (let b = 0; b < str.length; b++) {
    console.log("in : ", str[b]);
  }
}
