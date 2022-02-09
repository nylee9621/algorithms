const s = "Zbcdefg";

function solution(s) {
  return Array.from(s).sort().reverse().join('');
}

solution(s);