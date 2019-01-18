/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    for(let i = 0; i < numArray.length; i++) {
        for(let j = 0; j < numArray.length - 1; j++) {
            if(numArray[j] > numArray[j+1]) {
                let temp = numArray[j];
                numArray[j] = numArray[j+1];
                numArray[j+1] = temp;
            }
        }
    }
    return numArray;
}

function RandRange(min, max) {
    return Math.round( min + (max - min) * Math.random() );
}

let nums = [];
for(let i = 0; i < 10; i++) {
    nums.push( RandRange(0, 100) );
}

console.log(nums);
console.log(bubbleSort(nums));