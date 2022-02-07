const arr1 = [[1,2],[2,3]];
const arr2 = [[3,4],[5,6]];

function solution(arr1, arr2) {
  let result = [];
  
  for(let i = 0; i < arr1.length; i++) {
    result[i] = new Array(arr1[i].length);
    for(let j = 0; j < arr1[i].length; j++) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  
  return result;
}

solution(arr1, arr2);