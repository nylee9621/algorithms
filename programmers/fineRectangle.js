const w = 8;
const h = 12;

function solution(w, h) {
  let gcd = 0;

  const calcGCD = (big, small) => {
    if(small === 0) {gcd = big; return;}
    calcGCD(small, big % small);
  }
  
  calcGCD(Math.max(w, h), Math.min(w, h));
  
  return w * h - (w + h - gcd);
}

solution(w, h);