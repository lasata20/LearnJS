const id1 = ["Lasata", "Shrestha", 23, "Bhaktapur"]
console.log(id1);

id1[id1.length - 1] = "Kathmandu";
console.log(id1);

//add elements at last
id1.push("JavaScript");
console.log(id1);

//add elements at first
id1.unshift("Hello worlld");
console.log(id1);

//remove elements
id1.pop(); //last 
console.log(id1);

id1.shift(); //first
console.log(id1);


function calcTip(bill){
    const tip = bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
    return tip;
}

const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const total = [(bill[0] + tip[0]), (bill[1] + tip[1]), (bill[2] + tip[2])];

console.log(bill, tip, total);