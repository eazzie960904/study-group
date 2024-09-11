const name = prompt("이름입력해봐");
const height = prompt("키를입력해봐");
const weight = prompt("몸무게를입력해봐");

const normalweight = (height - 100) * 0.9;
let result = weight <= normalweight + 5 && weight >= normalweight - 5;

result = result ? "적정체중입니다" : "적정체중이아닙니다.";
alert(result);
