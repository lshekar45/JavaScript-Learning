// Take every item from an array, do something with it, and create a new array containing the results.

const numbers  =[1,2,3,4,5,6,7,8];
 const result =numbers.map(el => el * 2);

 console.log(result);

 console.log("---------------------------------------")
 const number  =[1,2,3,4,5,6,7,8];
 const run = number.map(num =>{
    if (num % 2 == 0)
    {
        return '${num} is Even'
    }
    else
    {
        return '${num} is Odd'
    }
  
 });

 console.log(run)

 console.log("---------------------------------------")

 const fruites = ["apple","banana","chocloate"];
 const set = fruites.map(fruite=>{
    return fruite.toUpperCase();
 });

 console.log(set)
    


