const files = ["f.-14", "B-5087679 Superfortress", "A-10 Thunderbolt II", "F- 14 Tomcat", "F-14 Tomcat"];

function solution(files) {
  const objs = [];
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  for(let i = 0; i < files.length; i++) {
    let numStart = -1;
    let numEnd = -1;
    
    for(let j = 0; j < files[i].length; j++) {
      if(nums.includes(files[i][j])) {
        numStart = j;
        break;
      }
    }
    
    for(let k = numStart + 1; k < files[i].length; k++) {
      if(!nums.includes(files[i][k])) {
        numEnd = k - 1;
        break;
      }
    }
    
    if(numEnd === -1) numEnd = files[i].length - 1;
    if(numEnd > numStart + 4) numEnd = numStart + 4;
    
    const temp = {id: i, text: files[i], head: files[i].slice(0, numStart).toUpperCase(), number: Number(files[i].slice(numStart, numEnd + 1))};
    objs.push(temp);
  }
  
  objs.sort((a, b) => {
    if(a.head > b.head) return 1;
    else if(a.head < b.head) return -1;
    else {
      if(a.number !== b.number) return a.number - b.number;
      else return a.id - b.id;
    }
  })
  
  return objs.map(obj => obj.text);
}

solution(files);