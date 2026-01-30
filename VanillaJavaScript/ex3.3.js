// an array of numbers
let numbers = [3, 7, 2, 9, 1, 5, 8, 4];

// loop to find the largest number in the array
let largest = numbers[0]; // Start with the first number 0

for (let i = 1; i < numbers.length; i++) 
{
    if (numbers[i] > largest) 
    {
        largest = numbers[i];
    }
}
// Log the largest number
console.log("The largest number in the array is:", largest);
