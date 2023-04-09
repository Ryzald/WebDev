const examScore = [85, 86, 76, 88];

// every (setiap isi array diuji jika salah satu gagal maka akan false) mirip and "&&"
// examScore.every();
console.log(examScore.every((score) => score >= 75));
// putpu = true, jika salah satu tidak memnuhi syarat maka false

//some (pengecekan semua element array setidaknya satu benar maka true) mirp or "||"
const isBelow80 = examScore.some((score) => score < 80);
