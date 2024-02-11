/*
Write a program that takes an integer as input and returns an integer with reversed digit
ordering.
 */
function myReversedInteger(number){
  
  let myReversed = 0
  if(number>=0 && number<=9){
    return number
  }
  while(number !=0){
    myReversed = myReversed * 10 +(number%10);
    number=Math.floor(number/10);
  }
  return myReversed;
}
const number=prompt("Enter any Integer")// prompt uservto enter an integr
console.log(myReversedInteger(number))