console.log('deepak');
//name will not reassign ,
const name = "abes";
let age = 374;
console.log(name);
console.log(age);


// name = 'rahul'; 
// console.log(name)
console.log(`my name is ${name} i am ${age} years old`);
let salary;
console.log(salary);
let num = 5;
console.log(typeof num)

//data types-Primitive
// 1.Number
// 2.boolean
// 3.string
// 4.undefined
// 5.null
// 6.bigInt
// 7.symbol

//Symbol is a type that always return unique value
let a = Symbol(10);
console.log(a);
let b = Symbol(10);
console.log(b);

console.log(a===b)//datatype and value should be same 
console.log(a == b)//value should be same datatype does not matters

console.log(typeof a);

let stds = ['dfg', 'hjj', 'hj',56,899.99,false]
console.log(stds);
console.log(typeof stds);
console.table(stds)
console.log(stds[1]);
console.log(stds[-1]);
stds.push('aman')//add at last
console.log(stds);

stds.unshift('a')//add at first
console.log(stds);
stds.shift()//remove from first
console.log(stds);
stds.pop()//remove from last
console.log(stds);

stds.push('fistname', 'second name')
console.log(stds);
//array in javascript is an object
console.log(stds.includes(56))
console.log(stds.indexOf(56))
const xyz = stds.join();//to change the array to string
console.log(xyz);













