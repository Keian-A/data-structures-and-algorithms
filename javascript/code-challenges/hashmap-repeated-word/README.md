# First Repeated Word
This algorithm uses a hashmap to find (and return) the first repeated word in a string.

## Challenge
This algorithm adds each word in a string to a hashmap one at a time, whenever one word is repeated it returns said word.

## Approach & Efficiency
The approach I took for this was to use my previous [HashMap method](../hash-table/README.md) to add words in a string one at a time, with the value of 1 until a word is found already in the hash table, returning the word.

## Arguments / Return
This function takes in a string, and returns a string which is the single word which is the first to be repeated in the string. If no repeat is found in the string, `null` is returned.

Code [here](./hashmap-repeated-word.js)
