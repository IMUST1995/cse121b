/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const persona = {
    named: 'Zeir Braidi',
    photo: 'images/zeir.jpeg',
    favoriteFoods: ['meat', 'chicken', 'fish', 'seafood', 'blackberries', 'strawberries', 'blueberries', 'raspberries', 'pineapple'],
    hobbies: ['read', 'languages', 'workout', 'travel'],
    placesLived: [{
        place: 'Venezuela',
        length: '19 years'
    },
    {
        place: 'Chile',
        length: '5 years'
    },
    {
        place: 'United States',
        length: '1 years'
    },
]
}
// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
const named = document.getElementById('name');
named.innerHTML = `${persona.named}`
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
const pic = document.getElementById('photo');
pic.src = `${persona.photo}`
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
pic.alt = `${persona.named}`
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const listFoods = persona.favoriteFoods.map((e) => {
    return `<li>${e}</li>`
})
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

const unorderedList = document.getElementById('favorite-foods');
listFoods.forEach(e => {
    unorderedList.innerHTML += e
});
// Step 6: Repeat Step 4 for each hobby in the hobbies property
const listHobbies = persona.hobbies.map((e) => {
    return `<li>${e}</li>`
})
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
const unorderedListHobbies = document.getElementById('hobbies');
listHobbies.forEach(e => {
    unorderedListHobbies.innerHTML += e
});
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
const placesLived =  persona.placesLived
const listPlacesLived = placesLived.map((e) => {
    return `<dt>${e.place}:<dt/><dd>${e.length}</dd>`
})

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
const placeLivedContainer = document.getElementById('places-lived')
/* listPlacesLived.forEach(e => {
    placeLivedContainer.innerHTML += e
}) */
for(e of persona){
    placeLivedContainer.innerHTML += `<dt>${e.placesLived.place}:<dt/><dd>${e.placesLived.length}</dd>}`
}