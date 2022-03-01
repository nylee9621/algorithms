const s = "one4seveneight";

function solution(s) {
  const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let result = s;
  let i = 0;

  while(true) {
    if(i === nums.length) break;
    const idx = result.indexOf(nums[i]);
    if(idx > -1) {
    	result = result.slice(0, idx) + i + result.slice(idx + nums[i].length);
    } else i++;
  }
  return Number(result);
}

solution(s);