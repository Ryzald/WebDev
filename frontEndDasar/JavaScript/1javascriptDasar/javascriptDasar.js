// Penjelasan Index Pada String Dan Panjang KarakterPenjelasan Index Pada String Dan Panjang Karakter
let nama ="hakim"
console.log(nama[2]);
console.log(nama.length)

// Method-Method Javascript
let greeting = 'hello world';
console.log(greeting.toUpperCase())


// method and argumen
console.log(greeting.indexOf('h') ) //memberikan index ke berapa dari h
console.log(greeting.slice(0,5)) //memotong dari index ke 0 sampai ke 5

// template literal
let name = "rizaldi";
let age = "21";
console.log(greeting.replace('hello', 'there') + ' ' + 'nama saya rizaldi'  ) //sebelum template literal 
console.log(`${greeting.replace('hello','world')} ! Nama saya ${name} dan usia saya adalah ${age}`); //template literal
 

// Console Alert Dan Prompt
console.log("hello wordl");
console.warn("ini warn");
console.error("ini error");

alert('ini alert');
prompt('inputan');


// If Statement Pertama Yg Kamu Pelajari

if (1 +1 === 2) {
    console.log("perhitungan 1 tambah 1");
    
}

let angka = Math.random()
console.log(angka);

const hari = 'sabtu';
if (hari === "selasa") {
    console.log("ini selasa");
    
} else if (hari === 'senin') {
    console.log(`sekarang adalah hari ${hari}`);    
}else{
    console.log(`sekarang adalah hari ${hari}`);
}
    


// nested if

const psw = prompt("buat password");

if (psw.length >= 6) {
    if (psw.indexOf(" ")=== -1) {
        console.log("password valid");
        console.log("password tidak ada spasi");        
    }else{
        console.log("psw tidak boleh ada spasi");
    }

} else  {
    console.log("password minimal 6 kareakter");
}


// jika psw mengandung  spasi
if (psw.indexOf(" ")) { 

        console.log("psw tidak boleh ada spasi2");
    
}

// logical operatro && dan , || or , ! not 

if (psw.length >= 6 && psw.indexOf(" ")===-1) {
    console.log(`password  anda adalah ${psw}`);
    
}

    
