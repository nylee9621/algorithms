const n = 2;
const s = 9;

function solution(n, s) {
  const divided = Math.floor(s / n);
  let remain = s % n;
  const result = [];
  
  if(divided < 1) return [-1];
  
  for(let i = 0; i < n; i++) { 
    result.push(divided);
    if(remain) {
      result[i]++;
      remain--;
    }
  }
  
  return result.reverse();
}

solution(n, s);