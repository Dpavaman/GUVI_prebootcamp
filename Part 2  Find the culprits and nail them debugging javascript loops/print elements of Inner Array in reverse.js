/*
Write a code to print elements in the inner arrays in reverse
Output: 11 10 9 8 7 6 5 4 3 2 1
*/

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str = "";
for (var i = numsArr.length-1; i >= 0 ; i--) {
    for(let ind =  numsArr[i].length-1 ; ind >= 0 ; ind--)
    {
        str = str + numsArr[i][ind];
        if(i >= 0)
        {
            str = str + " "
        }
        
    }
    
    
}
console.log(str);