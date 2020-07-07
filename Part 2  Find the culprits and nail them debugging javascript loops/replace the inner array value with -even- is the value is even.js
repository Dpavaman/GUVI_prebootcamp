/*
Write a code to replace the array value — If the index is even, replace it with ‘even’.
Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
*/

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
    for(let ind = 0 ; ind < numsArr[i].length ; ind++)
    {
        if(numsArr[i][ind] % 2 === 0)
        {
            numsArr[i][ind] = "even";
        }
    }
    
}
console.log(numsArr);