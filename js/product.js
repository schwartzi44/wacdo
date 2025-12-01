// affichage des produits
function displayProducts(categoryTitle) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';
    
    const categoryProducts = products[categoryTitle] || [];
    
    if (categoryProducts.length === 0) {
        container.innerHTML = '<div class="col-12"><div class="empty-state"><i class="bi bi-inbox"></i><p>Aucun produit disponible dans cette catégorie</p></div></div>';
        return;
    }
    
    categoryProducts.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6 mb-4';
        
        const card = document.createElement('div');
        card.className = 'product-card';
        //card.onclick = () => addToOrder(product, categoryTitle);
        card.addEventListener("click",()=> clickProduit(product, categoryTitle));

        const img = document.createElement('img');
        
        img.src = product.image.startsWith('/') ? product.image.substring(1) : product.image;
        img.alt = product.nom;
        img.className = 'product-image';
        
        const info = document.createElement('div');
        info.className = 'product-info';
        
        const name = document.createElement('div');
        name.className = 'product-name';
        name.textContent = product.nom;
        
        const price = document.createElement('div');
        price.className = 'product-price';
        price.textContent = product.prix.toFixed(2) + '€';
        
        info.appendChild(name);
        info.appendChild(price);
        
        card.appendChild(img);
        card.appendChild(info);
        col.appendChild(card);
        container.appendChild(col);
    });
}

function clickProduit(product, category) { 
			localStorage.setItem('category',category);
			localStorage.setItem('nameProduct',product.nom);
			localStorage.setItem('prix',product.prix);
            localStorage.setItem('choixSauce', "");
			//si produit est un menu alors lancement première fenêtre modale pour option taille
			switch (category){
				case "menus": 
					localStorage.setItem('choixPatate', "Frites");
                    localStorage.setItem('choixboisson', "Coca Cola");
                    localStorage.setItem('choixMaxi', "Oui");
					document.getElementById('choixMaxiOui').setAttribute('class','col-4 ms-2 choix-item active float-md-start');
					document.getElementById('choixMaxiNon').setAttribute('class','col-4 ms-2 choix-item float-md-end');
					$ ( "#modalChoixMaxi" ) .modal ("show");
					break;
                case "boissons":
                    localStorage.setItem('choixTailleBoisson','50');
                    localStorage.setItem('nbBoisson','1');
                    document.getElementById('choixGrand').setAttribute('class','col-4 ms-2 choix-item-taille active float-md-start');
					document.getElementById('choixPetit').setAttribute('class','col-4 ms-2 choix-item-taille float-md-end');
					document.getElementById('imgChoixPetit').setAttribute('src',product.image);
                    document.getElementById('imgChoixGrand').setAttribute('src',product.image);
                    document.getElementById('nbBoisson').textContent = localStorage.getItem('nbBoisson');
                    $ ( "#modalChoixTailleBoisson" ) .modal ("show");
                    break;
                default:
                    localStorage.setItem("nbProduitAutre",1);
                    document.getElementById('nbProduitAutre').textContent = localStorage.getItem('nbProduitAutre');
                    document.getElementById('labelProduitAutre').textContent = product.nom;
                    document.getElementById('imgProduitAutre').setAttribute('src',product.image);
                     $ ( "#modalChoixProduitAutre" ) .modal ("show");
			}
			
		}