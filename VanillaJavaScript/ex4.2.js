// Define an object  with properties like name, age, and gender etc..
let person = 
{
    name: "John Doe",
    age: 30,
    gender: "Male"
};

function printPersonInfo(personObj) 
{
    console.log(`Name: ${personObj.name}, Age: ${personObj.age}, Gender: ${personObj.gender}`);
}
printPersonInfo(person);
