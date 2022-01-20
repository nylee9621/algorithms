const fees = [180, 5000, 10, 600];
const records = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"];

function solution(fees, records) {
  const cars = [];
  
  for(let i = 0; i < records.length; i++) {
    if(!cars.includes(carNum(records[i]))) cars.push(carNum(records[i]));
  }
  
  return cars.sort((a, b) => Number(a) - Number(b)).map(car => calcFee(calcAccTime(car)));
}

const carTime = record => {
  return record.split(' ')[0];
}

const carNum = record => {
  return record.split(' ')[1];
}

const carStatus = record => {
  return record.split(' ')[2];
}

const hourToMin = time => {
  const hour = time.split(':')[0];
  const minute = time.split(':')[1];
  return Number(hour) * 60 + Number(minute);
}
  
const calcAccTime = carNum => {
  let accTime = 0;
  const filteredRecord = records.filter(record => record.split(' ')[1] === carNum);
  
  for(let i = 0; i < filteredRecord.length; i++) {
    if(carStatus(filteredRecord[i]) === 'IN') {
      if(i === filteredRecord.length - 1) {
        accTime += 23 * 60 + 59 - hourToMin(carTime(filteredRecord[i]));
      } else {
        accTime += hourToMin(carTime(filteredRecord[i + 1])) - hourToMin(carTime(filteredRecord[i]));
      }
    }
  }
  
  return accTime;
}

const calcFee = accTime => {
  if(accTime <= fees[0]) return fees[1];
  else return fees[1] + Math.ceil((accTime - fees[0]) / fees[2]) * fees[3];
}

solution(fees, records);