const info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
const query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];

function solution(info, query) {
  const hashArr = [[0, 0, 0, 0], [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1], [1, 1, 0, 0], [1, 0, 1, 0], [1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 0, 1], [0, 0, 1, 1], [1, 1, 1, 0], [1, 1, 0, 1], [1, 0, 1, 1], [0, 1, 1, 1], [1, 1, 1, 1]];
  const infoObj = {};
  const result = [];
  
  for(let i = 0; i < info.length; i++) {
    const iSkill = info[i].split(' ')[0];
    const iPos = info[i].split(' ')[1];
    const iCareer = info[i].split(' ')[2];
    const iFood = info[i].split(' ')[3];
    const iScore = Number(info[i].split(' ')[4]);
    
    for(let j = 0; j < hashArr.length; j++) {
      const key = `${hashArr[j][0] ? iSkill : '-'}${hashArr[j][1] ? iPos : '-'}${hashArr[j][2] ? iCareer : '-'}${hashArr[j][3] ? iFood : '-'}`;
      
      if(Object.keys(infoObj).includes(key)) {
        infoObj[key] = [...infoObj[key], iScore].sort((a, b) => a - b);
      } else {
        infoObj[key] = [iScore];
      }
    }
  }
  // console.log(infoObj);
  
  const search = (arr, num) => {
    if(arr.length <= 1) {
      return;
    }
    
    const mid = Math.floor(arr.length / 2);
    console.log(arr, num, mid);
  };
  
  for(let q = 0; q < query.length; q++) {
    const qSkill = query[q].split(' ')[0];
    const qPos = query[q].split(' ')[2];
    const qCareer = query[q].split(' ')[4];
    const qFood = query[q].split(' ')[6];
    const qScore = Number(query[q].split(' ')[7]);
    const key = `${qSkill}${qPos}${qCareer}${qFood}`;
    
    search(infoObj[key], qScore);
  }
}

solution(info, query);