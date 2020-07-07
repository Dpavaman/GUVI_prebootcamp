/*
Write a code to print inner arrays
Output:
Array(5) [ 1, 2, 3, 4, 5 ]
Array(6) [ 6, 7, 8, 9, 10, 11 ]
*/

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for(let ind = 0 ; ind < numsArr.length ; ind++)
{
    console.log("Array(" + numsArr[ind].length + ")",numsArr[ind]);
}