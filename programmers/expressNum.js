const n = 9;

function solution(n) {
  const status = n % 2
  let result = status === 0 ? 1 : 2;
  
  if(n === 1) return 1;
  
  for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if(n % i === 0) {
      if(i % 2 === 1) result++;
      if(i !== (n / i) && (n / i) % 2 === 1) result++;
    }
  }
  
  return result;
}

solution(n);