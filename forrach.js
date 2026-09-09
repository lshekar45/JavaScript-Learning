//For Each is Used to Execute All the Data in An Array 

const fruites = ["apple","banana","manango","grapes"];

fruites.forEach(fruites =>{
    console.log(fruites);
});

console.log("-----------------------------");

const products = [
    {id:1, name :"Iphone 14", price: 10000},
    {id:2, name :"Iphone 13", price: 8000},
    {id:3, name :"Iphone 12", price: 6000},
    {id:4, name :"Iphone 11", price: 4000},
    {id:5, name :"Iphone 10", price: 2000}

];

products.forEach(products=>{
    console.log("print the Product name :"  +products.name);
})
