/*
Write a program that counts the number of vowels in a sentence.
 
*/

let mySentance =prompt("Enter a Sentance")// prompt the user to enter a sentance
let vowelsCount =0;
for(let i=0; i<mySentance.length; i++){
  let lowerWords= mySentance[i].toLowerCase();//making sentance to lowercase

if(lowerWords=="a" || lowerWords=="e" || lowerWords=="i" || lowerWords=="o" || lowerWords=="u"){
  vowelsCount++;
}
}

if(vowelsCount == 1){
  console.log('There is only:' + vowelsCount ,"vowel")
}
else if(vowelsCount == 0){
  console.log("There is 0 vowel in the Sentance")
}
else{
console.log('Number of vowels are:', vowelsCount)
}
