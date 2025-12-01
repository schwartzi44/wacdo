// Scroll drinks
function scrollDrinks(direction) {
    const scrollContainer = document.getElementById('drinkScroll');
    const scrollAmount = 150;
    scrollContainer.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function scrollDrinksPlus() {
    const scrollContainer = document.getElementById('drinkScroll');
    const scrollAmount = 150;
    scrollContainer.scrollBy({
        left: 1 * scrollAmount,
        behavior: 'smooth'
    });
}

function scrollDrinksMoins() {
    const scrollContainer = document.getElementById('drinkScroll');
    const scrollAmount = 150;
    scrollContainer.scrollBy({
        left: -1 * scrollAmount,
        behavior: 'smooth'
    });
}

function displayDrink(){
    const chooseDrink = localStorage.getItem('choixboisson');
    //alert (chooseDrink);
    const categoryProductDrinks = products['boissons'] || [];
    const container = document.getElementById('drinkContainer');
    if (!container) {
        return;
    }
    container.innerHTML = '';
    categoryProductDrinks.forEach(product => { 			
        const drinkDiv = document.createElement('div');
        drinkDiv.className = `category-item ${product.nom === chooseDrink ? 'active' : ''}`;
        drinkDiv.addEventListener("click",()=> selectDrink(product.nom));
        const img = document.createElement('img');
        img.src = product.image.startsWith('/') ? product.image.substring(1) : product.image;
        img.alt = product.nom;
        const label = document.createElement('div');
        label.className = 'category-label';
        label.textContent = product.nom;
        
        drinkDiv.appendChild(img);
        drinkDiv.appendChild(label);
        container.appendChild(drinkDiv);
            
    });

}

function selectDrink(nomDrink){
    localStorage.setItem('choixboisson', nomDrink);
    displayDrink();
}


function displayChoixBoisson(){
    if (localStorage.getItem('choixTailleBoisson') === '50'){
        document.getElementById('choixGrand').setAttribute('class','col-4 ms-2 choix-item active float-md-start');
        document.getElementById('choixPetit').setAttribute('class','col-4 ms-2 choix-item float-md-end');
    }else{
         document.getElementById('choixPetit').setAttribute('class','col-4 ms-2 choix-item active float-md-start');
        document.getElementById('choixCrand').setAttribute('class','col-4 ms-2 choix-item float-md-end');
    }
    document.getElementById('nbBoisson').textContent = localStorage.getItem('nbBoisson');
    $ ( "#modalChoixTailleBoisson" ) .modal ("show");
}