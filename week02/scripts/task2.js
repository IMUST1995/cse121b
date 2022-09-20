/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = 'Zeir Braidi';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
const nameHolder = document.querySelector('#name');
nameHolder.innerHTML = myName
// Step 3: declare and instantiate a variable to hold the current year
const date = new Date();
const year = date.getFullYear();

// Step 4: place the value of the current year variable into the HTML file
const footerYear = document.getElementById('year');
footerYear.innerHTML = year
// Step 5: declare and instantiate a variable to hold the name of your picture
const picName = 'images/Zeir.jpeg';
// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
const img = document.querySelector('img');
img.setAttribute('src', 'images/Zeir.jpeg')
/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFoods = ['meat', 'chicken', 'fish', 'seafood', 'blackberries', 'strawberries', 'blueberries', 'raspberries', 'pineapple']

// Step 2: place the values of the favorite foods variable into the HTML file
const food = document.querySelector('#food');
food.innerHTML = favoriteFoods.join(', ')

// Step 3: declare and instantiate a variable to hold another favorite food
const otherFood = 'watermelon'

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(otherFood)

// Step 5: repeat Step 2
food.innerHTML = favoriteFoods.join(', ')

// Step 6: remove the first element in the favorite foods array
favoriteFoods.shift()

// Step 7: repeat Step 2
food.innerHTML = favoriteFoods.join(', ')

// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop()

// Step 7: repeat Step 2
food.innerHTML = favoriteFoods.join(', ')

