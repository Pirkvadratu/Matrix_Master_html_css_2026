// Create an object that simulates a class representing a car with properties:, model, and year.
let car = 
{
    make: "Toyota",
    model: "Camry",
    year: 2020,
    
    // Add a method to start the car
    start: function()
    {
        console.log(`The ${this.year} ${this.make} ${this.model} is starting...`);
    }
};
// Test it
console.log("Car Details:");
console.log("Make:", car.make);
console.log("Model:", car.model);
console.log("Year:", car.year);
car.start();
