class Recipe{
    constructor(recipeName, ingredientsList, priority){
        this.name = recipeName;
        this.ingredients = ingredientsList;
        this.priority = priority;
    }

    add(ingredient){
        this.ingredients.add(ingredient);
    }

    calculatePriority(ingredientsList){
        for(var j =0; j < recipe.ingredients.length; j++){
            this.priority += includes(ingredientsList,recipe.ingredient[j]);
        }
    }
}

