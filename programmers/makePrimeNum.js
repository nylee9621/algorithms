const nums = [1,2,7,6,4];

function solution(nums) {  
	const makingComb = (arr, leng) => {
    const result = [];

    if(leng === 1) return arr.map(i => [i]);

    arr.forEach((fixed, idx, arr) => {
      const combination = makingComb(arr.slice(idx + 1), leng - 1);
      const attached = combination.map(i => [fixed, ...i]);
      result.push(...attached);
    }) 

    return result;
  }
  
  const combs = makingComb(nums, 3);
  let count = 0;
  
  for(let i = 0; i < combs.length; i++) {
    const sum = combs[i].reduce((prev, cur) => prev + cur, 0);
    let tf = false;
    for(let j = 2; j <= Math.sqrt(sum); j++) {
      if(sum % j === 0) {
        tf = true; break;
      }
    }
    if(!tf) count++;
  }
  
  return count;
}

solution(nums);