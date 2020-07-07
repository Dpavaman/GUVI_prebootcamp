/*Get the first item, the middle item and the last item of the array

*/
var friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
var firstItem = friends[0];
var lastItem = friends[friends.length-1];
var middleItem;
if(friends.length % 2 === 0)
{
    middleItem = friends[Math.floor((friends.length)/2)-1];
    middleItem = middleItem +" and "+ (friends[Math.floor((friends.length)/2)]);
}
else
{
    middleItem = friends[Math.floor((friends.length)/2)];
}

console.log("First Item:",firstItem);
console.log("Last Item:",lastItem);
console.log("Middle Item(s):",middleItem); //prints 2 middle Items if array length is even