const number = "1231234"
const k = 3;

function solution(number, k) {
  let acc = 0;
  let result = [];
  
  for(let i = 0; i < number.length; i++) {
    while(result[result.length - 1] < number[i] && acc < k) {
      result.pop(); acc++;
    }
    result.push(number[i]);
  }
  
  if(acc < k) {
    result = result.slice(0, result.length - (k - acc));
  }
  
  return result.join('');
}

solution(number, k);