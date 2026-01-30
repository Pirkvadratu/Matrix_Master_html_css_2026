// aray of even numbers from 1 to 20 using a for loop and if statement
let evenNumbers = [];

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}

console.log(evenNumbers);
