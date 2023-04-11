// 1. nilai default pada function
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("John"); // Output: Hello, John!

// 2. Spread operator "..."

//mengubah array mejadi deret value dengan menambahkan "..."
const string1 = "hello";
const chars = [...string1];
console.log(chars); // Output: ["h", "e", "l", "l", "o"]
// penggunaan lain
const exam = [1, 2, 3, 5, 4, 6, 5];
Math.max(exam); // undefined
Math.max(...exam); //output 6

// merge array
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = ["a", "b", "c", "d", "e", "f", "g"];
const mix = [...angka, 0, ...alpha]; //output 1234567890abcdefg

// menggabungkan object
const user = {
  name: "rizal",
  email: "rizal@gmail.com",
};
const credential = {
  password: "123",
  nim: 215150401111054,
};
//  menambahkan object
const userBaru = { ...user, id: "123", password: "rizaldi123" };
//  menggabunkan 2 object
const sudo = { ...user, ...userBaru };

// rest param (jika paremeter banyak atau tidak menentu)
function sumAll(...nums) {
  return nums.reduce((total, element) => total + element);
}
nums1 = [1, 2, 3];
nums2 = [4, 5, 6];
console.log(sumAll(...nums1)); //output 6
console.log(sumAll(...nums2)); // output 15
console.log(sumAll(...nums1, ...nums2)); //output 21

// 3. DESTRUCTING
//bongkar array
const nama = ["rizal", "Alex", "Bona", "cino", "dean", "Eli"];
const [satu, dua, tiga, ...peserta] = nama;
console.log(satu); //output rizal
console.log(dua); // output Alex
console.log(tiga); //output Bona
console.log(peserta); // setelah bona(cino mdean,eli)

// bongkar object
const user2 = {
  name: "rizal",
  email: "rizal@gmail.com",
  role: "fighter",
};
const credential2 = {
  password: "123",
  nim: 215150401111054,
};
// sesuai urutan (key pada object dan nama variabel harus sama)
const { name, email } = user2;
console.log(name); // rizal
console.log(email);
// bebas gak harus urut
// const { name: identitas, email , phone = 08139279555 } = user2;
// console.log(identitas);
// console.log(email);

// bongkar object pada function
const nameAndRole = ({ name, role }) => {
  return `${name} dan ${role}`;
};
console.log(nameAndRole(user2));
