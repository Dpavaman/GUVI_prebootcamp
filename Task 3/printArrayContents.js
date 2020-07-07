/* Iterate through the string array and print it contents
      var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"]
*/
var strArray= ["<option>Jazz</option>","<option>Blues</option>","<option>New Age</option>","<option>Classical</option>","<option>Opera</option>"];
let str = ""
for(let ind = 0 ; ind < strArray.length ; ind++)
{
    str = str + strArray[ind]
}
console.log(str);
