const a = 5;
const b = 24;

function solution(a, b) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(2016, a - 1, b);
  return days[date.getDay()];
}

solution(a, b);