const s = "110010101001";

function solution(s) {
  let repeat = 0;
  let remove = 0;
  
  const change = str => {
    if(str === '1') return;
    
    let zero = 0;
    let temp = '';
    
    for(let i in str) {
      if(str[i] === '0') zero++;
      else temp += '1'
    }
    
    remove += zero;
    repeat++;
    change(temp.length.toString(2));
  }
  
  change(s);
  
  return [repeat, remove];
}

solution(s);