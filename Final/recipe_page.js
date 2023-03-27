function getRecipes(){
    var priorityRecipesList = JSON.parse(sessionStorage.getItem("priorityRecipes"));
    document.getElementById("queuedRecipes").innerHTML=displayPriorityList(priorityRecipesList);
}

function displayPriorityList(theList){
    var string = ""
    for(var i in theList.list){
        string = string + "<a>" + theList.list[i].name + " " + theList.list[i].priority + " " + theList.list[i].percentage + "%</a>";
    }
    return string;
}