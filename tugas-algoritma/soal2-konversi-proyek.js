let totalHari = 400;

let tahun = Math.floor(totalHari / 365);
let sisa = totalHari % 365;

let bulan = Math.floor(sisa / 30);
let hari = sisa % 30;

console.log("Total hari: " + totalHari);
console.log(tahun + " tahun");
console.log(bulan + " bulan");
console.log(hari + " hari");
