let totalCm = 261341;

let km = Math.floor(totalCm / 100000);
let sisa = totalCm % 100000;

let m = Math.floor(sisa / 100);
let cm = sisa % 100;

console.log("Jarak: " + totalCm + " cm");
console.log(km + " km");
console.log(m + " m");
console.log(cm + " cm");
