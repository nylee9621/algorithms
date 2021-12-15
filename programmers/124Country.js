function solution(n) {
  const rule = [0, 1, 2, 4];
  let stack = [];
  let changed = '';
  
  const changing = num => {
    if(num <= 3) {
      stack.push(num);
      return;
    }
    
    if(num % 3 === 0) {
      stack.push(3);
      changing((num - 3) / 3);
    } else {
      stack.push(num % 3);
      changing((num - (num % 3)) / 3);
    }
  }
  
  changing(n);
  
  for(let i = stack.length - 1; i >= 0; i--) {
    changed += rule[stack[i]];
  }
  
  return changed;
}

solution(11);