var firstName = "Jens";
var lastName = "Hansen";
var year = "2017";
var number = 1;
var newYear = Number(year) + number;
var newYearAnotherWay = parseInt(year) + number;
var anotherYear = +(year) + 1;

console.log(newYear);
console.log(newYearAnotherWay);
console.log(anotherYear);
console.log("My firstname is", firstName, "and my lastname is", lastName);
console.log(`My first name ${firstName}`)