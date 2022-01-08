const numbers = [5,0,2,7];

function solution(numbers) {
  const sum = [];
  
  for(let i = 0; i < numbers.length - 1; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      const temp = numbers[i] + numbers[j];
      
      if(!sum.includes(temp)) sum.push(temp);
    }
  }
  
  return sum.sort((a, b) => a - b);
}

solution(numbers);