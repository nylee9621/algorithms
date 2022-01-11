const s = "try hello world";

function solution(s) {
  let result = [];
  
  s.split(' ').map((word, idx) => {
    result[idx] = '';
    
    for(let i = 0; i < word.length; i++) {
      if(i % 2 === 0) {
        result[idx] += word[i].toUpperCase();
      } else {
        result[idx] += word[i].toLowerCase();
      }
    }
  })
  
  return result.join(' ');
}

solution(s);