const n = 6;

function solution(n) {
  let result = 0;
  
  if(n === 1) return 0;
  
  for(let i = 2; i <= n; i++) {
    if(i % 2 === 0) {
      if(i === 2) {
        result++;
      } 
    } else {
      const sqrt = Math.floor(Math.sqrt(i));
      let tf = true;
      for(let j = 3; j <= sqrt; j++) {
        if(i % j === 0) {
          tf = false;
          break;
        }
      }
      if(tf) result++;
    }
  }
  
  return result;
}

solution(n);