const word = "AAAAE";

function solution(word) {
  const obj = {'A': 1, 'E': 2, 'I': 3, 'O': 4, 'U': 5};
  let count = 0;
  
  const notation = digit => {
    let num = 0;
    for(let i = 0; i <= 5 - digit; i++) {
      num = num * 5 + 1;
    }
    return num;
  }
  
  for(let j = 0; j < word.length; j++) {
    count += notation(j + 1) * (obj[word[j]] - 1) + 1;
  }
  
  return count;
}

solution(word);