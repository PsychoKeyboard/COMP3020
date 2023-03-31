import { recipeDatabase } from './recipes';

console.log(recipeDatabase);


function findRecipes(selectedIngredients) {
    const matchingRecipes = recipeDatabase.filter((recipe) => {
      // Check if all the selected ingredients are in the recipe's ingredient list
      return selectedIngredients.every((ingredient) => recipe.ingredients.includes(ingredient));
    });
  
    return matchingRecipes;
  }