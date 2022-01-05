const fs = require('fs');
let input = fs.readFileSync('./input2.txt').toString();
input = input.split('\r\n');
const num = +input[0];
const flowers = [];

//{'시작': 끝}
for(let i = 1; i < input.length; i++) {
    const term = input[i].split(' ').map(el => +el);
    const start = term[0] * 100 + term[1];
    const end = term[2] * 100 + term[3];
    flowers.push({start: start, end: end})
}

function solution(num, flowers) {
    const startPoint = 301; //공주님 좋아하시는 날짜 start
    const endPoint = 1130; //공주님 좋아하시는 날짜 end
    let temp = 0; //지금 도달한 포인트
    let acc = 0; //거쳐간 포인트 수

    while(true) {
        if(temp > endPoint) break;

        temp = flowers.filter(el => el.start <= (temp === 0 ? startPoint : temp)).map(el => el.end).sort((a, b) => b - a)[0];
        acc++;
    }

    return acc;
}

solution(num, flowers);