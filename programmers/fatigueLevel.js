const k = 80;
const dungeons = [[80,20],[50,40],[30,10]];

function solution(k, dungeons) {
  dungeons.sort((a, b) => a[0] - b[0]);
}

solution(k, dungeons);