class PriorityList{
  constructor(){
      this.items = [];
  }

  enqueue(recipe, priority){
      var queueRecipe = new QueueRecipe(recipe, priority);
      var contain = false;

      for (var i = 0; i < this.items.length; i++){
          if (this.items[i].priority > queueRecipe.priority) {
              this.items.splice(i, 0, queueRecipe);
              contain = true;
              break;
          }
      }

      if(!contain){
          this.items.push(queueRecipe);
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

// retrieve the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const priorityListString = urlParams.get('priorityList');

// convert the string back to PriorityList object
const priorityList = new PriorityList();
const priorityListArray = JSON.parse(priorityListString);
priorityListArray.forEach(item => {
  priorityList.enqueue(item.recipe, item.priority);
});

// Call the display function with the priorityRecipesList

display(priorityRecipesList);

function test(priorityRecipesList) {
    console.log(priorityRecipesList);
  }
  test(priorityRecipesList);

function display(priorityRecipesList) {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = "";
  
  // Loop through each recipe in the priorityRecipesList and create a recipe card for it
  for (let i = priorityRecipesList.length-1; i >=0; i--) {
    const recipe = priorityRecipesList[i];
    
    // Create the recipe card
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    
    // Add the recipe image
    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeCard.appendChild(recipeImage);
    
    // Add a click event to open the recipe URL in a new tab
    recipeImage.addEventListener("click", function(){
      window.open(recipe.url);
    });
    
    // Add the recipe name
    const recipeName = document.createElement("h2");
    recipeName.textContent = recipe.name;
    recipeCard.appendChild(recipeName);
    
    // Add the recipe card to the results container
    resultsContainer.appendChild(recipeCard);
  }
}



  