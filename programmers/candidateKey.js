const relation = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]];

function solution(relation) {
  let comb = [];
  let result = [];
  
  for(let i = 1; i <= relation[0].length; i++) {
    makeComb(relation[0].map((el, idx) => idx), i).forEach(el => comb.push(el));
  }
  
  for(let j = 0; j < comb.length; j++) {
    let isIncluded = false;
    
    for(let k = 0; k < result.length; k++) {
      if(checkIncludes(result[k], comb[j])) isIncluded = true;
    }
    
    if(!isIncluded) {
      const arr = relation.map(el => {
        const temp = [];
        comb[j].forEach(num => temp.push(el[num]));
        return temp;
      })
      const set = new Set(arr.map(el => JSON.stringify(el)));
      
      if(arr.length === set.size) result.push(comb[j]);
    }
  }
  
  return result.length;
}
 
const makeComb = (arr, leng) => {
  const result = [];
  
  if(leng === 1) return arr.map(i => [i]);
  
  arr.forEach((fixed, idx, arr) => {
    const combination = makeComb(arr.slice(idx + 1), leng - 1);
    const attached = combination.map(i => [fixed, ...i]);
    result.push(...attached);
  }) 
  
  return result;
}

const checkIncludes = (short, long) => {
  let tf = true;
  
  for(let i = 0; i < short.length; i++) {
    if(!long.includes(short[i])) tf = false;
  }
  
  return tf;
}

solution(relation);