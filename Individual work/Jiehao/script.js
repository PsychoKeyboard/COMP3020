function searchRecipes() {
	// Get the search query from the input box
	let query = document.getElementById("search-box").value.toLowerCase();
	// Get the container where the search results will be displayed
	let resultsContainer = document.getElementById("results-container");
	// Clear the container
	resultsContainer.innerHTML = "";
	//Loop through the dummy database by ingredients and name
	for (let i = 0; i < database.length; i++) {
		// Check if the recipe name or ingredients contain the search query
		if (database[i].name.toLowerCase().includes(query) || database[i].ingredients.toLowerCase().includes(query)) {
			// Create a recipe card
			let recipeCard = document.createElement("div");
			recipeCard.classList.add("recipe-card");
			// Add the recipe image to the card
			let recipeImage = document.createElement("img");
			recipeImage.src = database[i].image;
			recipeCard.appendChild(recipeImage);
			//make the image connect to url in database
			recipeImage.addEventListener("click", function() {
				window.location.href = database[i].url;
			});
			// Add the recipe name to the card
			let recipeName = document.createElement("h2");
			recipeName.textContent = database[i].name;
			recipeCard.appendChild(recipeName);
			// Add the recipe description to the card
			let recipeDescription = document.createElement("p");
			recipeDescription.textContent = database[i].description;
			recipeCard.appendChild(recipeDescription);
			// Add the recipe card to the results container
			resultsContainer.appendChild(recipeCard);
		}
	}
}

// Dummy database
let database = [
	{
		name: "Golden Shimpe burger",
		ingredients: "shrimp, egg, bread crumbs, salt, pepper, oil, lettuce, tomato, onion, ketchup, mustard, mayonnaise, buns",
		description: "A delicious shrimp burger with a crispy golden crust.",
		url: "https://www.epicurious.com/recipes/food/views/ba-syn-crispy-golden-shrimp-burgers",
		image: "https://github.com/PsychoKeyboard/COMP3020/blob/master/Jiehao/burger.png",
	},
	{
		name: "Shrimp and Grits",
		ingredients: "shrimp, butter, flour, milk, salt, pepper, cheese, grits",
		description: "A southern classic with a twist.",
		url: "https://www.epicurious.com/recipes/food/views/shrimp-and-grits-5115",
	},
	{
		name: "Shrimp and Grits",
		ingredients: "shrimp, butter, flour, milk, salt, pepper, cheese, grits",
		description: "A southern classic with a twist.",
		url: "https://www.epicurious.com/recipes/food/views/shrimp-and-grits-5115",
	},
	{
		name:"Pizza",
		ingredients: "dough, tomato sauce, cheese, pepperoni, mushrooms, olives, onions, peppers",
		description: "A delicious pizza with a crispy golden crust.",
		url: "https://www.epicurious.com/recipes/food/views/ba-syn-crispy-golden-shrimp-burgers",
	
	}
]
