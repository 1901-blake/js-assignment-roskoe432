/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
const printShape = (function(){
  let createSquare = function(height, character) {
    let shape = "";
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < height; x++) {
        shape += character;
      }
      shape += "\n";
    }
    return shape;
  };

  let createTriangle = function(height, character) {
    let shape = "";
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < height; x++) {
        let space = height - (y + 1);
        shape += (x + 1 <= (height - space) ? character : " ");
      }
      shape += "\n";
    }
    return shape;
  };

  let createDiamond = function(height, character) {
    let shape = "";
    let end = "", char = 0, space = 0;
    for (let y = 0; y < height; y++) {
      char = (2 * y + 1);
      space = (height - char) / 2;
      if (char <= height) {
        let t2 = "";
        for (let x = 0; x < height; x++) {
          let isChar = (x >= space && x < space + char);
          t2 += (isChar ? character : " ");
        }
        shape += `${t2}\n`;
        if (char < height) {
          end = `${t2}\n${end}`;
        }
      }
      else break;
    }
    shape += end;
    console.log(shape);
  };

  return function(shape, height, character) {
    let msg = "";
    switch (shape.toLowerCase()) {
      case "square":
        msg = createSquare(height, character);
        break;

      case "triangle":
        msg = createTriangle(height, character);
        break;

      case "diamond":
        msg = createDiamond(height, character);
        break;

      default:
        msg = "Shape not recognized!";
        break;
    }
    console.log(msg);
  }
})();

printShape("diamond", 81, "*");