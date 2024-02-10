/*Write a program to generate the Fibonacci sequence up to 100
*/
// initializing the first fibonacci sequence usinh variable a and b i.e [0, 1]
let a = 0;
let b = 1;
let n=12; // using 12 terms to generate a fibonacci sequence up to  100
for(let i=1; i<=n; i++)
{
    console.log(a)
   let result = b + a
   a = b
   b = result
   
}