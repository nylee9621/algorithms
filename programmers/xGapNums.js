const x = 2;
const n = 5;

function solution(x, n) {
  const result = [];
  
  for(let i = 1; i <= n; i++) {
    result.push(i * x);
  }
  
  return result;
}

solution(x, n);