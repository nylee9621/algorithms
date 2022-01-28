const n = 15;

function solution(n) {
  let binN = n.toString(2);
  
  const changePosition = arr => {
    const temp = [];
    for(let i in arr) {
      if(arr[i] === '0') temp.unshift('0');
      else temp.push('1');
    }
    return temp;
  }
  
  if(binN.includes('01')) {
    const reverse = Array.from(binN).reverse().join('')
    const idx = binN.length - reverse.indexOf('10') - 2;
    const head = binN.slice(0, idx) + '10';
    const tail = binN.slice(idx + 2);
    binN = head + changePosition(tail).join('');
  } else {
    binN += 0;
    const tail = binN.slice(1);
    binN = '1' + changePosition(tail).join('');
  }
  
  return parseInt(binN, 2)
}

solution(n);