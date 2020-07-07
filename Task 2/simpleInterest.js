//Calculate Simple Interest

var principal = 15368;
var time = 2;
var rateOfInterest = 7;

var simpleInterest = (principal*time*rateOfInterest)/100;

console.log(parseFloat(simpleInterest.toFIxed(2))); // 2151.52