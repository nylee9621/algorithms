const n = 121;

function solution(n) {
  const sqrt = Math.sqrt(n);

  if(sqrt % 1 === 0) return Math.pow(sqrt + 1, 2);
  else return -1;
}

solution(n);