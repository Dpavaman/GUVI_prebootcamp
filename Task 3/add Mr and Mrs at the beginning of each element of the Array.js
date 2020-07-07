/*Add Mr or Ms to the names in the friends array.

*/
var friends = [
"Mari",
"MaryJane",
"Rajinikanth",
"Munnabai",
"Jeff",
"Spiderman"
];

for(let ind = 0; ind < friends.length ; ind++)
{
    if(friends[ind].length % 2 === 0) //Considering if the length of the name is odd, add Mrs.
    {
        friends[ind] = "Mrs." + friends[ind] ;
    }
    else                            //Considering if the length of the name is even, add Mr.
    {
         friends[ind] = "Mr." + friends[ind] ;
    }
}
console.log(friends);