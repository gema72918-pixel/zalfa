const jariLuar = 10;
const jariDalam = 6;
const tinggi = 15;
const pi = 3.14;

const volumeLuar = pi * jariLuar * jariLuar * tinggi;
const volumeDalam = pi * jariDalam * jariDalam * tinggi;
const volume = volumeLuar - volumeDalam;

console.log("=== TABUNG BERLUBANG ===");
console.log("Jari-jari Luar: " + jariLuar);
console.log("Jari-jari Dalam: " + jariDalam);
console.log("Tinggi: " + tinggi);
console.log("Volume: " + volume);
