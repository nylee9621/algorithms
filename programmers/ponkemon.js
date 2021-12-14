const nums = [3,3,3,2,2,2];

function solution(nums) {
  let set = [];
  
  for(let i = 0; i < nums.length; i++) {
    if(!set.includes(nums[i])) set.push(nums[i]);
  }
  
  if(set.length < nums.length / 2) return set.length;
  else return nums.length / 2;
}

solution(nums);