const numbers = [1, 1, 1, 1, 1];
const target = 3;

function solution(numbers, target) {
  let result = 0;
  
  const func = (depth, sum) => {
    if(depth === numbers.length) {
      if(sum === target) result++;
      return; 
    }
    
    func(depth + 1, sum + numbers[depth]);
    func(depth + 1, sum - numbers[depth]);
  }
  
  func(0, 0);

//   console.log(result);
  return result;
}

solution(numbers, target);