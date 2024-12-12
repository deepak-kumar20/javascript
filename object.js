//Object

const stud = {
    gender: "male",
    "full name": "raman sharma",//if the key is more than one word we should use double quotes
    email: "deepadjsdfkhsifjh@gmail.com",
    age: 19,//numbers does not require double quotes.if used in double quotes it will count as string
    location: "ghaziabad",
    logindays: ["sat", 'mon'], //it can also contain array;
    islogin:true
    
}
//anything in curly braces is treated as object

// console.table(stud);
// console.log(typeof stud);

stud.name = "Romesh sharma"
// console.log(stud);
// console.table(stud);
// console.log(stud.age);
// console.log(stud["full name"]);
// console.log(stud["email"]);


// let t1 = {}
// if (t1) {
//     console.log("t1 h")
// }

// console.log(stud.name);
// console.log(stud);

// if (stud.email) {
//     console.log(stud.email)
// } 
//in anything except false ,null,undefined is true in javascript

//(==) compares only value and === compares value and type
stud.greeting = () => {
    console.log("hello");
}
console.log(stud);
stud.greeting()

const fsum = (...stud)=>{
    console.log(stud);
    
}
fsum(1, 2, 3, 4, 4, 5, 6, 67, 77, 45);
//IIFE imidiately invoked funtion execution

(() => {
    console.log("i am iife")
})();
((uname) => {
  console.log(`${uname}`);
})("deepak");

