const d = [100];
const budget = 101;

function solution(d, budget) {
  d.sort((a, b) => a - b);
  const arr = [];
  let acc = 0;
  
  for(let i = 0; i < d.length; i++) {
    if(acc + d[i] <= budget) {
      arr.push(d[i]);
      acc += d[i];
    }
    else break;
  }

  return arr.length;
}
solution(d, budget);