const k = 80;
const dungeons = [[80,20],[50,40],[30,10]];

function permutation(arr, num){
  const res = [];
  if(num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0,idx), ...arr.slice(idx+1)];
    const permutations = permutation(rest, num-1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    res.push(...attach);
  })
  return res;
}

function solution(k, dungeons) {
  const per = permutation(dungeons, dungeons.length);
  let max = 0;
	console.log(per);
  for(let i = 0; i < per.length; i++) {
    let temp = k;
    for(let j = 0; j < per[i].length; j++) {
      if(temp >= per[i][j][0]) {
        temp -= per[i][j][1];
      } else {
        if(j > max) max = j;
        break;
      }
      console.log(temp);
    }
  }
  // return max;
}

solution(k, dungeons);