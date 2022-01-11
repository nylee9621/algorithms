const sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];

function solution(sizes) {
  const temp = sizes.map(el => el.sort((a, b) => b - a));
  const width = Math.max(...temp.map(el => el[0]));
  const height = Math.max(...temp.map(el => el[1]));
  
  return width * height;
}

solution(sizes);