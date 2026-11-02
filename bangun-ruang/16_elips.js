const sumbua = 10;
const sumbub = 6;
const pi = 3.14;

const luas = pi * sumbua * sumbub;
const keliling = pi * (3 * (sumbua + sumbub) - Math.sqrt((3 * sumbua + sumbub) * (sumbua + 3 * sumbub)));

console.log("=== ELIPS ===");
console.log("Sumbu a: " + sumbua);
console.log("Sumbu b: " + sumbub);
console.log("Luas: " + luas);
console.log("Keliling: " + keliling.toFixed(2));
