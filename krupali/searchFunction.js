function searchFunction(ingredientsList, recipeList){
    //filter through recipes and guve priority num according to num of ingredients
    //if ingredient is missing, priority num is decreased by 1
    //super ingredients have a num of 2
    //normal ingredients have a num of 1
    //~math~ 
    for(var i = 0; i < recipeList.length; i++){
        recipe = recipeList[i];
    }
    recipeNew = new Recipe()
}

function includes(ingredientsList, ingredient){
    const result = ingredientsList.find(({name}) => name === ingredient);
    num = 0;
    if(result === 'undefined') {
        num = -1;
    }
    else{
        num = result.priority;
    }
    return num;
}
