const price = 3;
const money = 20;
const count = 4;

function solution(price, money, count) {
  let acc = 0;
  
  for(let i = 1; i <= count; i++) {
    acc += i;
  }
  
  const need = acc * price;
  
  if(need > money) return need - money;
  else return 0;
}

solution(price, money, count);