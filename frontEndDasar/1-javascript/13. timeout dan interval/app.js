// set timeout (delay)
console.log("halooo");
setTimeout(() => {
  console.log("setelah lima detik akan muncul");
}, 5000);

// set interval (perulangan dengan waktu) tidak akan berhenti berikan code "clearInterval(interval)" agar berhenti
const interval = setInterval(() => {
  console.log(Math.random());
}, 2000);

// filter ()
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ganjil = angka.filter((n) => n % 2 === 1);

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Alice", age: 22 },
];

const filteredUsers = users.filter((user) => user.age >= 25);

console.log(filteredUsers);
// Output: [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }]

// perpaduan filter dan map
const animeList = [
  { title: "Demon Slayer", rating: 8.7 },
  { title: "Attack on Titan", rating: 9.0 },
  { title: "Fullmetal Alchemist: Brotherhood", rating: 9.1 },
  { title: "Naruto", rating: 8.3 },
  { title: "One Piece", rating: 8.4 },
  { title: "Sword Art Online", rating: 7.6 },
  { title: "My Hero Academia", rating: 8.4 },
  { title: "Death Note", rating: 9.0 },
];

const filteredAnime = animeList.filter((anime) => anime.rating > 7);
const animeTitles = filteredAnime.map((anime) => anime.title);

console.log(animeTitles);
// Output: ['Demon Slayer', 'Attack on Titan', 'Fullmetal Alchemist: Brotherhood', 'Naruto', 'One Piece', 'My Hero Academia', 'Death Note']
