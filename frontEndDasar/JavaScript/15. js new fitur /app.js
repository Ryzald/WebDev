const examScore = [85, 86, 76, 88];

// every (setiap isi array diuji jika salah satu gagal maka akan false) mirip and "&&"
// examScore.every();
console.log(examScore.every((score) => score >= 75));
// putpu = true, jika salah satu tidak memnuhi syarat maka false

//some (pengecekan semua element array setidaknya satu benar maka true) mirp or "||"
const isBelow80 = examScore.some((score) => score < 80);

// reduce (menggabungkan elemen dalam sebuah array menjadi sebuah nilai tunggal dengan menggunakan sebuah fungsi callback)
// cara 1    
let total1 = 0;
    for (let score1 of examScore){
        total1 += score1;
    }

// cara 2 (dengan reduce)
let total2 = examScore.reduce((current, nextcur) => {
    return current + nextcur;
} )

console.log(total1);
console.log(total2);