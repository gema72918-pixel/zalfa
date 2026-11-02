const alasSegitiga = 6;
const tinggiSegitiga = 4;
const tinggiPrisma = 10;
const sisi1 = 5;
const sisi2 = 5;

const luasAlas = (alasSegitiga * tinggiSegitiga) / 2;
const volume = luasAlas * tinggiPrisma;
const kelilingAlas = alasSegitiga + sisi1 + sisi2;
const luasPermukaan = 2 * luasAlas + kelilingAlas * tinggiPrisma;

console.log("=== PRISMA SEGITIGA ===");
console.log("Alas Segitiga: " + alasSegitiga);
console.log("Tinggi Segitiga: " + tinggiSegitiga);
console.log("Tinggi Prisma: " + tinggiPrisma);
console.log("Volume: " + volume);
console.log("Luas Permukaan: " + luasPermukaan);
