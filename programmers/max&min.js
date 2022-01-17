const s = "1 2 3 4";

function solution(s) {
  const nums = [];
  
  s.split(' ').forEach(el => nums.push(Number(el)));
  
  return `${Math.min(...nums)} ${Math.max(...nums)}`
}

solution(s);