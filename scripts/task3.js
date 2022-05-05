/* Lesson 3 */

/* FUNCTIONS */

// Functions named add, difference, product and division that takes two arguments, number1 and number2
const add = (number1, number2) => { return number1 + number2; }             // arrow function
function difference(number1, number2) { return number1 - number2; }         // function declaration
const product = function(number1, number2) { return number1 * number2; }    // function expression
const division = (number1, number2) => { return number1 / number2; }        // arrow function

/* Using arrow function, gets the values of two HTML form controls with IDs of num1 and num2
   Pass them to the respective function (add, difference, product or division)
   Assign the return value to an HTML form element with an ID of operand */
const operationNumbers = () =>
{
  let num1 = parseFloat(document.querySelector('#num1').value);
  let num2 = parseFloat(document.querySelector('#num2').value);

  var openationNumber = document.querySelector('#operand').value;

  if (openationNumber === 'addition') {document.querySelector('#result').value = add(num1, num2);}
  else if (openationNumber === 'difference') {document.querySelector('#result').value = difference(num1, num2);}
  else if (openationNumber === 'product') {document.querySelector('#result').value = product(num1, num2);}
  else if (openationNumber === 'division') {document.querySelector('#result').value = division(num1, num2);}
}

//Add a "click" event listener to the HTML dropdown list with an ID of operand that calls the operationNumbers arrow function
document.querySelector('#operand').addEventListener('click', operationNumbers);


/* BUILT-IN METHODS */

// ------------------------------
// MY DATE WAS DECLARE IN date.js
// ------------------------------

                    // Step 1: Declare and instantiate a variable of type Date to hold the current date

                    // Step 2: Declare a variable to hold the current year

                    // Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

                    // Step 4: Assign the current year variable to an HTML form element with an ID of year


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numbers = Array(25).fill().map((_, i) => i+1);  // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector('#odds').innerHTML = numbers.filter(number => number%2);  // 1 - True    0 - False 

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector('#evens').innerHTML = numbers.filter(number => number%2 - 1);

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector('#sumOfArray').innerHTML = numbers.reduce((sum, number) => sum += number);

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector('#multiplied').innerHTML = numbers.map(number => number*2);

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector('#sumOfMultiplied').innerHTML = numbers.map(number => number*2).reduce((multiply_sum, number) => multiply_sum += number);