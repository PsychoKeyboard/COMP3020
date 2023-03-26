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

const allIngredientsList = new IngredientsQueueList();

//Everyday Items
//Dairy
const milk = new Ingredient("Milk",1);
const cheese = new Ingredient("Cheese",1);
const eggs = new Ingredient("Eggs",1);
const butter = new Ingredient("Butter/Margerine",1);
const yogurt = new Ingredient("Yogurt",1);
const butterMilk = new Ingredient("Butter Milk",1);
const whippedCream = new Ingredient("Whipped Cream",1);
const goatCheese = new Ingredient("Goat Cheese",1);
const iceCream = new Ingredient("Ice Cream",1);
const sourCream = new Ingredient("Sour Cream",1);
const condensedMilk = new Ingredient("Condensed Milk",1);           
const halfAndHalf = new Ingredient("Half and Half",1);
const coconutMilk = new Ingredient("Coconut Milk",1);
const heavyCream = new Ingredient("Heavy Cream",1);

//Pasta and Grains
const bowtiePasta = new Ingredient("Bowtie Pasta",1);
const elbowMacaroni = new Ingredient("Elbow Macaroni",1);
const granola = new Ingredient("Granola",1);
const oats = new Ingredient("Oats/Oatmeal",1);
const ramen = new Ingredient("Ramen",1);
const rotiniNoodles = new Ingredient("Rotini Noodles",1);
const ravioli = new Ingredient("Ravioli",1);
const barley = new Ingredient("Barley",1);
const brownRice = new Ingredient("Brown Rice",1);
const lasagna = new Ingredient("Lasagna Noodles",1);
const orzo = new Ingredient("Orzo",1);
const whiteRice = new Ingredient("White Rice",1);
const eggNoodles = new Ingredient("Egg Noodles",1);
const gnocchi = new Ingredient("Gnocchi",1);
const spaghetti = new Ingredient("Spaghetti Noodles",1);
const wildRice = new Ingredient("Wild Rice",1);



function addToIngredientsList(){
    document.getElementById("milk").innerHTML = "milk";
}

document.getElementById("milk").addEventListener("click", addToIngredientsList());

document.getElementById("ingredientsList").innerHTML = "list is" + allIngredientsList;


