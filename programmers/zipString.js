const s = "xababcdcdababcdcd";

function solution(s) {
  let save = s;
  
  for(let i = 1; i <= s.length; i++) {
    let temp = s;
    let short = '';
   
    const zip = (piece, num) => {
      if(temp.length === 0) {
        short += (num > 1 ? num : '') + piece;
        return;
      }
      
      if(temp.indexOf(piece) === 0) {
        temp = temp.slice(i);
        zip(piece, num + 1);
      } else {
        short += (num > 1 ? num : '') + piece;
        zip(temp.slice(0, i), 0);
      }
    }
    
    zip(temp.slice(0, i), 0);
    
    if(save.length > short.length) save = short;
  }
  
  return save.length;
}

solution(s);