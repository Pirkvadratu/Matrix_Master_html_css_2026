// Returns true if the name exists in the array, false otherwise
function nameExists(namesArray, nameToFind) 
{
    for (let i = 0; i < namesArray.length; i++) 
    {
        if (namesArray[i] === nameToFind) 
        {
            return true;
        }
    }
    return false;
}


// Test the function with different names
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log("Does 'Bob' exist?", nameExists(names, "Bob"));
console.log("Does 'John' exist?", nameExists(names, "John"));
console.log("Does 'Alice' exist?", nameExists(names, "Alice"));
console.log("Does 'Eve' exist?", nameExists(names, "Eve"));
console.log("Does 'Frank' exist?", nameExists(names, "Frank"));
