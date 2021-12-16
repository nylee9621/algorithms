const n = 2;
const words =	["hello", "one", "even", "never", "now", "world", "draw"];

function solution(n, words) {
  let stock = [words[0]];
  let out = 0;
  
  for(let i = 1; i < words.length; i++) {
    const last = stock[i - 1][stock[i - 1].length - 1];
    const start = words[i][0];

    if(last !== start || stock.includes(words[i])) {
      out = i + 1;
      break;
    } else {
      stock.push(words[i]);
    }
  }
  
  if(out !== 0) {
    if(out % n === 0) return [n, Math.ceil(out / n)];
    else return [out % n, Math.ceil(out / n)];
  } else return [0, 0];
}

solution(n, words);