const numbers = [1,2,3,4,6,7,8,0];

function solution(numbers) {
  const max = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].reduce((prev, cur) => prev + cur, 0);
  const sum = numbers.reduce((prev, cur) => prev + cur, 0);
  
  return max - sum;
}

solution(numbers);