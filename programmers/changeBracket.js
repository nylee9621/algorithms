const p = "(()())()";

function solution(p) {
  let result = '';
  let open = 0;
  let close = 0;
  let stack = [];

  if(p === '') return p;

  while(true) {
    if(true) {

    } else {

    }
  }
  return result;
}

function check(p) {
  var stack = [];
  for (let i = 0; i < p.length; i++) {
      if (p[i] === '(') stack.push('(')
      else {
          if (stack.length === 0) return false;
          stack.pop();
      }
  }
  return true;
}

solution(p);