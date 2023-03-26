class Ingredient{
    constructor(name, priority){
        this.name = name;
        this.checked = flase;
        this.priority = priority;
    }
    
    check(){
        if (this.checked = false) this.checked = true;
        if (this.checked = true) this.checked = false;
    }
}

class IngredientsQueueList{
    constructor(){
        this.list = new Array();
    }

    add(queueIngredient){
        this.list.add(queueIngredient);
    }

    remove(queueIngredient){
        const index = this.list.indexOf(queueIngredient);
        this.list.splice(index, 1);
    }
}