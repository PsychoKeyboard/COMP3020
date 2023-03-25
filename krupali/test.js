document.getElementById("cheese").innerHTML = "this";

function clicked(){
    class Ingredient{
        constructor(name, priority){
            this.name = name;
            this.checked = false;
            this.priority = priority;
        }
        
        check(){
            if (this.checked = false){
                this.checked = true;
                this.priority = 1;
            }
            else if (this.checked = true){
                this.checked = false;
                this.priority = 0;
            }
        }
    }
    var cheese = new Ingredient("cheese", 0);
    cheese.check();
    document.getElementById("cheese").innerHTML = "Cheese is checked?" + cheese.checked;
}

function generateAll(){
    class Ingredient{
        constructor(name, priority){
            this.name = name;
            this.checked = false;
            this.priority = priority;
        }
        
        check(){
            if (this.checked = false){
                this.checked = true;
                this.priority = 1;
            }
            else if (this.checked = true){
                this.checked = false;
                this.priority = 0;
            }
        }
    }

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

    generateIngredients();
    generateRecipes();

}

function generateIngredients(){
    var cheese = new Ingredient("cheese", 0);
    var peanutButter = new Ingredient("Peanut Butter", 0);
    var jam = new Ingredient("Jam", 0);
    var brad = new Ingredient("Bread", 0);
}

function generateRecipes(){
    var ingredientList = [peanutButter, Jam, Bread]
    var pbjSandwich = new Recipe("Peanut Butter and Jam Sandwich", ingredientList, 0 )
}
