function getRecipes(){
    var priorityRecipesList = JSON.parse(sessionStorage.getItem("priorityRecipes"));
    document.getElementById("queuedRecipes").innerHTML=displayPriorityList(priorityRecipesList);
}

function displayPriorityList(theList){
    var string = ""
    for(var i = theList.list.length -1; i >= 0;i--){
        string = string + "<div class=\"tile\" onclick=\"location.href='" + theList.list[i].url + "'\"> " + theList.list[i].name + "</div>";
    }
    return string;
}

function stringDisplay(){

}