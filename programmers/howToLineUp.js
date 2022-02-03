const n = 3;
const k = 6;

function solution(n, k) {
  const factorial = num => {
    return num === 1 ? 1 : factorial(num - 1) * num;
  }
  
  const nums = [];
  let result = [];
  let r = k;
  let f = factorial(n);
  
  for(let j = 1; j <= n; j++) {
    nums.push(j);
  }
  
  for(let i = n; i > 0; i--) {
    f = f / i;
    if(r % f === 0) {
      const idx = r / f - 1;
      result.push(nums[idx]);
      nums.splice(idx, 1);
      result = result.concat(nums.reverse());
      break;
    } else {
      const idx = Math.floor(r / f);
      result.push(nums[idx]);
      nums.splice(idx, 1);
      r = r % f;
    }
  }
  
  return result;
}

solution(n, k);