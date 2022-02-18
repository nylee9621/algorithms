const arr = [5, 9, 7, 10];
const divisor = 5;

function solution(arr, divisor) {
	const result = arr.filter(num => num % divisor === 0).sort((a, b) => a - b);
  
  if(result.length === 0) return [-1];
  else return result;
}

solution(arr, divisor);