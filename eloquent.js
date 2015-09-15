/* js file */

(function( window, undefined ){

})( window, undefined );

/*ternary, operating on three values*/

console.log(true ? 1 : 2);
2
// → 1
3
console.log(false ? 1 : 3);
4
// → 2
1
3

var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
  alert("Your number is the square root of " +
        theNumber * theNumber);

var result = 1;
2
var counter = 0;
3
while (counter < 5) {
4
  result = result * 2;
5
  counter = counter + 1;
6
}
7
console.log(result);
8
// → 1024
32

//Chapter 2//
/******************************/
// Your code here.
var hash = "";
for (var i = 0; i < 7; i++){
  hash += "#";
  console.log(hash);
}

#
##
###
####
#####
######
#######
/*****************************/

//Not sure why this doesnt work
var num = 0;
for (var i = 0; i <100; i++){
	num += 1;
  		if(num % 3 = 0){
        	console.log("fizz");
        }
  		else{
          console.log(num);
        }
}