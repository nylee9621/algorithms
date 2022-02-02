const n = 12345;

function solution(n) {
  return Array.from(n.toString()).reverse().map(num => +num);
}

solution(n);