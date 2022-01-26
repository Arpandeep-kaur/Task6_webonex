// 1. Find sum of first 10 natural numbers
  let i,s=0;
  for(i=1;i<=10;i++)
  {
      s=s+i;
  }
  console.log(s)
// 2. Print fibbonaci series upto first 10 numbers.
const n=10;
let n1=0,n2=1,t;
console.log("Fibonacci Series")
for(let i=1;i<=n;i++){
console.log(n1);
t=n1+n2;
n1=n2;
n2=t;
}
// 3. Print all the keys and values of employee object used in first problem
let employee={name:"abc",
email:"xyz@gmail.com",
address:"123,abs villa", 
age:19,
gender:"female",
phone_number:1234459927,
isMarried:false}
console.log(employee);
