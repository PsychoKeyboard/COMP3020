function clicked(num){
    var allIngredients = JSON.parse(sessionStorage.getItem("ingredients"));
    check(allIngredients.list[num]);
    sessionStorage.setItem("ingredients", JSON.stringify(allIngredients));
}

function search(){
    document.getElementById("allRecipes").innerHTML=sessionStorage.getItem("allRecipes");
    document.getElementById("queuedRecipes").innerHTML=sessionStorage.getItem("priorityList");
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
}

//list functions
function add(listObject, queueObject){
    listObject.list.push(queueObject);
    const index = listObject.list.indexOf( queueObject);
    console.log(index);
    listObject.length++;
}

function remove(listObject, queueObject){
    const index = listObject.list.indexOf(queueObject);
    console.log(index);
    listObject.list.splice(index, 1);
    listObject.length--;
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