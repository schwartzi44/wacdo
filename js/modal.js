// lancement de la fenêtre modale pour le choix du type dez patates
function clickSuivantPatate(product, category) {
        displayChoixPatate(localStorage.getItem("choixPatate"));
        $ ( "#modalChoixMaxi" ) .modal ("hide");
        $ ( "#modalChoixPatate" ) .modal ("show");
    }

function clickSuivantBoisson(product, category){
    $ ( "#modalChoixPatate" ) .modal ("hide");
    $ ( "#modalChoixBoisson" ) .modal ("show");
    displayDrink();
}

function clickSuivantSauce(product, category){
    $ ( "#modalChoixBoisson") .modal ("hide");
    $ ( "#modalChoixSauce" ) .modal ("show");
    displaySauce();
}

// alternance des choix pour menu maxi ou pas dans la fenêtre modale
function changeChoixMaxiOui(){
    document.getElementById('choixMaxiOui').setAttribute('class','col-4 ms-2 choix-item active float-md-start');
    document.getElementById('choixMaxiNon').setAttribute('class','col-4 ms-2 choix-item float-md-end');
    localStorage.setItem('choixMaxi', "Oui");
}
function changeChoixMaxiNon(){
    document.getElementById('choixMaxiOui').setAttribute('class','col-4 ms-2 choix-item float-md-end');
    document.getElementById('choixMaxiNon').setAttribute('class','col-4 ms-2 choix-item active float-md-start');
    localStorage.setItem('choixMaxi', "Non");  
}

function changeChoix50(){
     document.getElementById('choixGrand').setAttribute('class','col-4 ms-2 choix-item-taille active float-md-start');
     document.getElementById('choixPetit').setAttribute('class','col-4 ms-2 choix-item-taille float-md-end');
     localStorage.setItem('choixTailleBoisson','50');
}
function changeChoix30(){
     document.getElementById('choixPetit').setAttribute('class','col-4 ms-2 choix-item-taille active float-md-start');
     document.getElementById('choixGrand').setAttribute('class','col-4 ms-2 choix-item-taille float-md-end');
     localStorage.setItem('choixTailleBoisson','30');
}


// alternance des choix pour le patates
function displayChoixPatate(choix){
    if (choix === 'Potatoes'){
        document.getElementById('choixFrite').setAttribute('class','col-4 ms-2 choix-item float-md-end');
        document.getElementById('choixPotatoes').setAttribute('class','col-4 ms-2 choix-item active float-md-start');
        localStorage.setItem('choixPatate', 'Potatoes');
    }
    if (choix === 'Frites'){
        document.getElementById('choixFrite').setAttribute('class','col-4 ms-2 choix-item active float-md-start');
        document.getElementById('choixPotatoes').setAttribute('class','col-4 ms-2 choix-item float-md-end');
        localStorage.setItem('choixPatate', "Frites");
    }
}

function changeChoixFrite(){
    document.getElementById('choixFrite').setAttribute('class','col-4 ms-2 choix-item active float-md-start');
    document.getElementById('choixPotatoes').setAttribute('class','col-4 ms-2 choix-item float-md-end');
    localStorage.setItem('choixPatate', "Frites");
}

function changeChoixPotatoes(){
   document.getElementById('choixFrite').setAttribute('class','col-4 ms-2 choix-item float-md-end');
    document.getElementById('choixPotatoes').setAttribute('class','col-4 ms-2 choix-item active float-md-start');
    localStorage.setItem('choixPatate', 'Potatoes');
}

function plusBoisson(){
    // ajout du nb de boissons - maximum 5
    if (localStorage.getItem('nbBoisson') < 5){
        let nbBoisson = parseInt(localStorage.getItem('nbBoisson')) + 1
        localStorage.setItem('nbBoisson',nbBoisson);
       document.getElementById('nbBoisson').textContent = localStorage.getItem('nbBoisson');
    }
}

function moinsBoisson(){
    // diminution du nb de boissons minimum 1
    if (localStorage.getItem('nbBoisson') > 1){
        let nbBoisson = parseInt(localStorage.getItem('nbBoisson')) - 1
        localStorage.setItem('nbBoisson',nbBoisson);
       document.getElementById('nbBoisson').textContent = localStorage.getItem('nbBoisson');
    }
}

function plusProduitAutre(){
    // ajout du nb de produits - maximum 5
    if (localStorage.getItem('nbProduitAutre') < 5){
        let nbProduitAutre = parseInt(localStorage.getItem('nbProduitAutre')) + 1
        localStorage.setItem('nbProduitAutre',nbProduitAutre);
       document.getElementById('nbProduitAutre').textContent = localStorage.getItem('nbProduitAutre');
    }
}

function moinsProduitAutre(){
    // ajout du nb de produits - maximum 5
    if (localStorage.getItem('nbProduitAutre') > 1){
        let nbProduitAutre = parseInt(localStorage.getItem('nbProduitAutre')) - 1
        localStorage.setItem('nbProduitAutre',nbProduitAutre);
       document.getElementById('nbProduitAutre').textContent = localStorage.getItem('nbProduitAutre');
    }
}

