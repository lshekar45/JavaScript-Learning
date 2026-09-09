//filter() is used when you want to select only the items that satisfy a condition.

const number = [1,2,3,4,5,6,7,8,9];
const result = number.filter(num =>{
    return num % 2 === 0;
});
console.log(result)

const odd = [100,51,600,650,860];

const res = odd.filter(number =>{
    return number % 2 !== 0
});
console.log(res);

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 30000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];


const value = products.filter(pro =>{
    return pro.price < 5000;
});

console.log(value)

const numbers = [10, 15, 20, 25, 30, 35];

const rem = numbers.filter(num=>{
    return num > 20;
})

console.log(rem)