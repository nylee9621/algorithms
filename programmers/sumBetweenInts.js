const a = 3;
const b = 5;

function solution(a, b) {
  return (a + b) * (Math.abs(a - b) + 1) / 2;
}

solution(a, b);