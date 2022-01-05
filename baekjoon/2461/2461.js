const fs = require('fs');
let input = fs.readFileSync('./input2.txt').toString();
input = input.split('\r\n');
const students = [];

for(let i = 1; i < input.length; i++) {
    students.push(input[i].split(' ').map(el => +el).sort((a, b) => a - b));
}

function solution(students) {
    let temp = students.map((el, idx) => [el[0], idx, 0]).sort((a, b) => a[0] - b[0]);

    while(true) {
        const next = [...temp.slice(1), [students[temp[0][1]][temp[0][2] + 1], temp[0][1], temp[0][2] + 1]].sort((a, b) => a[0] - b[0]);
        const curGap = temp[temp.length - 1][0] - temp[0][0];
        const nextGap = next[next.length - 1][0] - next[0][0];

        if(curGap > nextGap) temp = next;
        else break;
    }

    return temp[temp.length - 1][0] - temp[0][0];
}

const result = solution(students);
console.log(result);