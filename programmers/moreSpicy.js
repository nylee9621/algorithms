const scoville = [1, 2, 3, 9, 10, 12]
const K = 7;

class MinHeap {
    constructor() {
      // 힙을 저장할 배열
      this.heap = [];
    }
  
    // 힙의 크기를 반환하는 메서드
    size() {
      return this.heap.length;
    }
  
    // 두 값을 바꿔주는 메서드
    swap(idx1, idx2) {
      [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
  }

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