const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];

function solution(clothes) {
    let result = 1;
    let obj = {};

    clothes.forEach(el => obj[el[1]] = (obj[el[1]] || 0) + 1);

    for(key in obj) {
        result = result * (obj[key] + 1);
    }

    return result - 1;
}

solution(clothes);