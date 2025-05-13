// 01 VARIABLES
// 01-01 VARIABLES WITH MANUAL TYPE ASSIGNMENT
let age: number = 31; // Type number
let firstName: string = "John"; // Type string
let isStudent: boolean = true; // Type boolean

// Overwrite variables
age = 33;
firstName = "Sebastian";
isStudent = false;

// 01-02 VARIABLES WITH AUTOMATIC TYPE ASSIGNMENT
let planet = "Mars";
let moons = 2;
let isLarge = false;

// 01-03 VARIABLES WITH NULL AND UNDEFINED
let something: null;
let anotherThing: undefined;

something = null;
anotherThing = undefined;

// 02 ARRAYS
// Definition of arrays
let names: string[] = ["John", "Jane", "Jim"];
let ages: number[] = [31, 32, 33];
let fruits = ["apple", "banana", "cherry"];
let things = [true, 1, "hey"];

// Add elements to arrays
names.push("Greg");
ages.push(98);
fruits.push("orange");

// Access elements of arrays
const f = fruits[3];
const t = things[0];

// 03 OBJECTS
// Definition of object
let user: {id: number, firstName: string, lastName: string, age: number, isStudent: boolean} = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 31,
    isStudent: true
}

// Overwrite properties of objects
user.id = 2;