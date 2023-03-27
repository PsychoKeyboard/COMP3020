function clicked(num){
    var allIngredients = JSON.parse(sessionStorage.getItem("ingredients"));
    check(allIngredients.list[num]);
    sessionStorage.setItem("ingredients", JSON.stringify(allIngredients));
}

function search(){
    var allRecipes = JSON.parse(sessionStorage.getItem("recipes"));
    class PriorityList{
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
            var theString = "";
            this.empty();
            this.addRecipes();
            for(var i in this.list){
                theString = theString + this.list[i].name + " " + this.list[i].priority + " " + Math.round(this.getPercentage(this.list[i])) + "%, ";
            }
            return theString;
        }

        addRecipes(){
            for(var i = 0; i < allRecipes.length; i++){
                allRecipes.list[i].priority = 0;
                for(var j in allRecipes.list[i].ingredients){
                    allRecipes.list[i].priority += allRecipes.list[i].ingredients[j].priority;
                }
                this.enqueue(allRecipes.list[i]);
            }
        }

        getPercentage(recipe){
            if(recipe.priority > 0) {
                return ((recipe.priority)/((recipe.ingredients.length)-1))*100;
            }
            else{
                return 0;
            }
        }
    }

    var allRecipes = JSON.parse(sessionStorage.getItem("recipes")); 
    var priorityRecipesList = new PriorityList();

    document.getElementById("allRecipes").innerHTML = displayRecipe(allRecipes);
    document.getElementById("queuedRecipes").innerHTML = priorityRecipesList.displayRecipes();

    sessionStorage.setItem("recipes", JSON.stringify(allRecipes));
    sessionStorage.setItem("priorityRecipes", JSON.stringify(priorityRecipesList));
}

function displayRecipe(list){
    var theString = "";
    for(var i in list){
        theString = theString + list[i].name + ", ";
    }
    return theString;
}

function updateIngredients(){
    var selectedIngredients = JSON.parse(sessionStorage.getItem("selectedIngredients"));
    document.getElementById("theList").innerHTML = displaySelected(selectedIngredients);
    sessionStorage.setItem("selectedIngredients", JSON.stringify(selectedIngredients));
}

//ingredient functions
function check(ingredient){
    var selectedIngredients = JSON.parse(sessionStorage.getItem("selectedIngredients"));
    console.log(ingredient.checked);
    if (ingredient.checked == false){
        ingredient.checked = true;
        ingredient.priority = 1;
        document.getElementById(ingredient.id).style="background-color:var(--hover-bg);";
        add(selectedIngredients, ingredient);
        sessionStorage.setItem("selectedIngredients", JSON.stringify(selectedIngredients));
        updateIngredients();  
    }
    else if (ingredient.checked == true){
        ingredient.checked = false;
        ingredient.priority = 0;
        document.getElementById(ingredient.id).style="background-color:var(--background);";
        remove(selectedIngredients, ingredient);
        sessionStorage.setItem("selectedIngredients", JSON.stringify(selectedIngredients));
        updateIngredients();
    }
    else{
        console.log("what the fuck");
    }
}

//list functions
function add(listObject, queueObject){
    listObject.list.push(queueObject);
    var index = indexBy(listObject, queueObject);
    console.log(index);
    listObject.length++;
}

function remove(listObject, queueObject){
    var index = indexBy(listObject, queueObject);
    console.log(index);
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

function displayRecipe(listObject){
    var theString = "";
    for(var i in listObject.list){
        theString = theString + listObject.list[i].name + ", ";
    }
    return theString;
}