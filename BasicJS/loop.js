//array
const calcTip = function (bill){
    return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for (let i = 0; i < 10; i++){
    const tip = calcTip (bills [i]);
    tips.push (tip);
    totals.push (tip + bill[i]);
}

console.log (bills);
console.log (tips);
console.log (totals);