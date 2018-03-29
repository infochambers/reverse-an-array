//Declare some variables . . .
//Start with the numbers array, counting up.
var numbers = [];
//Add the reversed numbers array, counting down
var reversedNumbers  = [];
//Set a coiunting variable, and then a cutoff variable
var i;
var n = 9;
//Loop to create the first array, counting from one to ten
for (var i = 0; i < 10; i++) {
	numbers[i] = i + 1;
		}
//Loop to create the second array, counting from last number to first	
for (var i = 0; i < 10; i++) {
	reversedNumbers[i] = numbers[n];
	n--;
		}	
//Print the numbers array	
console.log(numbers);
//Print the reversed array
console.log(reversedNumbers);
