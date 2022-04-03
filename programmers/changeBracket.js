const p = "(()())()";

function solution(p) {
  let result = '';
  let open = 0;
  let close = 0;
  let check = false;

  if(p === '') return p;

  for(let i = 0; i < p.length; i++) {
    if (p[i] == '(') left++;
		if (p[i] == ')') right++;
  }

  return result;
}

solution(p);