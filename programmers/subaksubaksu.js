const n = 3;

function solution(n) {
  let result = '';
  
	for(let i = 1; i <= n; i++) {
    if(i % 2 === 1) result += '수';
    else result += '박';
  }
  
  return result;
}

solution(n);