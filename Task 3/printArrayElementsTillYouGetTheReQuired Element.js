/*Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
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
function dataHandling(input){
    let ind = 0;
        while(friends[ind] !== "CaptianAmerica") // Since the Input is already given.
        {
                        console.log(friends[ind]);
                        ind++;
        }
    }
dataHandling(friends); 