const orders = ["XYZ", "XWY", "WXA"];
const course = [2,3,4];

function solution(orders, course) {
  let alphabet = [];
  let combArr = [];
  let objByCourse = [];
  let result = [];
  
  for(let i = 0; i < orders.length; i++) {
    for(let j = 0; j < orders[i].length; j++) {
      if(!alphabet.includes(orders[i][j])) {
        alphabet.push(orders[i][j]);
      }
    }
  }
  
  for(let k = 2; k <= 10; k++) {
    combArr.push(...makingComb(alphabet, k));
  }
  
  for(let l = 0; l < combArr.length; l++) {
    let num = 0;
    
    for(let m = 0; m < orders.length; m++) {
      let tf = true;
      
      for(let n = 0; n < combArr[l].length; n++) {
        if(!orders[m].includes(combArr[l][n])) {
          tf = false;
          break;
        }
      }
      if(tf) num++;
    }
    
    if(num > 1) {
      if(objByCourse[num]) {
        objByCourse[num] = [...objByCourse[num], [combArr[l], num]];
      } else {
        objByCourse[num] = [[combArr[l], num]];
      }
    }
  }
  
  for(let o = objByCourse.length - 1; o > 1; o--) {
    for(let p = 0; p < objByCourse[o].length; p++) {
      if(course.includes(objByCourse[o][p][0].length)) {
        let tf = true;
        
        for(let q = 0; q < result.length; q++) {
          if(result[q][0].length === objByCourse[o][p][0].length) {
            if(result[q][1] < objByCourse[o][p][1]) {
              result = result.filter(el => el !== result[q]);
            } else if(result[q][1] > objByCourse[o][p][1]) {
              tf = false;
            }
          }
        }
        
        if(tf) result.push(objByCourse[o][p]);
      } 
    }
  }
  
  return result.map(el => el[0].sort().join('')).sort();
  
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