const A = [1, 4, 2];
const B = [5, 4, 4];

function solution(A,B){
  let result = 0;
  
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  
  for(let i = 0; i < A.length; i++) {
    result += A[i] * B[B.length - 1 - i];
  }
  
  return result;
}

solution(A,B);