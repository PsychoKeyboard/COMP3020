function searchFunction(ingredientsList, recipeList){
    //filter through recipes and guve priority num according to num of ingredients
    //if ingredient is missing, priority num is decreased by 1
    //super ingredients have a num of 2
    //normal ingredients have a num of 1
    //~math~ 
    for(var i = 0; i < recipeList.length; i++){
        recipe = recipeList[i];
        for(var j =0; j < recipe.ingredients.length; j++){
            //if recipe.ingredient[j] is in List, recipe.priority += ingredient.priority;
        }
    }
    return recipeList;
}

