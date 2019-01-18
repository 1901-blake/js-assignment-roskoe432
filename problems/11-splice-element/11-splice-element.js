/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    someArr.splice(index, 1);
}

let nums = [1, 2, 3, 4, 5]; 
console.log(nums);
spliceElement(nums, 2);
console.log(nums);