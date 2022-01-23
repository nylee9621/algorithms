const id_list = ["con", "ryan"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 3;

function solution(id_list, report, k) {
  const obj = [];
  
  for(let i = 0; i < id_list.length; i++) {
    obj.push({id: id_list[i], to: [], acc: 0});
  }
  
  for(let j = 0; j < report.length; j++) {
    const from = report[j].split(' ')[0];
    const to = report[j].split(' ')[1];
    if(!obj.filter(el => el.id === from)[0].to.includes(to)) {
      obj.filter(el => el.id === from)[0].to.push(to);
      obj.filter(el => el.id === to)[0].acc++;
    }
  }
  
  const stops = obj.filter(el => el.acc >= k).map(el => el.id);
  
  const result = obj.map(el => {
    let temp = 0;
    for(let m = 0; m < el.to.length; m++) {
      if(stops.includes(el.to[m])) temp++;
    }
    return temp;
  });
  
  return result;
}

solution(id_list, report, k);