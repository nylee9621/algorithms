const scoville = [1, 2, 3, 9, 10, 12]
const K = 7;

function solution(scoville, K) {
    let result = 0;

    scoville.sort((a, b) => a - b);

    while(true) {
        if(scoville.length == 1 && scoville[0] < K) return -1;
        if(scoville[0] >= K) return result;

        const first = scoville.shift();
        const second = scoville.shift();
        const tmp = first + second * 2;

        scoville.sort((a, b) => a - b);

        result++;
    }
}

solution(scoville, K);