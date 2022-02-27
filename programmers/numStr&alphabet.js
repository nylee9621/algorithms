const s = "one4seveneight";

function solution(s) {
    const nums = {'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'};
    let result = s;

    for(let i = 0; i < Object.keys(nums); i++) {
        const idx = s.indexOf(Object.keys(nums)[i]);
        while(idx > -1) {
            s = s.slice(0, idx) + nums[idx] + s.slice(idx + Object.keys(nums).length);
        }
    }

    return result;
}

solution(s);