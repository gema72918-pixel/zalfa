const sisiAlas = 6;
const tinggi = 8;
const tinggiSisiTegak = 10;

const luasAlas = sisiAlas * sisiAlas;
const volume = (luasAlas * tinggi) / 3;
const luasSisiTegak = 4 * ((sisiAlas * tinggiSisiTegak) / 2);
const luasPermukaan = luasAlas + luasSisiTegak;

console.log("=== LIMAS SEGI EMPAT ===");
console.log("Sisi Alas: " + sisiAlas);
console.log("Tinggi Limas: " + tinggi);
console.log("Volume: " + volume);
console.log("Luas Permukaan: " + luasPermukaan);
