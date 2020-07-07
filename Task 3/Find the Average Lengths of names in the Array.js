/*Find the avg length of all the friends names. Get the individual length of the names and do the avg.

*/
var friends = [
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];
var lengths = [];
for(let ind = 0 ; ind < friends.length ; ind++)
{
    lengths.push(friends[ind].length);
    
}
for(let index = 0 ; index < lengths.length ; index++)
{
    console.log("Length of the Name",friends[index] + " is: ",lengths[index]);
}
var sum = lengths.reduce(function(a,b){
    return a+b;
});
var average = sum/lengths.length;

console.log(average);