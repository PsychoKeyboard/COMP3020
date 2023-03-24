class QueueRecipe{
    constructor(recipeName, priority){
        this.name = recipeName;
        this.ingredients = new Array();
        this.priority = priority;
    }

    add(ingredient){
        this.ingredients.add(ingredient);
    }
}
