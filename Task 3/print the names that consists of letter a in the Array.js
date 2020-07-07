/*Find the friends names who has letter ‘a’ and return the list.

*/
var friends = [
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];
var newArr =[];
for(let ind = 0 ;ind < friends.length ; ind++)
{
    if(friends[ind].includes("a"))
    {
        newArr.push(friends[ind]);
    }
}
console.log(newArr);