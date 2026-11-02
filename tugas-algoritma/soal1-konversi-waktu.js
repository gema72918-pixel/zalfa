let totalDetik = 90061;

let hari = Math.floor(totalDetik / 86400);
let sisa = totalDetik % 86400;

let jam = Math.floor(sisa / 3600);
sisa = sisa % 3600;

let menit = Math.floor(sisa / 60);
let detik = sisa % 60;

console.log("Total detik: " + totalDetik);
console.log(hari + " hari");
console.log(jam + " jam");
console.log(menit + " menit");
console.log(detik + " detik");
