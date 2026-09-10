//Reduce is Used to Combine all the items into one Result ]

// Reduce can also count the values

const numbers = [10,20,30,40,50];

const result = numbers.reduce((sum,number)=>{
    return sum + number;
},0);

console.log(result);


console.log("---------------------------------------------------------------------------------------");

const ProductCart = [
    {id:1,name:"laptop",price:50000},
    {id:2,name:"Iphone",price:100000},
    {id:3,name:"Xpromatch",price:60000}
]

const productValue = ProductCart.reduce((sum,product)=>{
    return sum + product.price
},0);
console.log(productValue)

console.log("-------------------------------------------------------------------------");
const num =[1,2,3,4,5,6,7,8];
const system = num.reduce((count,numbers) =>{

    if(numbers % 2 == 0)
    {
       return count + 1;
    }
    return count;

},0);
console.log(system);