//Give the Actual cost and Sold cost, Calculate Discount Of Product

var actualCost = 450;
var soldCost = 300;
var discount = actualCost - soldCost;
var percentage = (discount/actualCost)*100;

console.log(parseFloat(percentage.toFixed(2)) + "%");