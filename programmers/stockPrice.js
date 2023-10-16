const prices = [1, 2, 3, 2, 3];

function solution(prices) {
    const result = prices.map(el => 0);
    const stack = [];

    prices.forEach((el, idx) => {
        while(stack.length > 0 && stack[stack.length - 1][0] > el) {
            const popIdx = stack.pop()[1];
            result[popIdx] = idx - popIdx;
        }
        stack.push([el, idx]);
    })

    stack.forEach(el => {
        result[el[1]] = stack[stack.length - 1][1] - el[1];
    })

    return result;
}

solution(prices);