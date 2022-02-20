const x = 10;

function solution(x) {
  const sum = Array.from(x.toString()).reduce((prev, cur) => prev + Number(cur), 0);
  return x % sum === 0;
}

solution(x);