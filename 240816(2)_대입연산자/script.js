let i = 2;
let j = 11;

j += i;
console.log(`현재 i: ${i}, j:${j}`);
console.log(`두수를 더한 결과를 ${j}에 넣으면 ${j}의 값은 ${j}입니다`);

j -= i;
console.log(`현재 i:${i}, j:${j}`);
console.log(`두수를 뺀 결과를 ${j}에 넣으면 ${j}의 값은 ${j}입니다`);

j *= i;
console.log(`현재 i:${i}, j:${j}`);
console.log(`두수를 곱한 결과를 ${j}에 넣으면 ${j}의 값은 ${j}입니다`);

j /= i;
console.log(`현재 i:${i}, j:${j}`);
console.log(`두수를 나눈 결과를 ${j}에 넣으면 ${j}의 값은 ${j}입니다`);

j %= i;
console.log(`현재 i:${i}, j:${j}`);
console.log(`두수를 나눈 나머지를 ${j}에 넣으면 ${j}의 값은 ${j}입니다`);
