const s = "qwer";

function solution(s) {
  const leng = s.length;
  
  if(leng % 2 === 0) {
    return s[leng / 2 - 1] + s[leng / 2];
  } else {
    return s[Math.floor([leng / 2])];
  }
}

solution(s)