const n = 2;
const t = 4;
const m = 2;
const p = 1;

function solution(n, t, m, p) {
  let result = '';
  let acc = '';
  let num = 0;

  while(true) {
    if(acc.length >= t * m) break;
    acc += num.toString(n).toUpperCase();
    num++;
  }

  for(let i in acc) {
    if(i % m === p - 1) result += acc[i];
  }

  return result.slice(0, t);
}

solution(n, t, m, p);