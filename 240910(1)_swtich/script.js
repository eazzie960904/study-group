const num = prompt("숫자를 입력하세요");

let score;
switch (true) {
  case num >= 90:
    score = "A등급";
    break;
  case num >= 80:
    score = "B등급";
    break;
  case num >= 70:
    score = "C등급";
    break;
  case num >= 60:
    score = "D등급";
    break;
  default:
    score = "F등급";
}

alert(`나의 등급은 ${score}입니다`);
