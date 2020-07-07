/*
If you run the below scritpt you will get “Code is Blasted”
Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
*/


var a = "2" > "12";               // since  the code is being set to display "Code is blasted on calculating the condition true
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}


//IN ORDER TO MAKE THE SAME CODE DISPLAY diffused, WE NEED TO ALTER THE CODE SO THAT THE CONDITION a EVALUATES FALSE.


var B = "2" < "12";               
//Don't touch below this     /bY CHANGING THE > TO < CAN PRINT "Diffused"
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

