const n = 118372;

function solution(n) {
  return Number(Array.from(n.toString()).sort((a, b) => b - a).join(''));
}

solution(n);