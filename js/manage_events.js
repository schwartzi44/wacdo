 async function loadEvent(){
// gestion des évènement ment du scroller dans la caroussel des catégories
    document.getElementById("prevCategory").addEventListener('click',scrollCategoriesMoins);
    document.getElementById("nextCategory").addEventListener('click',scrollCategoriesPlus);

   //évènements pour la fenêtre modale pour le choix menu maxi "modalChoixMaxi"
    document.getElementById('choixMaxiOui').addEventListener('click', changeChoixMaxiOui);
    document.getElementById('choixMaxiNon').addEventListener('click', changeChoixMaxiNon);
    document.getElementById('btnSuivantPatate').addEventListener('click',clickSuivantPatate);
   
   //évènements pour la fenêtre modale des choix de type patates "modalChoixPatate"
    document.getElementById('btnRetourMaxi').addEventListener('click', btnRetourMaxi_click);
    document.getElementById('choixFrite').addEventListener('click', changeChoixFrite);
    document.getElementById('choixPotatoes').addEventListener('click', changeChoixPotatoes);
    document.getElementById('btnSuivantBoisson').addEventListener('click',clickSuivantBoisson);

    //évènements pour la fenêtre modale des choix de boissons "modalChoixBoisson"
    document.getElementById('btnRetourPatate').addEventListener('click', btnRetourPatate_click);
    document.getElementById("prevDrink").addEventListener('click',scrollDrinksMoins);
    document.getElementById("nextDrink").addEventListener('click',scrollDrinksPlus);
    document.getElementById('btnSuivantSauce').addEventListener('click',clickSuivantSauce);

     //évènements pour la fenêtre modale des choix des sauces "modalChoixSauce" 
    document.getElementById('btnRetourPatate').addEventListener('click', btnRetourBoisson_click);
    document.getElementById("prevSauce").addEventListener('click',scrollSaucesMoins);
    document.getElementById("nextSauce").addEventListener('click',scrollSaucesPlus);

    document.getElementById("btnAjoutCommande").addEventListener('click',addToOrder)

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

    //évènements pour la finalisation de la commande
    document.getElementById('btnAbandonOrder').addEventListener('click',clearOrder);
    document.getElementById('btnPayerOrder').addEventListener('click',payOrder);

    // Generate new order number
    document.getElementById('orderNumber').textContent = Math.floor(Math.random() * 100);
    document.getElementById('orderPlace').textContent = Math.floor(Math.random() * 1000);
    document.getElementById('labelCommande').textContent = localStorage.getItem('labelCommande');
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


function btnEnrNum_click(){
        location.href = 'fin_commande.html';
    }
     
