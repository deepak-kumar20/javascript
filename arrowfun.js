const say = () => console.log("hello ");

   
say();
const sum = (a, b) => {return  a + b };
//if we use curly braces we have to use return keyword 
console.log(sum(4, 6))
const mul = (a=9, b=7) => console.log(a * b);
mul()
const sub = (a, b) => a - b;
console.log(sub(4, 6));