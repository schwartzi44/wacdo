 async function loadEvent(){
// gestion des évènement ment du scroller dans la caroussel des catégories
    let prevCategory = document.getElementById("prevCategory");
    prevCategory.addEventListener('click',scrollCategoriesMoins);
    let nextCategory = document.getElementById("nextCategory");
    nextCategory.addEventListener('click',scrollCategoriesPlus);

   //évènements pour la fenêtre modale pour le choix menu maxi "modalChoixMaxi"
    var choixMaxiOui = document.getElementById('choixMaxiOui');
    choixMaxiOui.addEventListener('click', changeChoixMaxiOui);
    var choixMaxiNon = document.getElementById('choixMaxiNon');
    choixMaxiNon.addEventListener('click', changeChoixMaxiNon);
    var btnSuivantPatate = document.getElementById('btnSuivantPatate');
    btnSuivantPatate.addEventListener('click',clickSuivantPatate);
   
   //évènements pour la fenêtre modale des choix de type patates "modalChoixPatate"
    var btnRetourMaxi = document.getElementById('btnRetourMaxi');
    btnRetourMaxi.addEventListener('click', btnRetourMaxi_click);
    var choixFrite = document.getElementById('choixFrite');
    choixFrite.addEventListener('click', changeChoixFrite);
    var choixPotatoes = document.getElementById('choixPotatoes');
    choixPotatoes.addEventListener('click', changeChoixPotatoes);
    var btnSuivantBoisson = document.getElementById('btnSuivantBoisson');
    btnSuivantBoisson.addEventListener('click',clickSuivantBoisson);

    //évènements pour la fenêtre modale des choix de boissons "modalChoixBoisson"
    var btnRetourPatate = document.getElementById('btnRetourPatate');
    btnRetourPatate.addEventListener('click', btnRetourPatate_click);
    let prevDrink = document.getElementById("prevDrink");
    prevDrink.addEventListener('click',scrollDrinksMoins);
    let nextDrink = document.getElementById("nextDrink");
    nextDrink.addEventListener('click',scrollDrinksPlus);
    var btnSuivantSauce = document.getElementById('btnSuivantSauce');
    btnSuivantSauce.addEventListener('click',clickSuivantSauce);

     //évènements pour la fenêtre modale des choix des sauces "modalChoixSauce"
    var btnRetourPatate = document.getElementById('btnRetourPatate');
    btnRetourBoisson.addEventListener('click', btnRetourBoisson_click);
    let prevSauce = document.getElementById("prevSauce");
    prevSauce.addEventListener('click',scrollSaucesMoins);
    let nextSauce = document.getElementById("nextSauce");
    nextSauce.addEventListener('click',scrollSaucesPlus);
    let btnAjoutCommande = document.getElementById("btnAjoutCommande");
    btnAjoutCommande.addEventListener('click',addToOrder)

    //évènements pour la fenêtre modale du choix de la taille des boissons "modalChoixTailleBoisson"
    document.getElementById('btnPlusBoisson').addEventListener('click',plusBoisson);
    document.getElementById('btnMoinsBoisson').addEventListener('click',moinsBoisson);
    document.getElementById('choixGrand').addEventListener('click',changeChoix50);
    document.getElementById('choixPetit').addEventListener('click',changeChoix30); 
    document.getElementById('btnAnnulerBoisson').addEventListener('click',btnAnnulerBoisson_click);
    document.getElementById('btnValiderTailleBoisson').addEventListener('click',addToOrder);

    //évènements pour la fenêtre modale de validation des autres produits "modalChoixProduitAutre"
    document.getElementById('btnPlusProduitAutre').addEventListener('click',plusProduitAutre);
    document.getElementById('btnMoinsProduitAutre').addEventListener('click', moinsProduitAutre);
    document.getElementById('btnAnnulerProduitAutre').addEventListener('click',btnAnnulerProduitAutre_click);
    document.getElementById('btnValiderProduitAutre').addEventListener('click',addToOrder);
 }

function btnRetourMaxi_click(){
    $ ( '#modalChoixPatate' ) .modal ('hide');
    $ ( '#modalChoixMaxi' ) .modal ('show');
}

function btnRetourPatate_click(){
    $ ( '#modalChoixBoisson' ) .modal ('hide'); 
    $ ( '#modalChoixPatate' ) .modal ('show');
}

function btnRetourBoisson_click(){
    $ ( '#modalChoixSauce' ) .modal ('hide'); 
    $ ( '#modalChoixBoisson' ) .modal ('show');
}

function btnAnnulerBoisson_click(){
    $ ( '#modalChoixTailleBoisson' ) .modal ('hide'); 
}

function btnAnnulerProduitAutre_click(){
    $ ( '#modalChoixProduitAutre' ) .modal ('hide'); 
}
