const scoville = [1, 2, 3, 9, 10, 12]
const K = 7;

const leftChildIdx = idx => idx * 2 + 1;
const rightChildIdx = idx => idx * 2 + 2;
const parentIdx = idx => Math.floor((idx - 1) / 2);

const swapNode = (arr, idx1, idx2) => {
  const smaller = idx1 > idx2 ? idx2 : idx1;
  const bigger = idx1 > idx2 ? idx1 : idx2;
  return [...arr.slice(0, smaller), arr[bigger], ...arr.slice(smaller + 1, bigger), arr[smaller], ...arr.slice(bigger + 1)];
}

const pushNode = (arr, el) => {
  let temp = [...arr, el];
  let elIdx = arr.length;
  
  while(temp[parentIdx(elIdx)] > el) {
    temp = swapNode(temp, parentIdx(elIdx), elIdx);
    elIdx = parentIdx(elIdx);
  }
  
  return temp;
}

const removeNode = arr => {
  let temp = [arr[arr.length -1], ...arr.slice(1, arr.length - 1)];
  let elIdx = 0;
  const el = temp[0];
  
  while(true) {
    if(rightChildIdx(elIdx) < temp.length) {
      if(el > temp[leftChildIdx(elIdx)] && el > temp[rightChildIdx(elIdx)]) {
        const smaller = temp[leftChildIdx(elIdx)] < temp[rightChildIdx(elIdx)] ? leftChildIdx(elIdx) : rightChildIdx(elIdx);
        temp = swapNode(temp, smaller, elIdx);
        elIdx = smaller;
      } else if(el > temp[leftChildIdx(elIdx)]) {
         temp = swapNode(temp, leftChildIdx(elIdx), elIdx);
         elIdx = leftChildIdx(elIdx);
      } else if(el > temp[rightChildIdx(elIdx)]) {
         temp = swapNode(temp, rightChildIdx(elIdx), elIdx);
         elIdx = rightChildIdx(elIdx);
      } else break;
    } else if(leftChildIdx(elIdx) < temp.length && el > temp[leftChildIdx(elIdx)]) {
       temp = swapNode(temp, leftChildIdx(elIdx), elIdx);
       elIdx = leftChildIdx(elIdx);
    } else break;
  }
  
  return temp;
}

function solution(scoville, K) {
  let result = 0;
  let sortedArr = [];

  for(let i in scoville) {
    sortedArr = pushNode(sortedArr, scoville[i]);
  }
 
  while(true) {
    if(sortedArr.length == 1 && sortedArr[0] < K) return -1;
    if(sortedArr[0] >= K) return result;

    const first = sortedArr[0];
    const second = sortedArr[1];
    const temp = first + second * 2;

    sortedArr = removeNode(sortedArr);
    sortedArr = removeNode(sortedArr);
    sortedArr = pushNode(sortedArr, temp);
    
    result++;
  }
}

solution(scoville, K);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  poll() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);
    while (
      this.heap[parentIdx] &&
      this.heap[index][1] < this.heap[parentIdx][1]
    ) {
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown() {
    let index = 0;
    let leftIdx = index * 2 + 1;
    let rightIdx = index * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[leftIdx][1] < this.heap[index][1]) ||
      (this.heap[rightIdx] && this.heap[rightIdx][1] < this.heap[index][1])
    ) {
      let smallerIdx = leftIdx;
      if (
        this.heap[rightIdx] &&
        this.heap[rightIdx][1] < this.heap[smallerIdx][1]
      ) {
        smallerIdx = rightIdx;
      }

      this.swap(index, smallerIdx);
      index = smallerIdx;
      leftIdx = index * 2 + 1;
      rightIdx = index * 2 + 2;
    }
  }
}