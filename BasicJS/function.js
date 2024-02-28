// //function

// function stationary (copy, pen){
//     const buy = `I want to buy ${copy} copies and ${pen} pens.`;
//     return buy;
// }

// const buy = stationary (3, 4);
// console.log(buy);

//function declaration
function addition1(a, b){
    return (a+b);
}
const output1 = addition1(5, 4);


//function expression
const addition2 = function(a, b){
    return (a+b);
}
const output2 = addition2(5, 4);
console.log(output1, output2);

//arrow function
const addition3 = (a,b) => a+b;
const output3 = addition3(5, 4);
console.log(output3);
