/*Write a program that accepts a string as input, capitalizes the first letter of each word in the
string, and then returns the result string*/

function capitalizesFirstlatter(mySentance)// fuction to capitalize the first letter of each word
{
   
    let myWords = mySentance.split(" ")// splitting mysentance
    for (let i = 0; i < myWords.length; i++)
     {
       myWords[i]= myWords[i][0].toUpperCase() + myWords[i].substring(1)
    }
    return myWords.join(" ")
}
const mySentance = prompt("Enter a sentance")// prompt the user to enter a sentance
 console.log(capitalizesFirstlatter(mySentance)) //calling function
