/*Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for
multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print
"FizzBuzz".*/
 
for (let mynumber = 1; mynumber <= 100; mynumber++) // using for loop to print number from 1 to 100
{
    if(mynumber % 3 == 0 && mynumber%5 ==0)//if condiction to check if variable mynumber is a multiple of 3 and 5
    {
        console.log("fizzBuzz");
    }
    else if(mynumber%5==0)// else if condition to check if mynumber if multiple of five

    {
        console.log("Buzz")
    }
    else if(mynumber%3==0) // else if condion to check if mynumber if multiple of 3
    {
        console.log("Fizz")
    }
    else // else condition to be executed if all  the conditions above are false
    {
        console.log(mynumber)
    }
}
