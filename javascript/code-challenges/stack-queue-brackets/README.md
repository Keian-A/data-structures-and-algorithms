# Stack-Queue-Brackets

## Description
- Use a stack to determine if a given string input (using three different bracket types) is balanced. Return true if it is, return false if not.


## Approach & Efficiency
- For this challenge, I did get some assistance from some [python code](https://runestone.academy/runestone/books/published/pythonds/BasicDS/SimpleBalancedParentheses.html) so it should be known that a similar algorithm was used in my case, obviously changed for syntax and also small modifications to allow for the additional text.

## Pseudo-code

```Text
First thing in the method: create 4 variables
(one initializing a new stack, one as a flag to check for continuous balance, one as an array for each character in the input string, and the last as the beginning index for a while loop)
Then enter the while loop checking the 2 conditions: if index is less than the string array length, and if balanced is true.
Then, create another variable for the character at the index position of the string array
Check if this matches check if this symbol matches any of the opening characters allowed. else if the stack is empty change balanced to false.
Then check if the symbol is equal to a closing symbol that is permitted, if so, pop off the stack
Last thing in the while loop, add 1 to index.
Outside of while loop, check if balanced is true and the stack is empty, then return true, else return false.
```

## Code 

[JavaScript File](./stackQueueBrackets.js)