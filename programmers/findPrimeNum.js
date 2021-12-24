const n = 10;

function solution(n) {
  const primeArr = [];
  
  if (n === 1) return primeArr.length;
  
  for(let i = 2; i <= n; i++) {
    const sqrt = Math.floor(Math.sqrt(i));
    let tf = true;
    for(let j = 0; j < primeArr.length; j++) {
      if(primeArr[j] <= sqrt) {
        if(i % primeArr[j] === 0) {
          tf = false;
          break;
        }
      } else break;
    }
    if(tf) primeArr.push(i);
  }
  
  return primeArr.length;
}

solution(n);