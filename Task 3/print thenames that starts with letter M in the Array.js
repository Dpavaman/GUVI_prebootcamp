/*Find the names and return the list starting with letter M.
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
for(let ind = 0 ; ind < friends.length ; ind++)
{
    if(friends[ind][0] === "M")
    {
        console.log(friends[ind]);
    }
}