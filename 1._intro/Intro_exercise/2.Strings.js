var numberOne = "1.10";
var numberTwo = "2.30";
var sum = Number(numberOne) + Number(numberTwo);

console.log(sum);

//

var result = (parseFloat(numberOne) + parseFloat(numberTwo)).toFixed(2);

console.log(result);
console.log(parseFloat(result));

//

var one = 10;
var two = 45;
var three = 98;
var total = ((one + two + three) /3).toFixed(5);

console.log(total);

//

var letters = "abc";
var indexOfLetters = letters.indexOf("c");
var anotherWay = letters.charAt(2);

console.log(indexOfLetters);

//

var fact = "You are learning javascript!";
var capJ = fact.replace('j' , 'J');

console.log(capJ);

// JSON object inklusiv nested objekt
//
// {
//    "key": "values",
//    "key2": 123
//    "key3": {
//       "anotherkey": 45
//    }
// }
