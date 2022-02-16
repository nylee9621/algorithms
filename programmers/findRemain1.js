const n = 10;

function solution(n) {
  let i = 2;
  const num = n - 1;
  
  while(true) {
    if(num % i === 0) break;
    i++
  }
  
  return i;
}

solution(n);