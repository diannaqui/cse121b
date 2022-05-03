/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const nameFirstLast = 'Diana Quispe';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = nameFirstLast;

// Step 3: declare and instantiate a variable to hold the current year
const today = new Date();
const currentYear = today.getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const Picture = 'images/pictureDQ.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', Picture);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const myFavoriteFood = ['Pinnaple', 'Mango', 'Straberry', 'Grapefruit'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = myFavoriteFood;

// Step 3: declare and instantiate a variable to hold another favorite food
const anotherFood = 'Grape';

// Step 4: add the variable holding another favorite food to the favorite food array
myFavoriteFood.push(anotherFood);

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = myFavoriteFood;


// Step 6: remove the first element in the favorite foods array
myFavoriteFood.shift();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = myFavoriteFood;


// Step 8: remove the last element in the favorite foods array
myFavoriteFood.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = myFavoriteFood;



