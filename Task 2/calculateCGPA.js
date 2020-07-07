//Program To Calculate CGPA

var marks = [59,65,70,80,90];
var grades = [];
for(let ind = 0 ; ind < marks.length ; ind++)
{
    if(marks[ind] > 40 && marks[ind] <= 50)
    {
        grades.push("5");
    }
    else if(marks[ind] > 50 && marks[ind] <= 60)
    {
        grades.push("6");
    }
    if(marks[ind] > 60 && marks[ind] <= 70)
    {
        grades.push("7");
    }
    else if(marks[ind] > 70 && marks[ind] <= 80)
    {
        grades.push("8");
    }
    if(marks[ind] > 80 && marks[ind] <= 90)
    {
        grades.push("9");
    }
    else if(marks[ind] > 90 && marks[ind] <= 100)
    {
        grades.push("10");
    }
    else if(marks[ind] > 100)
    {
        continue;
    }
}
let total = 0;
for(let index = 0 ; index < grades.length ; index++)
{
    total = total + +grades[index];
}
let CGPA = total/grades.length

console.log(CGPA.toFixed(2)); //7.40