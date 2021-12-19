const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2,3,4];

function solution(orders, course) {
  let combArr = [];
  const result = [];
  
  for(let i = 0; i < orders.length; i++) {
    for(let j = 2; j <= orders[i].length; j++) {
      makingComb(Array.from(orders[i]), j).forEach(a => {
        const comb = a.sort().join('');
        if(combArr.map(b => b['menu']).includes(comb)) {
          combArr.filter(c => c['menu'] === comb)[0]['count']++;
        } else {
          combArr.push({menu: comb, count: 1});
        }
      })
    }
  }
  
  for(let k = 0; k < course.length; k++) {
    const tempArr = combArr.filter(el => el['menu'].length === course[k] && el['count'] > 1).sort((a, b) => b['count'] - a['count']);
    const tempResult = [];
    
    if(tempArr.length > 0) {
      tempResult.push(tempArr[0]);
    }
    
    if(tempArr.length > 1) {
      for(let l = 1; l < tempArr.length; l++) {
        if(tempArr[l]['count'] === tempArr[0]['count']) {
          tempResult.push(tempArr[l]);
        } else break;
      }
    }
    
    if(tempResult.length > 0) {
      result.push(...tempResult.map(el => el['menu']));
    }
  }
  
  return result.sort();
}

const makingComb = (arr, leng) => {
  const result = [];

  if(leng === 1) return arr.map(i => [i]);

  arr.forEach((fixed, idx, arr) => {
    const combination = makingComb(arr.slice(idx + 1), leng - 1);
    const attached = combination.map(i => [fixed, ...i]);
    result.push(...attached);
  }) 

  return result;
}

solution(orders, course);