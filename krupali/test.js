document.getElementById("cheese").innerHTML = "this";

class Ingredient{
    constructor(name, priority){
        this.name = name;
        this.checked = flase;
        this.priority = priority;
    }
    
    check(){
        if (this.checked = false){
            this.checked = true;
            this.priority = 1;
        }
        if (this.checked = true){
            this.checked = false;
            this.priority = 0;
        }
    }
}

var cheese = new Ingredient("cheese", 0);

function clicked(){
    document.getElementById("cheese").innerHTML = "Cheese is checked? " + cheese.checked;
    cheese.check();
}
