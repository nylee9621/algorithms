const s = "a B z";
const n = 1;

function solution(s, n) {
  const arr = s.split('');
  
  const result = arr.map(el => {
    if(el !== ' ') {
      const num = el.charCodeAt(0);
      if(num >= 65 && num <=90) {
        return String.fromCharCode(num + n - (num + n > 90 ? 26 : 0));
      } else {
        return String.fromCharCode(num + n - (num + n > 122 ? 26 : 0));
      }
    } else return ' ';
  })
  
  return result.join('');
}

solution(s, n);