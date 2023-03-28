//ingredients
var cheese; //0 

//Banana Bread
var banana; //1
var butter; //2
var bakingSoda; //3
var salt; //4
var sugar; //5
var eggs; //6
var vanilla; //7
var flour; //8
//Pizza Dough
var yeast; //9
var garlicPowder; //10
var oliveOil; //11
//Italian Caprese Pasta Salad
var grapeTomatoes; //12
var mozzarella; //13
var basilPesto; //14
var oregano; //15
var pasta; //16
var spiralPasta; //17
var gemelliPasta; //18
//vMomos
var ginger; //19
var garlic; //20
var vinegar; //21
var soySauce; //22
var blackPepper; //23
var oil; //24
var mushrooms; //25
var onion; //26
//Pancakes
var milk; //27
var bakingPowder; //28
//Burger
var ketchup; //29
var shrimp; //30
var potato; //31
var briocheBuns; //32
//Protein shake
var cocoaPowder; //33
var chiaSeed; //34
var hempSeed; //35
//French Toast
var cream; //36
var onionPowder; //37
var parsley; //38
var paprika; //39
var bread; //40
//jRice
var redPepper; //41
var tomato //42
var rice; //43
var curryPowder; //44
var bouillonPowder; //45
var thyme; //46
var greenPeas; //47
//crumbed Chicken
var breadcrumbs; //48
var chickenTenderloins; //49
//other produce
var cheddarCheese; //50
//other dairy
var cabbage; //51
//other meat
var bacon; //52
var chickenBreast; //53
var groundBeef; //54
var groundTurkey; //55
var hotDog; //56
var pepperoni; //57
var ham; //58
var lamb; //59
var sausage; //60
var salami; //61
var steak; //62
//other pasta/grain
var ravioli; //63
var barley; //64
var brownRice; //65
var lasagnaNoodles; //66
var orzo; //67
var whiteRice; //68
var eggNoodles; //69
var gnocchi; //70
var spaghettiNoodles; //71
var wildRice; //72
var rotiniNoodles; //73
//other bread
var bagels; //74
var buns;  //75
var eggRollWraps; //76
var pizzaCrust; //77
var wontonWrappers; //78
var muffins; //79
var rolls; //80
var ryeBread; //81
//other spices
var mint; //82
var basil; //83
var cajunSeasoning; //84
var chives; //85
var italianSeasoning; //86
var nutmeg; //87
var peppercorns; //88
var chilliPowder; //89
var cinnamon; //90
var cumin; //91
var dill; //92
var meatSeasoning; //93
//other condiments
var hotSauce; //94
var mustard; //95
var mayo;  //96
var saladDressing; //97
var ranch; //98
var vinaigrette; //199

//recipes
var pbjSandwich;
var gsBurger;
var sfToast;
var jRice;
var ccTenderloins;
var bBread;
var pDough;
var icpSalad;
var vMomos;
var ofPancakes;

//lists
var allIngredients;
var allRecipes;
var priorityRecipesList;
var selectedIngredients;

function generate(){
    if(sessionStorage.getItem("loaded") === null){
        generateAll();
        loadAll2();
        sessionStorage.setItem("loaded", true);
    }
}

function loadAll2(){
    var allIngredients = JSON.parse(sessionStorage.getItem("ingredients"));
    sessionStorage.setItem("ingredients", JSON.stringify(allIngredients));
    updateIngredients();
}

function updateIngredients2(){
    var selectedIngredients = JSON.parse(sessionStorage.getItem("selectedIngredients"));
    document.getElementById("theList").innerHTML = displaySelected(selectedIngredients);
    sessionStorage.setItem("selectedIngredients", JSON.stringify(selectedIngredients));
}

function displaySelected2(listObject){
    var theString = "";
    for(var i in listObject.list){
        theString = theString + "<a>" + listObject.list[i].name + "</a>"; 
    }
    return theString;
}

function generateAll(){
    class Ingredient{
        constructor(id, name, priority){
            this.id = id;
            this.name = name;
            this.checked = false;
            this.priority = priority;
        }

        toString(){
            return this.name;
        }
    }

    class List{
        constructor(){
            this.list = new Array();
            this.length = 0;
        }
    
        add(queueObject){
            this.list.push(queueObject);
            this.length++;
        }
    
        remove(queueObject){
            const index = this.list.indexOf(queueObject);
            this.list.splice(index, 1);
            this.length--;
        }

        getItemAt(i){
            return this.list[i];
        }

        getLength(){
            return this.length;
        }

        displaySelected(){
            var theString = "";
            for(var i in this.list){
                theString = theString + "<a>" + this.list[i].name + "</a>"; 
            }
            return theString;
        }
    } 

    //ingredients
    cheese = new Ingredient("cheese", "cheese", 0);
    //banana bread
    banana = new Ingredient("banana", "Banana", 0);
    butter = new Ingredient("butter", "Butter", 0);
    bakingSoda = new Ingredient("bakingSoda", "Baking Soda", 0);
    salt = new Ingredient("salt", "Salt", 0);
    sugar = new Ingredient("sugar", "Sugar", 0);
    eggs = new Ingredient("eggs", "Eggs", 0);
    vanilla = new Ingredient("vanilla", "Vanilla", 0);
    flour = new Ingredient("flour", "Flour", 0);

    //Pizza Dough
    yeast = new Ingredient("yeast", "Yeast", 0);
    garlicPowder = new Ingredient("garlicPowder", "Garlic Powder", 0);
    oliveOil = new Ingredient("oliveOil", "Olive Oil", 0);

    //Italian Caprese Pasta Salad
    grapeTomatoes = new Ingredient("grapeTomatoes", "Grape Tomatoes", 0);
    mozzarella = new Ingredient("mozzarella", "Mozzarella", 0);
    basilPesto = new Ingredient("basilPesto", "Basil Pesto", 0);
    oregano = new Ingredient("oregano", "Oregano", 0);
    pasta = new Ingredient("pasta", "Pasta", 0);
    spiralPasta = new Ingredient("spiralPasta", "Spiral Pasta", 0);
    gemelliPasta = new Ingredient("gemelliPasta", "Gamelli Pasta", 0);

    //vMomos
    ginger = new Ingredient("ginger","Ginger", 0);
    garlic = new Ingredient("garlic","Garlic", 0);
    vinegar = new Ingredient("vinegar","Vinegar", 0);
    soySauce = new Ingredient("soySauce","Soy Sauce", 0);
    blackPepper = new Ingredient("blackPepper","Black Pepper", 0);
    oil = new Ingredient("oil","Oil", 0);
    mushrooms = new Ingredient("mushrooms","Mushrooms", 0);
    onion = new Ingredient("onion","Onions", 0);

    //Pancakes
    milk = new Ingredient("milk","Milk", 0);
    bakingPowder = new Ingredient("bakingPowder","Baking Powder", 0);

    //Burger
    ketchup = new Ingredient("ketchup","Ketchup", 0);
    shrimp = new Ingredient("shrimp","Shrimps", 0);
    potato = new Ingredient("potato","Potato", 0);
    briocheBuns = new Ingredient("briocheBuns","Brioche Buns", 0);

    //Protein shake
    cocoaPowder = new Ingredient("cocoaPowder","Cocoa Powder", 0);
    chiaSeed = new Ingredient("chiaSeed","Chia Seed", 0);
    hempSeed = new Ingredient("hempSeed","Hemp Seed", 0);

    //French Toast
    cream = new Ingredient("cream","Cream", 0);
    onionPowder = new Ingredient("onionPowder","Onion Powder", 0);
    parsley = new Ingredient("parsley","Parsley", 0);
    paprika = new Ingredient("paprika","Paprika", 0);
    bread = new Ingredient("bread","Bread", 0);

    //jRice
    redPepper = new Ingredient("redPepper","Red Pepper", 0);
    tomato = new Ingredient("tomato","Tomato", 0);
    rice = new Ingredient("rice","Rice", 0);
    curryPowder = new Ingredient("curryPowder","Curry Powder", 0);
    bouillonPowder = new Ingredient("bouillonPowder","Bouillon Powder", 0);
    thyme = new Ingredient("thyme","Thyme", 0);
    greenPeas = new Ingredient("greenPeas","Green Peas", 0);

    breadcrumbs = new Ingredient("breadcrumbs","Bread Crumbs", 0);
    chickenTenderloins = new Ingredient("chickenTenderloins","Chicken Tenderloins", 0);

    //others
    cheddarCheese= new Ingredient("cheddarCheese","Cheddar Cheese", 0);
    cabbage= new Ingredient("cabbage","Cabbage", 0);
    bacon= new Ingredient("bacon","Bacon", 0);
    chickenBreast= new Ingredient("chickenBreast","Chicken Breast", 0);
    groundBeef= new Ingredient("groundBeef","Ground Beef", 0);
    groundTurkey= new Ingredient("groundTurkey","Ground Turkey", 0);
    hotDog= new Ingredient("hotDog","Hot Dog", 0);
    pepperoni= new Ingredient("pepperoni","Pepperoni", 0);
    ham= new Ingredient("ham","Ham", 0);
    lamb= new Ingredient("lamb","Lamb", 0);
    sausage= new Ingredient("sausage","Sausage", 0);
    salami= new Ingredient("salami","Salami", 0);
    steak= new Ingredient("steak","Steak", 0);
    ravioli= new Ingredient("ravioli","Raviolli", 0);
    barley= new Ingredient("barley","Barley", 0);
    brownRice= new Ingredient("brownRice","Brown Rice", 0);
    lasagnaNoodles= new Ingredient("lasagnaNoodles","Lasagna Noodles", 0);
    orzo= new Ingredient("orzo","Orzo", 0);
    whiteRice= new Ingredient("whiteRice","White Rice", 0);
    eggNoodles= new Ingredient("eggNoodles","Egg Noodles", 0);
    gnocchi= new Ingredient("gnocchi","Gnocchi", 0);
    spaghettiNoodles= new Ingredient("spaghettiNoodles","Spagetti Noodles", 0);
    wildRice= new Ingredient("wildRice","Wild Rice", 0);
    rotiniNoodles= new Ingredient("rotiniNoodles","Rotini Noodles", 0);
    bagels= new Ingredient("bagels","Bagels", 0);
    buns= new Ingredient("buns","Buns", 0);
    eggRollWraps= new Ingredient("eggRollWraps","Egg Roll Wraps", 0);
    pizzaCrust= new Ingredient("pizzaCrust","Pizza Crust", 0);
    wontonWrappers= new Ingredient("wontonWrappers","Wonton Wrappers", 0);
    muffins= new Ingredient("muffins","Muffins", 0);
    rolls= new Ingredient("rolls","Rolls", 0);
    ryeBread= new Ingredient("ryeBread","Rye Bread", 0);
    mint= new Ingredient("mint","Mint", 0);
    basil= new Ingredient("basil","Basil", 0);
    cajunSeasoning= new Ingredient("cajunSeasoning","Cajun Seasoning", 0);
    chives= new Ingredient("chives","Chives", 0);
    italianSeasoning= new Ingredient("italianSeasoning","Italian Seasoning", 0);
    nutmeg= new Ingredient("nutmeg","Nutmeg", 0);
    peppercorns= new Ingredient("peppercorns","Peppercorns", 0);
    chilliPowder= new Ingredient("chilliPowder","Chilli Powder", 0);
    cinnamon= new Ingredient("cinnamon","Cinnamon", 0);
    cumin= new Ingredient("cumin","Cumin", 0);
    dill= new Ingredient("dill","Dill", 0);
    meatSeasoning= new Ingredient("meatSeasoning","Meat Seasoning", 0);
    hotSauce= new Ingredient("hotSauce","Hot Sauce", 0);
    mustard= new Ingredient("mustard","Mustard", 0);
    mayo= new Ingredient("mayo","Mayo", 0);
    saladDressing= new Ingredient("saladDressing","Salad Dressing", 0);
    ranch= new Ingredient("ranch","Ranch", 0);
    vinaigrette= new Ingredient("vinaigrette","Vinaigrette", 0);

    //var ALL INGREDIENTS LIST
    allIngredients = new List();
    selectedIngredients = new List();
    allIngredients.add(cheese); //0
    allIngredients.add(banana); //1
    allIngredients.add(butter); //2
    allIngredients.add(bakingSoda); //3
    allIngredients.add(salt); //4
    allIngredients.add(sugar); //5
    allIngredients.add(eggs); //6
    allIngredients.add(vanilla); //7
    allIngredients.add(flour); //8
    //Pizza Dough
    allIngredients.add(yeast); //9
    allIngredients.add(garlicPowder); //10
    allIngredients.add(oliveOil); //11
    //Italian Caprese Pasta Salad
    allIngredients.add(grapeTomatoes); //12
    allIngredients.add(mozzarella); //13
    allIngredients.add(basilPesto); //14
    allIngredients.add(oregano); //15
    allIngredients.add(pasta); //16
    allIngredients.add(spiralPasta); //17
    allIngredients.add(gemelliPasta); //18
    //vMomos
    allIngredients.add(ginger); //19
    allIngredients.add(garlic); //20
    allIngredients.add(vinegar); //21
    allIngredients.add(soySauce); //22
    allIngredients.add(blackPepper); //23
    allIngredients.add(oil); //24
    allIngredients.add(mushrooms); //25
    allIngredients.add(onion); //26
    //Pancakes
    allIngredients.add(milk); //27
    allIngredients.add(bakingPowder); //28
    //Burger
    allIngredients.add(ketchup); //29
    allIngredients.add(shrimp); //30
    allIngredients.add(potato); //31
    allIngredients.add(briocheBuns); //32
    //Protein shake
    allIngredients.add(cocoaPowder); //33
    allIngredients.add(chiaSeed); //34
    allIngredients.add(hempSeed); //35
    //French Toast
    allIngredients.add(cream); //36
    allIngredients.add(onionPowder); //37
    allIngredients.add(parsley); //38
    allIngredients.add(paprika); //39
    allIngredients.add(bread); //40
    //jRice
    allIngredients.add(redPepper); //41
    allIngredients.add(tomato); //42
    allIngredients.add(rice); //43
    allIngredients.add(curryPowder); //44
    allIngredients.add(bouillonPowder); //45
    allIngredients.add(thyme); //46
    allIngredients.add(greenPeas); //47
    //crumbed Chicken
    allIngredients.add(breadcrumbs); //48
    allIngredients.add(chickenTenderloins); //49
    //other produce
    allIngredients.add(cheddarCheese); //50
    //other dairy
    allIngredients.add(cabbage); //51
    //other meat
    allIngredients.add(bacon); //52
    allIngredients.add(chickenBreast); //53
    allIngredients.add(groundBeef); //54
    allIngredients.add(groundTurkey); //55
    allIngredients.add(hotDog); //56
    allIngredients.add(pepperoni); //57
    allIngredients.add(ham); //58
    allIngredients.add(lamb); //59
    allIngredients.add(sausage); //60
    allIngredients.add(salami); //61
    allIngredients.add(steak); //62
    //other pasta/grain
    allIngredients.add(ravioli); //63
    allIngredients.add(barley); //64
    allIngredients.add(brownRice); //65
    allIngredients.add(lasagnaNoodles); //66
    allIngredients.add(orzo); //67
    allIngredients.add(whiteRice); //68
    allIngredients.add(eggNoodles); //69
    allIngredients.add(gnocchi); //70
    allIngredients.add(spaghettiNoodles); //71
    allIngredients.add(wildRice); //72
    allIngredients.add(rotiniNoodles); //73
    //other bread
    allIngredients.add(bagels); //74
    allIngredients.add(buns);  //75
    allIngredients.add(eggRollWraps); //76
    allIngredients.add(pizzaCrust); //77
    allIngredients.add(wontonWrappers); //78
    allIngredients.add(muffins); //79
    allIngredients.add(rolls); //80
    allIngredients.add(ryeBread); //81
    //other spices
    allIngredients.add(mint); //82
    allIngredients.add(basil); //83
    allIngredients.add(cajunSeasoning); //84
    allIngredients.add(chives); //85
    allIngredients.add(italianSeasoning); //86
    allIngredients.add(nutmeg); //87
    allIngredients.add(peppercorns); //88
    allIngredients.add(chilliPowder); //89
    allIngredients.add(cinnamon); //90
    allIngredients.add(cumin); //91
    allIngredients.add(dill); //92
    allIngredients.add(meatSeasoning); //93
    //other condiments
    allIngredients.add(hotSauce); //94
    allIngredients.add(mustard); //95
    allIngredients.add(mayo);  //96
    allIngredients.add(saladDressing); //97
    allIngredients.add(ranch); //98
    allIngredients.add(vinaigrette); //99
    
    sessionStorage.setItem("ingredients", JSON.stringify(allIngredients));
    sessionStorage.setItem("selectedIngredients", JSON.stringify(selectedIngredients));
}

function updateIngredients(){
    var selectedIngredients = JSON.parse(sessionStorage.getItem("selectedIngredients"));
    document.getElementById("theList").innerHTML = displaySelected(selectedIngredients);
    sessionStorage.setItem("selectedIngredients", JSON.stringify(selectedIngredients));
}

