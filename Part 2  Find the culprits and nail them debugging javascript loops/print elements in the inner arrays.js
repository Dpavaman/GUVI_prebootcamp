/*
Write a code to print elements in the inner arrays
Output: 1234567891011
*/

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
    for(let ind = 0 ; ind < numsArr[i].length ; ind++)
    {
        str_all = str_all+numsArr[i][ind];
    }
    
}
console.log(str_all);