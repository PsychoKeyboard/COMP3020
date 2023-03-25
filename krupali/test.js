document.getElementById("cheese").innerHTML = "this";

var cheese;

function clicked(){
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
            if (this.checked == false){
                this.checked = true;
                this.priority = 1;
            }
            else if (this.checked == true){
                this.checked = false;
                this.priority = 0;
            }
        }
    }

    class Recipe{
        constructor(recipeName, ingredientsList, priority, url, image){
            this.name = recipeName;
            this.ingredients = ingredientsList;
            this.priority = priority;
            this.url = url;
            this.image = image;
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

    cheese = new Ingredient("cheese", 0);
    generateRecipes();
    
}

function generateIngredients(){
    
}

function generateRecipes(){
    recipeName = new Recipe("Peanut Butter and Jam Sandwich", [peanutButter, Jam, Bread], 0,);
}
