// Object
  const orang ={
  nama:"rizaldi Wahyu",
  tanggal : 2023-03-24,
  alamat : "sidoarjo"
  }

  console.log(orang);
// expected output : Object { nama: "rizaldi Wahyu", tanggal: 1996, alamat: "sidoarjo" }
  console.log(orang.nama);

// nested objcet
  const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };

  person.name;
  person.name[0];
  person.age;
  person.bio();
  // "Bob Smith is 32 years old."
  person.introduceSelf();
  // "Hi! I'm Bob."

// object berjalan

  orang.nama = "bukan rizal"; // mengganti nama pada object orang
  console.log(orang.nama);

  orang.gender = ["pria","wanita"];
  console.log(orang);
  // expected output : Object { nama: "bukan rizal", tanggal: 1996, alamat: "sidoarjo", gender: (2) […] }


// Cara Memanggil Object Di Dalam Array
console.log(" Cara Memanggil Object Di Dalam Array");
const shoppingCart = [
  {
    product :"vue.js",
    price : 13000,
    quantity : 3
},
{
  product :"react.js",
  price : 12000,
  quantity : 2
},
{
  product :"Angular.js",
  price : 15000,
  quantity : 7
}
];
console.log(shoppingCart);

console.log(shoppingCart[0].price); //13000
