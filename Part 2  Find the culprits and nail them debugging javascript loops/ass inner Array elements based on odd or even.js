/*
Write a code to add elements in the inner arrays based on odd or even values
Output:
36
30
*/

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd = 0;
var sum_even = 0;
for (var i = 0; i < numsArr.length ; i++) {
    for(let ind = 0 ; ind < numsArr[i].length ; ind++)
    {
       if(numsArr[i][ind] % 2 === 0)
       {
           sum_even = sum_even + numsArr[i][ind];
       }
       else
       {
           sum_odd = sum_odd + numsArr[i][ind];
       }
        
    }
    
    
}
console.log(sum_odd);
console.log(sum_even);