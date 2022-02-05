const A = [5,1,3,7];
const B = [2,2,6,8];

function solution(A, B) {
  let result = 0;
  let point = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  
  for(let i = 0; i < A.length; i++) {
    let temp = result;
    for(let j = point; j < B.length; j++) {
      if(B[j] > A[i]) {
        result++;
        point = j + 1;
        break;
      }
    }
    if(temp === result) break;
  }
  
  return result;
}

solution(A, B);