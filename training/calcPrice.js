//food를 관리하는 함수
function selectPrice(fruitNum, priceOpt1, priceOpt2, priceOpt3) {
    let fruitName = fruitNum == 1 ? '감자' : (fruitNum == 2 ? '옥수수' : '수박');
    console.log(`${fruitNum}번 ${fruitName}를(을) 선택하셨습니다. 1. ${priceOpt1} 2. ${priceOpt2} 3. ${priceOpt3}`)
    
    userInput2 = Number(prompt("입력 : "));
    let priceName = userInput2 == 1 ? priceOpt1 : (userInput2 == 2 ? priceOpt2 : priceOpt3);
    console.log(`${fruitName} ${priceName}를(을) 선택하셨습니다.`)

    if(priceName == '1천원어치') price = 1000;
    if(priceName == '2천원어치') price = 2000;
    if(priceName == '3천원어치') price = 3000;
    if(priceName == '4천원어치') price = 4000;
    if(priceName == '5천원어치') price = 5000;
    if(priceName == '6천원어치') price = 6000;
    if(priceName == '1만원어치') price = 10000;
    if(priceName == '2만원어치') price = 20000;
    if(priceName == '3만원어치') price = 30000;
}

if(userInput1 == 1) {
    selectPrice(1, '1천원어치', '2천원어치', '3천원어치');
} else if(userInput1 == 2) {
    selectPrice(2, '4천원어치', '5천원어치', '6천원어치');
} else if(userInput1 == 3) {
    selectPrice(3, '1만원어치', '2만원어치', '3만원어치');
}
console.log('몇개를 주문하시겠습니까');
num = Number(prompt("입력 : "));
console.log(`총 금액: ${price * num}원`);