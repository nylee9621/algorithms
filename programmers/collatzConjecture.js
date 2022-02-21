const num = 626331;

function solution(num) {
  let acc = 0;
  let cur = num;
  
  while(true) {
    if(cur === 1) return acc;
    if(acc >= 500) return -1;
    
    if(cur % 2 === 0) cur = cur / 2;
    else cur = cur * 3 + 1;
    
    acc++;
  }
}

solution(num);