/*Find the name with max characters and return the name.
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
var maximum;
for(let ind = 0 ; ind < friends.length ; ind++)
{
    lengths.push(friends[ind].length);
    
}
maximum = Math.max(...lengths);
var ind = lengths.indexOf(maximum)
console.log(friends[ind]);
