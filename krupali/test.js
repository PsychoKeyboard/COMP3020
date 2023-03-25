document.getElementById("cheese").innerHTML = "this";

//ingredients
var cheese;

//recipes
var pbjSandwich;
var gsBurger;
var sfToast;
var jRice;
var ccTenderloins;
var bBread;
var pDough;
var icpSalad;
var vMomos;
var ofPancakes;

//lists
var allIngredients;
var allRecipes;
var priorityRecipesList;

function clicked(num){
    allIngredients.list[Number(num)].check();
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

    class List{
        constructor(){
            this.list = new Array();
        }
    
        add(queueIngredient){
            this.list.push(queueIngredient);
        }
    
        remove(queueIngredient){
            const index = this.list.indexOf(queueIngredient);
            this.list.splice(index, 1);
        }
    }

    class PriorityList{
        constructor(){
            this.items = [];
        }
    
        enqueue(recipe){
            var contain = false;
    
            for (var i = 0; i < this.items.length; i++){
                if (this.items[i].priority > recipe.priority) {
                    this.items.splice(i, 0, recipe);
                    contain = true;
                    break;
                }
            }
    
            if(!contain){
                this.items.push(recipe);
            }
        }
    
        dequeue(){
            if(this.isEmpty()){
                return "Underflow";
            }
            return this.items.shift();
        }
    
        // isEmpty function
        isEmpty()
        {
            // return true if the queue is empty.
            return this.items.length == 0;
        }
    
        front(){
            if(this.isEmpty()){
                return "No elements in Queue";
            }
            return this.items[0];
        }
    
        rear(){
            if(this.isEmpty()){
                return "No elements in Queue";
            }
            return this.items[this.items.length - 1];
        }
    }

    //ingredients
    cheese = new Ingredient("cheese", 0);
    jam = new Ingredient("jam", 0);

    //var ALL INGREDIENTS LIST
    allIngredients = new List();
    allIngredients.add(cheese); //0
    allIngredients.add(jam); //1

    //recipes
    gsBurger = new Recipe("Golden Shrimp Burger", [egg, onion, Ketchup, shrimp, potato, pepper, butter, buns], 0, "https://www.epicurious.com/recipes/food/views/ba-syn-crispy-golden-shrimp-burgers", "../Resourses/burger.png");
    ckpShake = new Recipe("Chocolate Keto Protein Shake", [milk, butter, cocoaPowder, sugar, chiaSeed, hempSeed, vanilla], 0, "https://www.delish.com/cooking/recipe-ideas/a25336257/keto-protein-shake-recipe/", "../Resourses/milkshake.png" );
    sfToast = new Recipe("Savory French Toast", [egg, cream, garlicPowder, onionPowder, parsley, paprika, pepper, bread, butter], 0, "https://tasty.co/recipe/savory-french-toast","../Resourses/toast.png");
    jRice = new Recipe("Jollof Rice", [redPepper, tomato, onion, ginger, garlic, rice, curryPowder, bouillonPowder, thyme, greenPeas, oil], 0, "https://www.simplyrecipes.com/jollof-rice-recipe-7104327", "../Resourses/Rice.png");
    ccTenderloins = new Recipe("Crumbed Chicken Tenderloins", [egg, breadCrumbs, chickenTenderloins, oil], 0, "https://www.allrecipes.com/recipe/260625/crumbed-chicken-tenderloins-air-fried/", "../Resourses/chickenTender.png");
    bBread = new Recipe("Banana Bread", [banana, butter, bakingSoda, sugar, egg, vanilla, flour, oliveOil], 0, "https://www.simplyrecipes.com/recipes/banana_bread/", "../Resourses/bBread.png");
    pDough = new Recipe("Pizza Dough", [flour, yeast, sugar, garlicPowder], 0, "https://sugarspunrun.com/the-best-pizza-dough-recipe", "../Resourses/pDough.png");
    icpSalad = new Recipe("Italian Caprese Pasta Salad", [pasta, pesto, tomato, mozzarella, oregano, oil], 0, "https://anitalianinmykitchen.com/caprese-pasta-salad", "../Resourses/icpSalad.png");
    vMomos = new Recipe("Veg Momos", [flour, ginger, garlic, vinegar, soySauce, pepper, oil], 0, "https://www.vegrecipesofindia.com/veg-momos-recipe-vegetable-momos/#wprm-recipe-container-139104", "../Resourses/momos.png");
    ofPancakes = new Recipe("Old Fasioned Pancakes", [flour, salt, egg, milk, sugar, bakingPowder, oil], 0, "https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/", "../Resourses/pancakes.png");

    //var ALL RECIPES LIST
    allRecipes = new List();
    allRecipes.add(gsBurger);
    allRecipes.add(sfToast);
    allRecipes.add(jRice);
    allRecipes.add(ccTenderloins);
    allRecipes.add(bBread);
    allRecipes.add(pDough);
    allRecipes.add(icpSalad);
    allRecipes.add(vMomos);
    allRecipes.add(ofPancakes);

    //Priority List for Recipes;
    priorityRecipesList = new PriorityList();
}

function search(){
    for(var i in allRecipes){
        calculatePriority(allIngredients, allRecipes[i]);
        if (allRecipes[i].priority > 0){
            priorityRecipesList.enqueue(allRecipes[i]);
        }
    }
    display();
}

function calculatePriority(ingredientsList, recipe){
    //filter through recipes and guve priority num according to num of ingredients
    //if ingredient is missing, priority num is decreased by 1
    //super ingredients have a num of 2
    //normal ingredients have a num of 1 
    for(var j = 0; j < recipe.ingredientsList.length; j++){
        recipe.priority += includes(ingredientsList,recipe.ingredientsList[j]);
    }
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

function display(){
    
}
