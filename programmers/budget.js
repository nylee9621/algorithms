const d = [1,3,2,5,4];
const budget = 9;

function solution(d, budget) {
  d.sort();
  let acc = 0;
  let i = 0;
  
  while(true) {
    if(acc >= budget) break;
    acc += d[i];
    i++;
  }
  
  if(acc === budget) return i;
  else return i - 1;
}

solution(d, budget);