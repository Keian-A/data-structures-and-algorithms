# Hashtables
Hash tables are essentially objects of sorts, which take in a key and value pair and store them in buckets which can be retreived by calling the key on the object which would return the corresponding saved value.

People use hash tables because of their big O. More on this further down on the README file.

## Challenge
The intention of this subdirectory is to create a hash table implementation in JavaScript.

## Approach & Efficiency
The approach I took for this was to create a class which created an object which I could add prototype function on.

Big O:

Space: O(n) - due to a hash table being able to store n values based on how many the user wants to add.

Search: O(1) - due to being able to directly call the instance of the key/value pair in memory when supplied with a key.

Insert: O(1) - due to being able to add to memory without taking into effect any order of data.

Delete: O(1) - due to being able to remove without taking into account order of data.

## API
Methods available in algorithm:

`set`
* This has the arguments: Key, Value
* Returns: nothing
* This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
* Should a given key already exist, replace its value from the value argument given to this method.

`get`
* Arguments: key
* Returns: Value associated with that key in the table

`contains`
* Arguments: key
* Returns: Boolean, indicating if the key exists in the table already.

`keys`
* Returns: Collection of keys

`hash`
* Arguments: key
* Returns: Index in the collection for that key
* Structure and Testing

Code [here](./hash-table.js)