// Function that takes an array of numbers as a parameter and returns the average
function calculateAverage(numbers) 
{
    if (numbers.length === 0) 
    {
        return 0; // Return 0 if array is empty to avoid division by zero
    }
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) 
    {
        sum += numbers[i];
    }
    
    return sum / numbers.length;
}

// Function with different arrays
console.log("Average of [1, 2, 3, 4, 5]:", calculateAverage([1, 2, 3, 4, 5]));
console.log("Average of [10, 20, 30]:", calculateAverage([10, 20, 30]));
console.log("Average of [5, 10, 15, 20, 25]:", calculateAverage([5, 10, 15, 20, 25]));
console.log("Average of [100]:", calculateAverage([100]));
console.log("Average of []:", calculateAverage([]));
