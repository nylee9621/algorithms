const n = 2;
const m = 5;

function solution(n, m) {
  let gcd = 0;
  let lcm = 0;
  
  const getGCD = (a, b) => {
    if(b === 0) {gcd = a; return;}
    getGCD(b, a % b);
  }
  
  getGCD(Math.max(n, m), Math.min(n, m));
  lcm = (n / gcd) * (m / gcd) * gcd;
  
  return [gcd, lcm];
}

solution(n, m);