document.getElementById("cheese").innerHTML = "this";

//ingredients
var cheese; //0 

//Banana Bread
var banana; //1
var butter; //2
var bakingSoda; //3
var salt; //4
var sugar; //5
var egg; //6
var vanilla; //7
var flour; //8
//Pizza Dough
var yeast; //9
var garlicPowder; //10
var oliveOil; //11
//Italian Caprese Pasta Salad
var grapeTomatoes; //12
var mozzarella; //13
var basilPesto; //14
var oregano; //15
var pasta; //16
var spiralPasta; //17
var gemelliPasta; //18
//vMomos
var ginger; //19
var garlic; //20
var vinegar; //21
var soySauce; //22
var blackPepper; //23
var oil; //24
var mushrooms; //25
var onion; //26
//Pancakes
var milk; //27
var bakingPowder; //28
//Burger
var ketchup; //29
var shrimp; //30
var potato; //31
var briocheBuns; //32
//Protein shake
var cocoaPowder; //33
var chiaSeed; //34
var hempSeed; //35
//French Toast
var cream; //36
var onionPowder; //37
var parsley; //38
var paprika; //39
var bread; //40
//jRice
var redPepper; //41
var tomato //42
var rice; //43
var curryPowder; //44
var bouillonPowder; //45
var thyme; //46
var greenPeas; //47
//crumbed Chicken
var breadcrumbs; //48
var chickenTenderloins; //49
//other produce
var cheddar; //50
//other dairy
var cabbage; //51
//other meat
var bacon; //52
var chickenBreast; //53
var groundBeef; //54
var groundTurkey; //55
var hotDog; //56
var pepperoni; //57
var ham; //58
var lamb; //59
var sausage; //60
var salami; //61
var steak; //62
//other pasta/grain
var ravioli; //63
var barley; //64
var brownRice; //65
var lasagnaNoodles; //66
var orzo; //67
var whiteRice; //68
var eggNoodles; //69
var gnocchi; //70
var spaghettiNoodles; //71
var wildRice; //72
var rotiniNoodles; //73
//other bread
var bagels; //74
var buns;  //75
var eggRollWraps; //76
var pizzaCrust; //77
var wontonWrappers; //78
var muffins; //79
var rolls; //80
var ryeBread; //81
//other spices
var mint; //82
var basil; //83
var cajunSeasoning; //84
var chives; //85
var italianSeasoning; //86
var nutmeg; //87
var paprika; //88
var peppercorns; //89
var chilliPowder; //91
var cinnamon; //92
var cumin; //93
var dill; //94
var meatSeasoning; //90
//other condiments
var hotSauce; //95
var mustard; //96
var mayo;  //97
var saladDressing; //98
var ranch; //99
var vinnegrette; //100

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
var selectedIngredients;

function clicked(num){
    allIngredients.list[Number(num)].check();
    document.getElementById("sugar").innerHTML = "sugar is checked?" + sugar.checked;
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
    //banana bread
    banana = new Ingredient("Banana", 1);
    butter = new Ingredient("Butter", 0);
    bakingSoda = new Ingredient("Baking Soda", 0);
    salt = new Ingredient("Salt", 1);
    sugar = new Ingredient("Sugar", 1);
    egg = new Ingredient("Eggs", 1);
    vanilla = new Ingredient("Vanilla", 0);
    flour = new Ingredient("Flour", 0);

    //Pizza Dough
    yeast = new Ingredient("Yeast", 0);
    garlicPowder = new Ingredient("Garlic Powder", 0);
    oliveOil = new Ingredient("Olive Oil", 0);

    //Italian Caprese Pasta Salad
    grapeTomatoes = new Ingredient("Grape Tomatoes", 0);
    mozzarella = new Ingredient("Mozzarella", 0);
    basilPesto = new Ingredient("Basil Pesto", 0);
    oregano = new Ingredient("Oregano", 0);
    pasta = new Ingredient("Pasta", 1);
    spiralPasta = new Ingredient("Spiral Pasta", 0);
    gemelliPasta = new Ingredient("Gamelli Pasta", 0);

    //vMomos
    ginger = new Ingredient("Ginger", 0);
    garlic = new Ingredient("Garlic", 0);
    vinegar = new Ingredient("Vinegar", 0);
    soySauce = new Ingredient("Soy Sauce", 0);
    blackPepper = new Ingredient("Black Pepper", 1);
    oil = new Ingredient("Oil", 1);
    mushrooms = new Ingredient("Mushrooms", 0);
    onion = new Ingredient("Onions", 1);

    //Pancakes
    milk = new Ingredient("Milk", 1);
    bakingPowder = new Ingredient("Baking Powder", 0);

    //Burger
    ketchup = new Ingredient("Ketchup", 1);
    shrimp = new Ingredient("Shrimps", 0);
    potato = new Ingredient("Potato", 1);
    briocheBuns = new Ingredient("Brioche Buns", 0);

    //Protein shake
    cocoaPowder = new Ingredient("Cocoa Powder", 0);
    chiaSeed = new Ingredient("Chia Seed", 0);
    hempSeed = new Ingredient("Hemp Seed", 0);

    //French Toast
    cream = new Ingredient("Cream", 0);
    onionPowder = new Ingredient("Onion Powder", 0);
    parsley = new Ingredient("Parsley", 0);
    paprika = new Ingredient("Paprika", 0);
    bread = new Ingredient("Bread", 1);

    //jRice
    redPepper = new Ingredient("Red Pepper", 1);
    tomato = new Ingredient("Tomato", 1);
    rice = new Ingredient("Rice", 1);
    curryPowder = new Ingredient("Curry Powder", 0);
    bouillonPowder = new Ingredient("Bouillon Powder", 0);
    thyme = new Ingredient("Thyme", 0);
    greenPeas = new Ingredient("Green Peas", 0);

    //others
    cheddar= new Ingredient("Cheddar", 0);
    cabbage= new Ingredient("Cabbage", 0);
    bacon= new Ingredient("Bacon", 0);
    chickenBreast= new Ingredient("Chicken Breadt", 0);
    groundBeef= new Ingredient("Ground Beef", 0);
    groundTurkey= new Ingredient("Ground Turkey", 0);
    hotDog= new Ingredient("Hot Dog", 0);
    pepperoni= new Ingredient("Pepperoni", 0);
    ham= new Ingredient("Ham", 0);
    lamb= new Ingredient("Lamb", 0);
    sausage= new Ingredient("Sausage", 0);
    salami= new Ingredient("Salami", 0);
    steak= new Ingredient("Steak", 0);
    ravioli= new Ingredient("Raviolli", 0);
    barley= new Ingredient("Barley", 0);
    brownRice= new Ingredient("Brown Rice", 0);
    lasagnaNoodles= new Ingredient("Lasagna Noodles", 0);
    orzo= new Ingredient("Orzo", 0);
    whiteRice= new Ingredient("White Rice", 0);
    eggNoodles= new Ingredient("Egg Noodles", 0);
    gnocchi= new Ingredient("Gnocchi", 0);
    spaghettiNoodles= new Ingredient("Spagetti Noodles", 0);
    wildRice= new Ingredient("Wild Rice", 0);
    rotiniNoodles= new Ingredient("Rotini Noodles", 0);
    bagels= new Ingredient("Bagels", 0);
    buns= new Ingredient("Buns", 0);
    eggRollWraps= new Ingredient("Egg Roll Wraps", 0);
    pizzaCrust= new Ingredient("Pizza Crust", 0);
    wontonWrappers= new Ingredient("Wonton Wrappers", 0);
    muffins= new Ingredient("Muffins", 0);
    rolls= new Ingredient("Rolls", 0);
    ryeBread= new Ingredient("Rye Bread", 0);
    mint= new Ingredient("Mint", 0);
    basil= new Ingredient("Basil", 0);
    cajunSeasoning= new Ingredient("Cajun Seasoning", 0);
    chives= new Ingredient("Chives", 0);
    italianSeasoning= new Ingredient("Italian Seasoning", 0);
    nutmeg= new Ingredient("Nutmeg", 0);
    paprika= new Ingredient("Paprika", 0);
    peppercorns= new Ingredient("Peppercorns", 0);
    chilliPowder= new Ingredient("Chilli Powder", 0);
    cinnamon= new Ingredient("Cinnamon", 0);
    cumin= new Ingredient("Cumin", 0);
    dill= new Ingredient("Dill", 0);
    meatSeasoning= new Ingredient("Meat Seasoning", 0);
    hotSauce= new Ingredient("Hot Sauce", 0);
    mustard= new Ingredient("Mustard", 0);
    mayo= new Ingredient("Mayo", 0);
    saladDressing= new Ingredient("Salad Dressing", 0);
    ranch= new Ingredient("Ranch", 0);
    vinnegrette= new Ingredient("Vinnegrette", 0);

    //var ALL INGREDIENTS LIST
    allIngredients = new List();
    selectedIngredients = new List();
    allIngredients.add(cheese); //0
    allIngredients.add(banana); //1
    allIngredients.add(butter); //2
    allIngredients.add(bakingSoda); //3
    allIngredients.add(salt); //4
    allIngredients.add(sugar); //5
    allIngredients.add(egg); //6
    allIngredients.add(vanilla); //7
    allIngredients.add(flour); //8
    //Pizza Dough
    allIngredients.add(yeast); //9
    allIngredients.add(garlicPowder); //10
    allIngredients.add(oliveOil); //11
    //Italian Caprese Pasta Salad
    allIngredients.add(grapeTomatoes); //12
    allIngredients.add(mozzarella); //13
    allIngredients.add(basilPesto); //14
    allIngredients.add(oregano); //15
    allIngredients.add(pasta); //16
    allIngredients.add(spiralPasta); //17
    allIngredients.add(gemelliPasta); //18
    //vMomos
    allIngredients.add(ginger); //19
    allIngredients.add(garlic); //20
    allIngredients.add(vinegar); //21
    allIngredients.add(soySauce); //22
    allIngredients.add(blackPepper); //23
    allIngredients.add(oil); //24
    allIngredients.add(mushrooms); //25
    allIngredients.add(onion); //26
    //Pancakes
    allIngredients.add(milk); //27
    allIngredients.add(bakingPowder); //28
    //Burger
    allIngredients.add(ketchup); //29
    allIngredients.add(shrimp); //30
    allIngredients.add(potato); //31
    allIngredients.add(briocheBuns); //32
    //Protein shake
    allIngredients.add(cocoaPowder); //33
    allIngredients.add(chiaSeed); //34
    allIngredients.add(hempSeed); //35
    //French Toast
    allIngredients.add(cream); //36
    allIngredients.add(onionPowder); //37
    allIngredients.add(parsley); //38
    allIngredients.add(paprika); //39
    allIngredients.add(bread); //40
    //jRice
    allIngredients.add(redPepper); //41
    allIngredients.add(tomato); //42
    allIngredients.add(rice); //43
    allIngredients.add(curryPowder); //44
    allIngredients.add(bouillonPowder); //45
    allIngredients.add(thyme); //46
    allIngredients.add(greenPeas); //47
    //crumbed Chicken
    allIngredients.add(breadcrumbs); //48
    allIngredients.add(chickenTenderloins); //49
    //other produce
    allIngredients.add(cheddar); //50
    //other dairy
    allIngredients.add(cabbage); //51
    //other meat
    allIngredients.add(bacon); //52
    allIngredients.add(chickenBreast); //53
    allIngredients.add(groundBeef); //54
    allIngredients.add(groundTurkey); //55
    allIngredients.add(hotDog); //56
    allIngredients.add(pepperoni); //57
    allIngredients.add(ham); //58
    allIngredients.add(lamb); //59
    allIngredients.add(sausage); //60
    allIngredients.add(salami); //61
    allIngredients.add(steak); //62
    //other pasta/grain
    allIngredients.add(ravioli); //63
    allIngredients.add(barley); //64
    allIngredients.add(brownRice); //65
    allIngredients.add(lasagnaNoodles); //66
    allIngredients.add(orzo); //67
    allIngredients.add(whiteRice); //68
    allIngredients.add(eggNoodles); //69
    allIngredients.add(gnocchi); //70
    allIngredients.add(spaghettiNoodles); //71
    allIngredients.add(wildRice); //72
    allIngredients.add(rotiniNoodles); //73
    //other bread
    allIngredients.add(bagels); //74
    allIngredients.add(buns);  //75
    allIngredients.add(eggRollWraps); //76
    allIngredients.add(pizzaCrust); //77
    allIngredients.add(wontonWrappers); //78
    allIngredients.add(muffins); //79
    allIngredients.add(rolls); //80
    allIngredients.add(ryeBread); //81
    //other spices
    allIngredients.add(mint); //82
    allIngredients.add(basil); //83
    allIngredients.add(cajunSeasoning); //84
    allIngredients.add(chives); //85
    allIngredients.add(italianSeasoning); //86
    allIngredients.add(nutmeg); //87
    allIngredients.add(paprika); //88
    allIngredients.add(peppercorns); //89
    allIngredients.add(chilliPowder); //91
    allIngredients.add(cinnamon); //92
    allIngredients.add(cumin); //93
    allIngredients.add(dill); //94
    allIngredients.add(meatSeasoning); //90
    //other condiments
    allIngredients.add(hotSauce); //95
    allIngredients.add(mustard); //96
    allIngredients.add(mayo);  //97
    allIngredients.add(saladDressing); //98
    allIngredients.add(ranch); //99
    allIngredients.add(vinnegrette); //100

    //recipes
    gsBurger = new Recipe("Golden Shrimp Burger", [egg, onion, ketchup, shrimp, potato, blackPepper, butter, buns], 0, "https://www.epicurious.com/recipes/food/views/ba-syn-crispy-golden-shrimp-burgers", "../Resourses/burger.png");
    ckpShake = new Recipe("Chocolate Keto Protein Shake", [milk, butter, cocoaPowder, sugar, chiaSeed, hempSeed, vanilla], 0, "https://www.delish.com/cooking/recipe-ideas/a25336257/keto-protein-shake-recipe/", "../Resourses/milkshake.png" );
    sfToast = new Recipe("Savory French Toast", [egg, cream, garlicPowder, onionPowder, parsley, paprika, blackPepper, bread, butter], 0, "https://tasty.co/recipe/savory-french-toast","../Resourses/toast.png");
    jRice = new Recipe("Jollof Rice", [redPepper, tomato, onion, ginger, garlic, rice, curryPowder, bouillonPowder, thyme, greenPeas, oil], 0, "https://www.simplyrecipes.com/jollof-rice-recipe-7104327", "../Resourses/Rice.png");
    ccTenderloins = new Recipe("Crumbed Chicken Tenderloins", [egg, breadcrumbs, chickenTenderloins, oil], 0, "https://www.allrecipes.com/recipe/260625/crumbed-chicken-tenderloins-air-fried/", "../Resourses/chickenTender.png");
    bBread = new Recipe("Banana Bread", [banana, butter, bakingSoda, sugar, egg, vanilla, flour, oliveOil], 0, "https://www.simplyrecipes.com/recipes/banana_bread/", "../Resourses/bBread.png");
    pDough = new Recipe("Pizza Dough", [flour, yeast, sugar, garlicPowder], 0, "https://sugarspunrun.com/the-best-pizza-dough-recipe", "../Resourses/pDough.png");
    icpSalad = new Recipe("Italian Caprese Pasta Salad", [pasta, basilPesto, tomato, mozzarella, oregano, oil], 0, "https://anitalianinmykitchen.com/caprese-pasta-salad", "../Resourses/icpSalad.png");
    vMomos = new Recipe("Veg Momos", [flour, ginger, garlic, vinegar, soySauce, blackPepper, oil], 0, "https://www.vegrecipesofindia.com/veg-momos-recipe-vegetable-momos/#wprm-recipe-container-139104", "../Resourses/momos.png");
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
        calculatePriority(selectedIngredients, allRecipes[i]);
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

function display(priorityRecipesList){
    let resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = "";
    for(var i = priorityRecipesList.length - 1; i >= 0; i--){
        //let recipe = priorityRecipesList[i];
        let recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        let recipeImage = document.createElement("img");
        recipeImage.src = priorityRecipesList[i].image;
        recipeCard.appendChild(recipeImage);
        recipeImage.addEventListener("click", function(){
            window.open(priorityRecipesList[i].url);
        });
        let recipeName = document.createElement("h2");
        recipeName.textContent = priorityRecipesList[i].name;
        recipeCard.appendChild(recipeName);
        resultsContainer.appendChild(recipeCard);
    }
}
