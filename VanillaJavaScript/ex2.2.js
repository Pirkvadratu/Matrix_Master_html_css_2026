// Function that accepts a string as a parameter and returns the string
function reverseString(str) 
{
    return str.split('').reverse().join('');
}

console.log("Reverse of 'hello':", reverseString("hello"));
console.log("Reverse of 'world':", reverseString("world"));
console.log("Reverse of 'JavaScript':", reverseString("JavaScript"));
console.log("Reverse of '12345':", reverseString("12345"));
console.log("Reverse of '':", reverseString(""));
