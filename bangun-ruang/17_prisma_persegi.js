const sisiAlas = 5;
const tinggi = 12;

const luasAlas = sisiAlas * sisiAlas;
const volume = luasAlas * tinggi;
const kelilingAlas = 4 * sisiAlas;
const luasPermukaan = 2 * luasAlas + kelilingAlas * tinggi;

console.log("=== PRISMA PERSEGI ===");
console.log("Sisi Alas: " + sisiAlas);
console.log("Tinggi: " + tinggi);
console.log("Volume: " + volume);
console.log("Luas Permukaan: " + luasPermukaan);
