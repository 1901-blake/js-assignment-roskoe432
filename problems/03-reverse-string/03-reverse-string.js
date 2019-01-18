/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  let temp = "";  
  for(let i = someStr.length-1; i >= 0; i--) {
    temp += someStr[i];
  }
  return temp;
}

console.log(reverseStr("Benjamin"));
console.log(reverseStr("Hello"));
console.log(reverseStr("Revature"));