const n = 125;

function solution(n) {
  if(n < 3) return n;
  
  let trit = '';
  let reDec = 0;
  
  const trans = num => {
    const quot = Math.floor(num / 3);
    const remain = num % 3;
    
    if(quot < 3) {
      trit = quot.toString() + remain.toString() + trit;
      return;
    }
    
    trit = remain + trit;
    trans(quot);
  }
  
  trans(n);
  Array.from(trit).map((num, idx) => {
    if(num !== '0') {
      reDec += Number(num) * Math.pow(3, idx);
    }
  })
  
  return reDec;
}

solution(n);