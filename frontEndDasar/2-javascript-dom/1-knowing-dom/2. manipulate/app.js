const para = document.querySelector("p");
para.innerText; // hanya text
para.innerContent; // cara penulisan pada text editor tanpa tag seberti /t/n/t dll sesuai text editor
para.innerHTML; //cara penulisan pada text editor beserta tag pada html <p>New content added using innerHTML.</p>

para.innerText = "ini kita ubah textnya";
