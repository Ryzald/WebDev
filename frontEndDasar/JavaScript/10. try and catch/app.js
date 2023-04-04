// const halo = "kenalan";

try {
  console.log(halo);
} catch {
  console.log("eroor");
}

console.log("setelah try and catch");

// jika tanpa try and catch maka program akan berhenti karena error, sedangkan try and cath pemanggilan  halo error akan memunculkna pesan pada cath dan melanjutkan baris kode yang ada dibawahnya

// contoh lain
function katakan(pesan) {
  try {
    console.log(pesan.toUpperCase());
  } catch (error) {}
  console.log(error);
  console.log("masukkan tipe data string");
}

// jika argumen pesan bukan string akan error dan menampilkan catch
