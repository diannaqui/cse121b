/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
// Step 2: Declare another variable to hold the day of the week
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
let theDate = new Date();
let dayOfWeek = theDate.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let messageDay = '';

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
if (dayOfWeek >= 1 || dayOfWeek <= 5) {
  messageDay = 'Hang in there!';
}
else {
  messageDay = 'Woohoo! It is the weekend';
};


/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let nameDay = '';

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

switch (dayOfWeek) {
  case 0:
    nameDay = 'Sunday';
    break;
  
  case 1:
    nameDay = 'Monday';
    break;
  
  case 2:
    nameDay = 'Tuesday';
    break;

  case 3:
    nameDay = 'Wednesday';
    break;

  case 4:
    nameDay = 'Thursday';
    break;

  case 5:
    nameDay = 'Friday';
    break;

  case 6:
    nameDay = 'Saturday';
    break;
  
  default:
    nameDay = `Unknown!: ${dayOfWeek}`;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').textContent = messageDay;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').textContent = nameDay;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

const output = (temples) => {
  temples.forEach(
    temple => {
      let article = document.createElement('article');

      let templeName = document.createElement('h3');
      templeName.textContent = temple.templeName;

      let location = document.createElement('h4');
      location.textContent = temple.location;

      let dedicated = document.createElement('h4');
      dedicated.textContent = temple.dedicated;

      let img = document.createElement('img');
      img.setAttribute('src', temple.imageUrl);
      img.setAttribute('alt', temple.templeName);

      article.appendChild(templeName);
      article.appendChild(location);
      article.appendChild(dedicated);
      article.appendChild(img);

      

      document.querySelector('#temples').appendChild(article);

    }
  )
}
// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';
async function getTemples(url) {
    const response = await fetch(url);
    templeList = await response.json();
    output(templeList);
};

getTemples(url);


// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
const reset = () => {
  document.querySelector("#temples").innerHTML = "";
};

// Step 8: Declare a function named sortBy that:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

function sortTemples(first, second) 
{
  output(
        templeList.sort((temple1, temple2) => {
          let templeName1 = temple1.templeName.toLowerCase();
          let templeName2 = temple2.templeName.toLowerCase();
          if (`${templeName1} ${first} ${templeName2}`) return -1;
          else if (`${templeName1} ${second} ${templeName2}`) return 1;
          else return 0;
        })
      );
}


const sortBy = () => {
  reset();
  let filter = document.querySelector("#sortBy").value;
  switch (filter) {

    case "templeNameAscending":
      sortTemples('<', '>');
      break;
    
    case "templeNameDescending":
      sortTemples('>', '<');
      break;
    
    default:
      // using ternary operators
      output(
        templeList.sort((temple1, temple2) =>
          temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase()
            ? 1
            : temple2.templeName.toLowerCase() >
              temple1.templeName.toLowerCase()
            ? -1
            : 0
        )
      );
      break;
  }
};
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector("#sortBy").addEventListener("change", sortBy);


/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
let result = '';
let temple = '';

function filterLetter() 
{
  let letter = document.querySelector('#letter').value.toLowerCase();

  reset();
  output (result = templeList.filter(temple => temple.templeName[0].toLowerCase()==`${letter}`));
};

document.querySelector('#buttonLetter').addEventListener('click', filterLetter);