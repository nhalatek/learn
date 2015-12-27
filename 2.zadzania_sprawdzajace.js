/* Zadanie 1
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var znak="";
for (var i =1; i<=7 ;i++ ){
	znak+="#";
	console.log(znak);
}


/* Zadanie 2 czesc 1
Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
 and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/
for (var i = 1; i <= 100 ; i++ ){
	if (i % 3 == 0 ){
		console.log("Fizz");} 
	else if (i % 5 == 0 ) {
		console.log("Buzz");}
	else{ 
		console.log(i);
	}
}

/* Zadanie 2 czesc 2
When you have that working, modify your program to print "FizzBuzz", 
for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (var i = 1; i <= 100 ; i++ ){ 
	if (i % 3 == 0  && i % 5 == 0) {
		console.log("FizzBuzz"); }		
	else if (i % 3 == 0) {
		console.log("Fizz"); }
	else if(i % 5 == 0)  {
		console.log("Buzz");}
	else{ 
		console.log(i);
	}
}

// mam pytanie odnośnie linijki 42 czy mam też deklarować var dla i 
// czy juz nie musze poniewaz w nijce 26 juz to robiłem 
// kompilator sie nie przyczepi ale jak to wyglada w "dobrych praktykach"


/* Zadanie 3 czesc 1
Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. 
At each position of the grid there is either a space or a “#” character. 
The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

var linijka ="";
for (var i = 1; i <= 8; i++) {
	for (var j = 1; j <= 8; j++) {
		if ( (i+j) % 2 == 0){
			linijka+=" "; }
		else {
			linijka+="#"; 
		}
	}
	linijka+="\n"; 
}
console.log(linijka);

/* Zadanie 3 czesc 2
When you have a program that generates this pattern, define a variable size = 8 
and change the program so that it works for any size, 
outputting a grid of the given width and height.
*/

var szerokosc = 4;
var wysokosc = 10;
var linijka ="";

for (var i = 1; i <= wysokosc; i++) {
	for (var j = 1; j <= szerokosc; j++) {
		if ( (i+j) % 2 == 0){
			linijka+=" "; }
		else {
			linijka+="#"; 
		}
	}
	linijka+="\n"; 
}
console.log(linijka);