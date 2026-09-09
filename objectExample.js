const Prodtuct ={
    id: 1,
    name: "Laptop",
    price: 1000,
    Anuual: function(){
        return this.price * 12;
    }
}

console.log(Prodtuct.name);
console.log(Prodtuct.price);
console.log(Prodtuct.Anuual());

console.log("---------------------------------------------------");
const Animals ={
    name: "Dog",
    lifespan:15,
    sound: function(){
        return "Bark";
    }
}

console.log(Animals[0]);
console.log(Animals.lifespan);
console.log(Animals.sound());