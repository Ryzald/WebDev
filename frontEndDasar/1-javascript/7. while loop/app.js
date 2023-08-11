// while loop
let num = 5;
while (num < 0) {
  console.log(num);
  num++;
}

// valdiasi pasword
const psw = "pas123";

let input = prompt("inputkan pasword");
while (input !== psw) {
  input = prompt("inputkan pasword");
}
alert("sudah benar");

// Break Untuk Memberhentikan Perulangan
let input2 = prompt("halo");
    while (true) {
      input2 = prompt(input2)
      if (input2 === "stop"){break;} 
    }
    alert("stop aman")
