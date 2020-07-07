/*
Calculate electricity bill?
example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
*/

var daily = 100;
var month = daily*30;
var perUnit = 10;
var usedUnit = month/1000; // 1 unit  = 1kWh
var Bill = usedUnit*perUnit;

console.log("Bill is :",Bill);