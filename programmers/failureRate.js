const stages = [2, 1, 2, 6, 2, 4, 3, 3];

function solution(N, stages) {
  let population = stages.length;
  let failArr = [];
  
  for(let i = 1; i < N + 1; i++) {
    const rest = stages.filter(el => el === i).length;
    failArr.push({stage: i, ratio: rest/population});
    population = population - rest;
  }
  
  const sortByRatioFunc = (a, b) => {
    if(a.ratio > b.ratio) return -1;
    if(a.ratio === b.ratio) return 0;
    if(a.ratio < b.ratio) return 1;
  }
  
  const sortedArr = failArr.sort((a, b) => sortByRatioFunc(a, b));

  return sortedArr.map(el => el.stage);
}

solution(N, stages);