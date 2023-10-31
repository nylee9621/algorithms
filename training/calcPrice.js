//food를 관리하는 함수
// function selectPrice(fruitNum, priceOpt1, priceOpt2, priceOpt3) {
//     let fruitName = fruitNum == 1 ? '감자' : (fruitNum == 2 ? '옥수수' : '수박');
//     console.log(`${fruitNum}번 ${fruitName}를(을) 선택하셨습니다. 1. ${priceOpt1} 2. ${priceOpt2} 3. ${priceOpt3}`)
    
//     userInput2 = Number(prompt("입력 : "));
//     let priceName = userInput2 == 1 ? priceOpt1 : (userInput2 == 2 ? priceOpt2 : priceOpt3);
//     console.log(`${fruitName} ${priceName}를(을) 선택하셨습니다.`)

//     if(priceName == '1천원어치') price = 1000;
//     if(priceName == '2천원어치') price = 2000;
//     if(priceName == '3천원어치') price = 3000;
//     if(priceName == '4천원어치') price = 4000;
//     if(priceName == '5천원어치') price = 5000;
//     if(priceName == '6천원어치') price = 6000;
//     if(priceName == '1만원어치') price = 10000;
//     if(priceName == '2만원어치') price = 20000;
//     if(priceName == '3만원어치') price = 30000;
// }

// if(userInput1 == 1) {
//     selectPrice(1, '1천원어치', '2천원어치', '3천원어치');
// } else if(userInput1 == 2) {
//     selectPrice(2, '4천원어치', '5천원어치', '6천원어치');
// } else if(userInput1 == 3) {
//     selectPrice(3, '1만원어치', '2만원어치', '3만원어치');
// }
// console.log('몇개를 주문하시겠습니까');
// num = Number(prompt("입력 : "));
// console.log(`총 금액: ${price * num}원`);

let nameTag = [{idx: 1, name: '감자'}, {idx: 2, name: '옥수수'}, {idx: 3, name: '수박'}];
let priceTag = [
    {idx: 1, group: 1, tag: '1천원어치', price: 1000}, {idx: 2, group: 1, tag: '2천원어치', price: 2000}, {idx: 3, group: 1, tag: '3천원어치', price: 3000}, 
    {idx: 1, group: 2, tag: '4천원어치', price: 4000}, {idx: 2, group: 2, tag: '5천원어치', price: 5000}, {idx: 3, group: 2, tag: '6천원어치', price: 6000}, 
    {idx: 1, group: 3, tag: '1만원어치', price: 10000}, {idx: 2, group: 3, tag: '2만원어치', price: 20000}, {idx: 3, group: 1, tag: '3만원어치', price: 30000}, 
];

function foodSelect(){
    console.log("다음 세 가지 중 고르시오.");
    nameTag.forEach(el => console.loe(`${el.idx}. ${el.name}`));
    var userInput1 = Number(prompt("입력 : "));

    if(userInput1 == 1){
        return foodPriceSelect("감자",1000,2000,3000);
    }
    if(userInput1 == 2){
        return foodPriceSelect("옥수수",4000,5000,6000);
    }
    if(userInput1 == 3){
        return foodPriceSelect("수박",10000,20000,30000);
    }
    if(userInput1 == 4){
        return foodPriceSelect("호박",1,20000,30000);
    }
    if(userInput1 == 5){
        return foodPriceSelect("과자",10000,2,30000);
    }
    return 0;
}
//food의 가격을 관리하는 함수
function foodPriceSelect(food,price1,price2,price3){
    console.log(`다음 세 가지 중 고르시오. 1. ${price1}. 2.${price2} 3. ${price3}`);
    var userInput1 = Number(prompt("입력 : "));

    if(userInput1 == 1){
        return foodNumberSelect(food,price1);
    }
    if(userInput1 == 2){
        return foodNumberSelect(food,price2);
    }
    if(userInput1 == 3){
        return foodNumberSelect(food,price3);
    }
    return 0;
}
//food의 개수를 관리하는 함수
function foodNumberSelect(food,price){
    var number = Number(prompt("개수 : "));
    return number*price;
}

let sum = foodSelect();
console.log(`총 금액: ${sum}원`);