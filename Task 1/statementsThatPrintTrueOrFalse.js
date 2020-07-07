 // Write 6 statement which provide truthy & falsey values.
 
let x = 1;  
let y = '1'; 
let z = [1]; 

//All true
console.log(x == '1');  // True
console.log(y == [1]);  // True
console.log(1 == [1]);  // True

//All false
console.log(1 === '1');  // False
console.log(1 === [1]);  // False
console.log('1' === [1]);   // False 