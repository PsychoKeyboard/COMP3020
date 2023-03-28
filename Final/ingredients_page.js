function loadAll(){
    var allIngredients = JSON.parse(sessionStorage.getItem("ingredients"));
    for(var i in allIngredients.list){
        if(allIngredients.list[i].checked == true){
            document.getElementById(allIngredients.list[i].id).style="background-color:var(--selected-bg);";
        }
    }
    sessionStorage.setItem("ingredients", JSON.stringify(allIngredients));
    updateIngredients();
}

function clicked(num){
    var allIngredients = JSON.parse(sessionStorage.getItem("ingredients"));
    check(allIngredients.list[num]);
    sessionStorage.setItem("ingredients", JSON.stringify(allIngredients));
}

function search(){
    var allIngredients = JSON.parse(sessionStorage.getItem("ingredients"));
    var allRecipes = generateRecipes();
    var priorityRecipesList = JSON.parse(sessionStorage.getItem("priorityRecipes"));
    class PriorityList
    {
        constructor(){
            this.list = new Array();
        }
    
        enqueue(recipe){
            var contain = false;
    
            for (var i in this.list){
                if (this.list[i].priority > recipe.priority) {
                    this.list.splice(i, 0, recipe);
                    contain = true;
                    break;
                }
            }
    
            if(!contain){
                this.list.push(recipe);
            }
        }
    
        dequeue(){
            if(this.isEmpty()){
                return "Underflow";
            }
            return this.list.shift();
        }
    
        // isEmpty function
        isEmpty()
        {
            // return true if the queue is empty.
            return this.list.length == 0;
        }

        empty(){
            this.list = new Array();
        }
    
        front(){
            if(this.isEmpty()){
                return "No elements in Queue";
            }
            return this.list[0];
        }
    
        rear(){
            if(this.isEmpty()){
                return "No elements in Queue";
            }
            return this.list[this.list.length - 1];
        }

        displayRecipes(){
            this.empty();
            this.addRecipes();
        }

        addRecipes(){
            for(var i in allRecipes.list){
                if(allRecipes.list[i].percentage > 10){
                    this.enqueue(allRecipes.list[i]);
                }
            }
        }
    }
    var priorityRecipesList = new PriorityList();
    priorityRecipesList.displayRecipes();

    sessionStorage.setItem("recipes", JSON.stringify(allRecipes));
    sessionStorage.setItem("priorityRecipes", JSON.stringify(priorityRecipesList));
}

function displayRecipe(theList){
    var theString = "";
    for(var i in theList.list){
        theString = theString + theList.list[i].name + " " + theList.list[i].priority + ", ";
    }
    return theString;
}


function generateRecipes(){
    class List{
        constructor(){
            this.list = new Array();
            this.length = 0;
        }
    
        add(queueObject){
            this.list.push(queueObject);
            this.length++;
        }
    
        remove(queueObject){
            const index = this.list.indexOf(queueObject);
            this.list.splice(index, 1);
            this.length--;
        }

        getItemAt(i){
            return this.list[i];
        }

        getLength(){
            return this.length;
        }

        empty(){
            this.list = new Array();
            this.length = 0;
        }
    }

    class Recipe{
        constructor(recipeName, ingredientsList, priority, url, image){
            this.name = recipeName;
            this.ingredients = ingredientsList;
            this.priority = priority;
            this.percentage = 0;
            this.url = url;
            this.image = image;
        }
    
        add(ingredient){
            this.ingredients.push(ingredient);
        }

        getPercentage(){
            for(var j in this.ingredients){
                this.priority += this.ingredients[j].priority;
            }
            this.percentage = Math.round(((this.priority)/((this.ingredients.length)-1))*100);
            return this.percentage;
        }
    }

    var allIngredients = JSON.parse(sessionStorage.getItem("ingredients"));
    //recipes
    gsBurger = new Recipe("Golden Shrimp Burger", [allIngredients.list[32], allIngredients.list[6], allIngredients.list[26], allIngredients.list[29], allIngredients.list[30], allIngredients.list[31], allIngredients.list[23], allIngredients.list[2], allIngredients.list[75]], 0, "https://www.epicurious.com/recipes/food/views/ba-syn-crispy-golden-shrimp-burgers", "../Resourses/burger.png");
    ckpShake = new Recipe("Chocolate Keto Protein Shake", [allIngredients.list[27], allIngredients.list[2], allIngredients.list[33], allIngredients.list[5], allIngredients.list[34], allIngredients.list[35], allIngredients.list[7]], 0, "https://www.delish.com/cooking/recipe-ideas/a25336257/keto-protein-shake-recipe/", "../Resourses/milkshake.png" );
    sfToast = new Recipe("Savory French Toast", [allIngredients.list[6], allIngredients.list[36], allIngredients.list[10], allIngredients.list[37], allIngredients.list[38], allIngredients.list[39], allIngredients.list[23], allIngredients.list[40], allIngredients.list[2]], 0, "https://tasty.co/recipe/savory-french-toast","../Resourses/toast.png");
    jRice = new Recipe("Jollof Rice", [allIngredients.list[41], allIngredients.list[42], allIngredients.list[26], allIngredients.list[19], allIngredients.list[20], allIngredients.list[43], allIngredients.list[44], allIngredients.list[44], allIngredients.list[45], allIngredients.list[46], allIngredients.list[24]], 0, "https://www.simplyrecipes.com/jollof-rice-recipe-7104327", "../Resourses/Rice.png");
    ccTenderloins = new Recipe("Crumbed Chicken Tenderloins", [allIngredients.list[6], allIngredients.list[48], allIngredients.list[49], allIngredients.list[24]], 0, "https://www.allrecipes.com/recipe/260625/crumbed-chicken-tenderloins-air-fried/", "../Resourses/chickenTender.png");
    bBread = new Recipe("Banana Bread", [allIngredients.list[28], allIngredients.list[1], allIngredients.list[2], allIngredients.list[3], allIngredients.list[5], allIngredients.list[6], allIngredients.list[7], allIngredients.list[8], allIngredients.list[11]], 0, "https://www.simplyrecipes.com/recipes/banana_bread/", "../Resourses/bBread.png");
    pDough = new Recipe("Pizza Dough", [allIngredients.list[8], allIngredients.list[9], allIngredients.list[5], allIngredients.list[10]], 0, "https://sugarspunrun.com/the-best-pizza-dough-recipe", "../Resourses/pDough.png");
    icpSalad = new Recipe("Italian Caprese Pasta Salad", [ allIngredients.list[17], allIngredients.list[18], allIngredients.list[16], allIngredients.list[14], allIngredients.list[12], allIngredients.list[13], allIngredients.list[15], allIngredients.list[24]], 0, "https://anitalianinmykitchen.com/caprese-pasta-salad", "../Resourses/icpSalad.png");
    vMomos = new Recipe("Veg Momos", [allIngredients.list[25], allIngredients.list[26], allIngredients.list[8], allIngredients.list[19], allIngredients.list[20], allIngredients.list[21], allIngredients.list[22], allIngredients.list[23], allIngredients.list[24]], 0, "https://www.vegrecipesofindia.com/veg-momos-recipe-vegetable-momos/#wprm-recipe-container-139104", "../Resourses/momos.png");
    ofPancakes = new Recipe("Old Fasioned Pancakes", [allIngredients.list[8], allIngredients.list[4], allIngredients.list[6], allIngredients.list[27], allIngredients.list[5], allIngredients.list[28], allIngredients.list[24]], 0, "https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/", "../Resourses/pancakes.png");
    
    //var ALL RECIPES LIST
    allRecipes = new List();
    gsBurger.getPercentage();
    ckpShake.getPercentage();
    sfToast.getPercentage();
    jRice.getPercentage();
    ccTenderloins.getPercentage();
    bBread.getPercentage();
    pDough.getPercentage();
    icpSalad.getPercentage();
    vMomos.getPercentage();
    ofPancakes.getPercentage();

    allRecipes.add(gsBurger); //1
    allRecipes.add(ckpShake); //2
    allRecipes.add(sfToast); //3
    allRecipes.add(jRice); //4
    allRecipes.add(ccTenderloins); //5
    allRecipes.add(bBread); //6
    allRecipes.add(pDough); //7
    allRecipes.add(icpSalad); //8
    allRecipes.add(vMomos); //9
    allRecipes.add(ofPancakes); //10

    sessionStorage.setItem("ingredients", JSON.stringify(allIngredients));
    sessionStorage.setItem("recipes", JSON.stringify(allRecipes));

    return allRecipes;
}

function updateIngredients(){
    var selectedIngredients = JSON.parse(sessionStorage.getItem("selectedIngredients"));
    document.getElementById("theList").innerHTML = displaySelected(selectedIngredients);
    sessionStorage.setItem("selectedIngredients", JSON.stringify(selectedIngredients));
}

//ingredient functions
function check(ingredient){
    var selectedIngredients = JSON.parse(sessionStorage.getItem("selectedIngredients"));
    if (ingredient.checked == false){
        ingredient.checked = true;
        ingredient.priority = 1;
        document.getElementById(ingredient.id).style="background-color:var(--selected-bg);";
        add(selectedIngredients, ingredient);
        sessionStorage.setItem("selectedIngredients", JSON.stringify(selectedIngredients));
        updateIngredients();  
    }
    else if (ingredient.checked == true){
        ingredient.checked = false;
        ingredient.priority = 0;
        document.getElementById(ingredient.id).style="background-color:var(--clear-bg);";
        remove(selectedIngredients, ingredient);
        sessionStorage.setItem("selectedIngredients", JSON.stringify(selectedIngredients));
        updateIngredients();
    }
}


//list functions
function add(listObject, queueObject){
    listObject.list.push(queueObject);
    var index = indexBy(listObject, queueObject);
    listObject.length++;
}

function remove(listObject, queueObject){
    var index = indexBy(listObject, queueObject);
    listObject.list.splice(index, 1);
    listObject.length--;
}

function indexBy(listObject, queueObject){
    var num = -1;
    for(var i = 0; i < listObject.list.length; i++){
        if(queueObject.id == listObject.list[i].id){
            return i;
        }
    }
    return num;
}

function displaySelected(listObject){
    var theString = "";
    for(var i in listObject.list){
        theString = theString + "<a>" + listObject.list[i].name + "</a>"; 
    }
    return theString;
}

function searchIngredient() {
    let input = document.getElementById("search").value
    input = input.toLowerCase();
    let x = document.getElementsByClassName("tile");
  
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
      }
      else {
        x[i].style.display="grid";                 
      }
    }
  }
