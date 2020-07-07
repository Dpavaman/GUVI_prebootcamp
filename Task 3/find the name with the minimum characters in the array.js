/*Find the name with min characters and return the name.
*/
var friends = [
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET",
"Messi"
];
var lengths = [];
var minimum;
for(let ind = 0 ; ind < friends.length ; ind++)
{
    lengths.push(friends[ind].length);
    
}
minimum = Math.min(...lengths);
var ind = lengths.indexOf(minimum);
console.log(friends[ind]);
