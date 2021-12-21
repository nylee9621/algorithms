const info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
const query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];

function solution(info, query) {
  const result = [];
  
  for(let i = 0; i < query.length; i++) {
    const qSkill = query[i].split(' and ')[0];
    const qPos = query[i].split(' and ')[1];
    const qCareer = query[i].split(' and ')[2];
    const qFood = query[i].split(' and ')[3].split(' ')[0];
    const qScore = Number(query[i].split(' and ')[3].split(' ')[1]);
    const qArr = [qSkill, qPos, qCareer, qFood, qScore];
    let sorted = [...info];
    
    qArr.forEach((el, idx) => {
      if(el !== '-') {
        if(idx < 4) {
          sorted = sorted.filter(str => str.split(' ')[idx] === el);
        } else {
          sorted = sorted.filter(str => Number(str.split(' ')[idx]) >= el);
        }
      }
    })
    
    result.push(sorted.length);
  }
  
  return result;
}

solution(info, query);