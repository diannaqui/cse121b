/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived

let myInformation = {
  name: 'Diana Quispe',
  photo: 'images/pictureDQ.jpg',
  favoriteFoods: ['Pinnaple', 'Mango', 'Straberry', 'Grapefruit'],
  hobbies: ['Read','Puzzles','Gardening'],
  placesLived:
  [ 
    {
      place:'Queretaro, Mexico',
      length:'27 years',
    }, 
    {
      place:'New Mexico, USA',
      length:'15 years',
    }, 
  ]
};


                                              /*
                                              // Step 7 in another way

                                              myInformation.placesLived = [
                                                {
                                                  place:'First Place',
                                                  length:5,
                                                },
                                                {
                                                  place:'Second Place',
                                                  length:5,
                                                },
                                                {
                                                  place:'Third Place',
                                                  length:5,
                                                },
                                              ];*/



/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = myInformation.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('img').setAttribute('src', myInformation.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('img').setAttribute('alt', `Picture of ${myInformation.name}`);



// Step 4: Table for favorite foods
const tableFood = document.querySelector('#favorite-foods');
  
myInformation.favoriteFoods.forEach(food => {
    let tr = document.createElement('tr');
    let tdFood = document.createElement('td');  
    tdFood.textContent = food;

    tr.appendChild(tdFood);
    tableFood.appendChild(tr);
});

// Step 5: Table for Hobbies
const hobbies = document.querySelector('#hobbies');

myInformation.hobbies.forEach(hobbie => {
  let tr = document.createElement('tr');
  let tdHobbie = document.createElement('td');
  tdHobbie.textContent = hobbie;

  tr.appendChild(tdHobbie);
  hobbies.appendChild(tr);
});


// Step 8: Table for places

const tablePlacesLive = document.querySelector('#tablePlacesLive');


myInformation.placesLived.forEach(place => {
  let tr = document.createElement('tr');
  let tdPlace = document.createElement('td');  
  let tdLenght = document.createElement('td');  

  tdPlace.textContent = place.place;
  tdLenght.textContent = place.length;

  tr.appendChild(tdPlace);
  tr.appendChild(tdLenght);

  tablePlacesLive.appendChild(tr);
  
});

