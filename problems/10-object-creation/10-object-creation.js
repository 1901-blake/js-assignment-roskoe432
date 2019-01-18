/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}

class PersonAgain {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let ben = { name: "Ben Snow", age: 30 };
let bob = new Person("Bob", 40);
let bill = new PersonAgain("Bill", 50);

console.log(ben);
console.log(bob);
console.log(bill);