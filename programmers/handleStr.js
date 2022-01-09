const s = "a234";

function solution(s) {
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  if(s.length !== 4 && s.length !== 6) {
    return false;
  } else {
    let result = true;
    for(let i = 0; i < s.length; i++) {
      if(!nums.includes(s[i])) result = false;
    }
    return result;
  }
}

solution(s);