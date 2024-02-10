/*Write a program that takes an integer as input and returns true if the input is a power of two.*/
 function retursPower2(mynumber) // fuction to check if an integer is a power of 2
 {
    if(mynumber<1)// if condition to check if my number is < 1 and return false if true
    {
        return false
    }
    while(mynumber>1)// while loop for looping if the mynumber is > 1 is true
    {
        if(mynumber % 2 !==0){
            return false
        }
        mynumber = mynumber /2;
    }
    return true
 }

 const mynumber=prompt("Enter any integer");// promting the user to enter any integer
 console.log(retursPower2(mynumber))