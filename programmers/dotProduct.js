const a = [1,2,3,4];
const b = [-3,-1,0,2];

function solution(a, b) {
  const ab = a.map((el, idx) => el * b[idx]);
  return ab.reduce((prev, cur) => prev + cur, 0);
}

solution(a, b);

