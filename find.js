const numbers =[
    {id:1,name:"shekar",profession:"IT Employee"},
    {id:2,name:"harsha", profession:"Net Developer"}
];

const result = numbers.find(num=>{
    return num.name  === "harsha";
})

console.log(result.name);

console.log("------------------------------------------------------------")

const num = [1,2,3,4,5,6,7,8];

const value = num.find(num =>{
    return num >1;
});

console.log(value)