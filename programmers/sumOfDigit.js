const n = 987;

function solution(n)
{
  return n.toString().split('').reduce((prev, cur) => prev + Number(cur), 0);
}

solution(n);