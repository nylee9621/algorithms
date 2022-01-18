const s = "3people unFollowed me";

function solution(s) {
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const arr = [];
  
  s.split(' ').forEach(word => {
    let temp = word.toLowerCase();
    
    if(!nums.includes(word[0]) && word[0]) {
      temp = word[0].toUpperCase() + temp.slice(1);
    }
    
    arr.push(temp);
  })
  
  return arr.join(' ');
}

solution(s);