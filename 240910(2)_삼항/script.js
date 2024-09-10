const num1 = Number(prompt("숫자를 입력하세요"));
const num2 = Number(prompt("숫자를 입력하세요"));

num1 > num2
  ? alert(`${num1}은 ${num2}보다 큽니다.`)
  : alert(`${num2}는 ${num1}보다 큽니다.`);
