const n = 3;

function solution(n) {
  let prev = 0;
  let cur = 1;
  
  for(let i = 2; i <= n; i++) {
    //모듈러 연산의 성질: (A + B) % C = ( ( A % C ) + ( B % C) ) % C
    let temp = (prev % 1234567 + cur % 1234567) % 1234567;
    prev = cur;
    cur = temp;
  }
  
  return cur;
}

solution(n);