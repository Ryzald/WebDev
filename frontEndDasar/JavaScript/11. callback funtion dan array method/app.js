// foreach method
const angka = [1, 2, 3, 4, 5, 6, 7, 8];

function print(elemen) {
  console.log(elemen);
}

angka.forEach(print);
// print satu sampai sembilan

//callback function dari foreach
angka.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});
//output2,4,6,8

//contoh lain

const animes = [
  {
    title: "on piece",
    rating: 82,
  },
  {
    title: "naruto",
    rating: 92,
  },
  {
    title: "dragon ball",
    rating: 89,
  },
  {
    title: "doraemon",
    rating: 72,
  },
];

animes.forEach(function (anime) {
  console.log(`${anime.title} - rating ${anime.rating}/100`);
});
// output : on piece - rating 82/100
//          naruto - rating 92/100
//          dragon ball - rating 89/100
//          doraemon - rating 72/100

// map method
const angkaDouble = angka.map(function (num) {
  return num * 2;
});

console.log(angkaDouble);
// output 2,4,6,8,... dalam bentuk array
// map method contoh 2
const animeList = animes.map(function (anime) {
  return anime.title.toUpperCase();
});
// output ['ON PIECE', 'NARUTO', 'DRAGON BALL', 'DORAEMON']
