/*Find the person is ur friend or not.
const friends = [
“Mari”,
“MaryJane”,
“CaptianAmerica”,
“Munnabai”,
“Jeff”,
“AAK chandran”
];
*/


let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling(input, name){
    if(input.includes(name))
    {
        console.log("Yes",name + " is My Fiend");
    }
    else
    {
        console.log("No",name + " is Not my Friend");
    }
}
let found = dataHandling(friends,"Jeff");