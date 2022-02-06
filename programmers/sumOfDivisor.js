const n = 5;

function solution(n) {
  const sqrt = Math.sqrt(n);
  let result = 0;
  
  if(n === 0) return 0;
  if(n === 1) return 1;
  
  for(let i = 1; i < sqrt; i++) {
    if(n % i === 0) result = result + i + (n / i);
  }
  
  if(sqrt % 1 === 0) result += sqrt;
  
  return result;
}

solution(n);