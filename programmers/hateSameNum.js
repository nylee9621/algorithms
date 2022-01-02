const arr = [4,4,4,3,3];

function solution(arr)
{
  const result = [arr[0]];
  let temp = arr[0];
  
  if(arr.length > 1) {
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] !== temp) {
        result.push(arr[i]);
        temp = arr[i];
      }
    }
  }
  
  return result;
}

solution(arr);