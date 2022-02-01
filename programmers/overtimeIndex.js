const n = 4;
const works = [4, 3, 3];

function solution(n, works) {
  let max = Math.max(...works);
  let count = 0;
  
  while(true) {
    for(let i = 0; i < works.length; i++) {
      if(works[i] === max && count < n) {
        works[i]--
        count++;
      }
    }
    max--;
    if(max === 0 || count === n) break;
  }
  
  return works.reduce((prev, cur) => prev + Math.pow(cur, 2), 0);
}

solution(n, works);