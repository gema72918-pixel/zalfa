let uang = 2775;
let sisa = uang;

let pecahan1000 = Math.floor(sisa / 1000);
sisa = sisa % 1000;

let pecahan500 = Math.floor(sisa / 500);
sisa = sisa % 500;

let pecahan100 = Math.floor(sisa / 100);
sisa = sisa % 100;

let pecahan50 = Math.floor(sisa / 50);
sisa = sisa % 50;

let pecahan25 = Math.floor(sisa / 25);

console.log("Nilai uang: Rp" + uang);
console.log(pecahan1000 + " buah Rp1000");
console.log(pecahan500 + " buah Rp500");
console.log(pecahan100 + " buah Rp100");
console.log(pecahan50 + " buah Rp50");
console.log(pecahan25 + " buah Rp25");
