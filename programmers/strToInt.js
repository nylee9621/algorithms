const s = "1234";

function solution(s) {
  if(s[0] === '+') {
    return Number(s.slice(1));
  } else if(s[1] === '-') {
    return Number(s.slice(1)) * (-1);
  } else return Number(s);
}

solution(s);