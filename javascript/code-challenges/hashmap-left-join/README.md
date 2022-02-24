# Hashmap LEFT JOIN
This challenge is to combine 2 hashmaps into one.

## Challenge
Write a function that combines 2 hashmap sets and returns a single hashmap containing all data from both.

## Approach & Efficiency
For the approach I decided to create a function named leftJoin with the 2 parameters:
1. A hashmap with strings as keys and a synonym for the corresponding string as the value.
2. A hashmap with strings as keys and an antonym for the corresponding string as the value.

The function will first create a new result array. Next, it will create an array using the keys() method in the [HashMap](../hash-table/hash-table.js) implementation I wrote previously from the first hashmap passed through the arguments. Using this array, it will search through the first hashmap (using the get() method), add the return value to the result array. Next it will use the get() method on the second hashmap, and if there is a return, will store the value in the result array, otherwise if nothing is found, it will add the value `null` instead. Then it will move on to the next item in the keys() return array and work through iteratively till the result array is fully populated and return that result array.

Big O:
| Time   | Space |
| -----  | ----- |
| O(m+n) | O(n)  |

Time, since it depends on the m/n number of contents in each hashmap before filling the return array.

Space, since one array is the one variable that grows/is created, based on the size of m/n hashmaps in the arguments.

## Solution
[Code found here](./)