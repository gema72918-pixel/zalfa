let tanggal1 = { hari: 15, bulan: 3, tahun: 23 };
let tanggal2 = { hari: 20, bulan: 5, tahun: 24 };

let totalHari1 = (tanggal1.tahun * 365) + (tanggal1.bulan * 30) + tanggal1.hari;
let totalHari2 = (tanggal2.tahun * 365) + (tanggal2.bulan * 30) + tanggal2.hari;

let selisih = totalHari2 - totalHari1;

let tahun = Math.floor(selisih / 365);
let sisa = selisih % 365;

let bulan = Math.floor(sisa / 30);
let hari = sisa % 30;

console.log("Tanggal 1: " + tanggal1.hari + ":" + tanggal1.bulan + ":" + tanggal1.tahun);
console.log("Tanggal 2: " + tanggal2.hari + ":" + tanggal2.bulan + ":" + tanggal2.tahun);
console.log(tahun + " tahun");
console.log(bulan + " bulan");
console.log(hari + " hari");
