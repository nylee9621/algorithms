const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = 'right';

function solution(numbers, hand) {
  let result = '';
  let left = [3, 0];
  let right = [3, 2];
  const pos = {1: [0, 0], 2: [0, 1], 3: [0, 2], 4: [1, 0], 5: [1, 1], 6: [1, 2], 7: [2, 0], 8: [2, 1], 9: [2, 2], 0: [3, 1]};
  
  const press = (hand, position) => {
    result += hand;
    if(hand === "L") left = position;
    else right = position;
  }
  
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      press("L", pos[numbers[i]]);
    } else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      press("R", pos[numbers[i]]);
    } else {
			const lGap = Math.abs(1 - left[1]) + Math.abs(pos[numbers[i]][0] - left[0]);
      const rGap = Math.abs(1 - right[1]) + Math.abs(pos[numbers[i]][0] - right[0]);
      if(lGap > rGap) {
        press("R", pos[numbers[i]]);
      } else if(lGap < rGap) {
        press("L", pos[numbers[i]]);
      } else {
        press((hand === "left" ? "L" : "R"), pos[numbers[i]]);
      }
    }
  }
  
  return result;
}

solution(numbers, hand);