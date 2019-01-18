/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for(let prop in someObj) {
        console.log(`Key: ${prop}, Value: ${someObj[prop]}`);
    }
}

let obj = {
    name: "bill",
    age: 20,
    lbs: 230,
};

objectProperties(obj);