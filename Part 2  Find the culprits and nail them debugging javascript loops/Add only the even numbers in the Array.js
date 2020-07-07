/*
Write a code to add the even numbers only
Output: 30
*/

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for(let ind = 0; ind < numsArr.length ; ind++)
{
    if(numsArr[ind] % 2 === 0)
    {
        sum = sum + numsArr[ind];
    }
}
console.log(sum);