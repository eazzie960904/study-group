let num1 = 30;
let num2 = 6;
let num3 = 11;
let result = 0;

console.log((result = ++num1 + num2++ * num3--)); //97
num1 -= 7;
console.log((result = (num1-- / --num2) * ++num3)); //44
console.log((result = num1 += num2 * --num3)); //83
