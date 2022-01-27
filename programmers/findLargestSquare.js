const board = [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]];

function solution(board) {
  const result = board;
  let max = 0;
  
  if(result.length === 1) return Math.max(...result[0]);
  if(result.length[0] === 1) return Math.max(...result.map(el => el[0]));
  
  for(let i = 1; i < result.length; i++) {
    for(let j = 1; j < result[i].length; j++) {
      if(result[i][j] >= 1) {
        result[i][j] = Math.min(result[i - 1][j - 1], result[i - 1][j], result[i][j - 1]) + 1;
      }
      if(result[i][j] > max) max = result[i][j];
    }
  }
  
  return max * max;
}

solution(board);