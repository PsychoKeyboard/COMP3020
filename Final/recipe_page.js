function getRecipes(){
    var priorityRecipesList = JSON.parse(sessionStorage.getItem("priorityRecipes"));
    document.getElementById("queuedRecipes").innerHTML = displayPriorityList(priorityRecipesList);
}

function displayPriorityList(theList){
    var string = "";
    for(var i = theList.list.length -1; i >= 0;i--){
        string += "<div class=\"recipecard\" onclick=\"location.href='" + theList.list[i].url + "'\">";
        string += "<img src=\"" + theList.list[i].image + "\">";
        string += "<div class=\"recipecard-text\">" + theList.list[i].name + "</div>";
        string += "<div class=\"recipecard-percentage\">" + theList.list[i].percentage + "\%</div>";
        string += "</div>";
    }
    return string;
}
