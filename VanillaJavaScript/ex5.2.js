let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    
    // Method to start the car
    start: function()
    {
        console.log(`The ${this.year} ${this.make} ${this.model} is starting...`);
    },
    
    // Extend with a method to drive the car
    drive: function() 
    {
        console.log(`The ${this.year} ${this.make} ${this.model} is now driving!`);
    }
};

// Print messages when you start and drive the car.
console.log("Car Details:");
console.log("Make:", car.make);
console.log("Model:", car.model);
console.log("Year:", car.year);
console.log("");

car.start();
car.drive();
