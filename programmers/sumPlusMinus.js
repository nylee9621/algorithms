const absolutes = [4,7,12];
const signs = [true,false,true];

function solution(absolutes, signs) {
  const nums = [];
  
  for(let i = 0; i < signs.length; i++) {
    if(signs[i]) nums.push(absolutes[i]);
    else nums.push(absolutes[i] * -1);
  }
  
  return nums.reduce((prev, cur) => {return prev + cur}, 0);
}

solution(absolutes, signs);

