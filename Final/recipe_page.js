function getRecipes(){
    document.getElementById("queuedRecipes").innerHTML=sessionStorage.getItem("priorityList");
}
