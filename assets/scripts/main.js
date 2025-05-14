// main.js

// Run the init() function when the page has loaded
window.addEventListener("DOMContentLoaded", init);

// Starts the program, all function calls trace back here
function init() {
	// Get the recipes from localStorage
	let recipes = getRecipesFromStorage();
	// Add each recipe to the <main> element
	addRecipesToDocument(recipes);
	// Add the event listeners to the form elements
	initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
	// A9. Complete the functionality as described in this function
	//           header. It is possible in only a single line, but should
	//           be no more than a few lines.
	return JSON.parse(localStorage.getItem('recipes')) || [];
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
	// A10. Get a reference to the <main> element
	// A11. Loop through each of the recipes in the passed in array,
	//            create a <recipe-card> element for each one, and populate
	//            each <recipe-card> with that recipe data using element.data = ...
	//            Append each element to <main>
	const main = document.querySelector('main');
	recipes.forEach(recipe => {
		const card = document.createElement('recipe-card');
		card.data = recipe;
		main.appendChild(card);
	});
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
	// EXPLORE - START (All explore numbers start with B)
	// B1. Complete the functionality as described in this function
	//            header. It is possible in only a single line, but should
	//            be no more than a few lines.
	localStorage.setItem('recipes', JSON.stringify(recipes));
}

/**
 * Adds the necessary event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {
	// B2. Get a reference to the <form> element
	const form = document.querySelector('form');

	// B3. Add an event listener for the 'submit' event
	form.addEventListener('submit', event => {
		event.preventDefault();

		// B4. Create a new FormData object from the form
		const formData = new FormData(form);

		// B5. Create a recipeObject from the formData
		const recipeObject = {};
		for (const [key, value] of formData.entries()) {
			recipeObject[key] = value;
		}

		// B6. Create a new <recipe-card> element
		const card = document.createElement('recipe-card');

		// B7. Set data for the new recipe-card
		card.data = recipeObject;

		// B8. Append the new card to <main>
		document.querySelector('main').appendChild(card);

		// B9. Update localStorage with the new recipe
		const recipes = getRecipesFromStorage();
		recipes.push(recipeObject);
		saveRecipesToStorage(recipes);
	});

	// B10. Get a reference to the "Clear Local Storage" button
	const clearButton = document.querySelector('button[type="button"]');

	// B11. Add a click event listener to the clear storage button
	clearButton.addEventListener('click', () => {
		// B12. Clear the local storage
		localStorage.clear();

		// B13. Delete the contents of <main>
		document.querySelector('main').innerHTML = '';
	});
}
