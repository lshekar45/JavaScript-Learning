// It allows you to extract values from arrays and objects into variables easily.

const product =
{
    id:1,
    name:"shekar",
    price:50000
}

const {id,name,price} = product;
console.log(name);
console.log(price);

//Array Destructuring

console.log("Array Destruction");
const fruites =["apple","banana","pineapple"];

const [frtst,second,third] = fruites;

console.log(frtst);

console.log(second);

console.log(third);


const user = {
    id: 101,
    name: "Lakshmi",
    email: "lakshmi@example.com",
    role: "Developer"
};

console.log("Destring Example2")
const {id_,name_,email,role} = user

console.log(email);
console.log(name);