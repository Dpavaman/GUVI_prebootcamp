/*Find the average in the array below.
Make sure you add only the numbers and do avg.
const friendsInfo = [6, 12, ‘Mari’, 1, true, ‘Munnabai’, ‘200’, ‘CaptianAmerica’, 8, 10];
*/
const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
var sum = 0;
var count = 0;
for(let ind = 0 ; ind < friendsInfo.length ; ind++)
{       
    if(typeof(friendsInfo[ind]) === "number" )
    {
        sum = sum + friendsInfo[ind];
        count++;
    }
}
var average = sum/count;
console.log(average);