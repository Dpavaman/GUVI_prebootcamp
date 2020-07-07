/*Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = [
“Mari”,
“MaryJane”,
“CaptianAmerica”,
“Munnabai”,
“Jeff”,
“AAK chandran”
];
*/


let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling(input){
    for(var ind = 0 ; ind < input.length ; ind++)
    {
        if(friends[ind] == "Mari") // Since the Input is already given.
        {
            friends[ind] = "Munnabai";
        }
    }
            console.log(friends);
}

dataHandling(friends); 