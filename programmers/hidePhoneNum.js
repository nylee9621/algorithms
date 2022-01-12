const phone_number = "01033334444";

function solution(phone_number) {
  let result = phone_number.slice(phone_number.length - 4);
  
  for(let i = phone_number.length - 1; i >= 4; i--) {
    result = '*' + result;
  }
  
  return result;
}

solution(phone_number);