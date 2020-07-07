//Calculate five test scores and print their average

var scores = [ 98, 92, 96, 97, 97]; //Test Scores are placed in an Array
let total = 0;
for(let ind = 0 ; ind < scores.length ; ind++)
{
     total = total + scores[ind];
}
let average = total/(scores.length);
console.log(parseFloat(average.toFixed(2))); //96