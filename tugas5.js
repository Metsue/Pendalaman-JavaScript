let kunciJawaban = ['B', 'D', 'A', 'D'];

function cekHasil() {
    let jawaban = [
        document.querySelector('input[name="per1"]:checked')?.value || '',
        document.querySelector('input[name="per2"]:checked')?.value || '',
        document.querySelector('input[name="per3"]:checked')?.value || '',
        document.querySelector('input[name="per4"]:checked')?.value || ''
    ];

    let nilai = 0;
    for (let i = 0; i < 4; i++) {
        if (jawaban[i] === kunciJawaban[i]) {
            nilai += 25;
        }
    }

    let hasil = document.getElementById('hasil');
    if (nilai >= 75) {
        hasil.innerHTML = "”Selamat, Anda sudah memahami javascript dengan baik!";
        hasil.className = "hijau";
    } else {
        hasil.innerHTML = "Mohon maaf, Anda sepertinya masih kurang memahami JavaScript. Coba lagi!";
        hasil.className = "merah";
    }
}
