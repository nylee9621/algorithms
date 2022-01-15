const arr1 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]];
const arr2 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]];

function solution(arr1, arr2) {
  const result = new Array(arr1.length);
  
  for(let i = 0; i < result.length; i++) {
    result[i] = new Array(arr2[1].length);
  }
  
  for(let j = 0; j < result.length; j++) {
    for(let k = 0; k < result[j].length; k++) {
      let temp = 0;
      
      for(let l = 0; l < arr1[0].length; l++) {
        temp += arr1[j][l] * arr2[l][k];
      }
      
      result[j][k] = temp;
    }
  }
  
  return result;
}

solution(arr1, arr2);