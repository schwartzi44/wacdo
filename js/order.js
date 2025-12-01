// affichage de la commande en cours
function displayOrder() {
    const container = document.getElementById('orderItems');

    if (order.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="bi bi-cart"></i><p>Votre panier est vide</p></div>';
        document.getElementById('orderTotal').textContent = '0,00€';
        return;
    }

    container.innerHTML = '';

    order.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';

        const header = document.createElement('div');
        header.className = 'order-item-header';

        const name = document.createElement('div');
        name.className = 'order-item-name';
        name.textContent = `${item.nameProduct}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'order-item-delete';
        deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
        deleteBtn.onclick = (e) => {
        e.stopPropagation();
        removeFromOrder(item.id);
    };

    header.appendChild(name);
    header.appendChild(deleteBtn);

    const details = document.createElement('ul');
    details.className = 'order-item-details';

    // ajout des détails d'un menu
    if (item.category === 'menus') {                   
        let li = document.createElement('li');
        li.textContent = item.patate;
        details.appendChild(li);
        li = document.createElement('li');
        li.textContent = item.drink;
        details.appendChild(li);
        if (item.sauce !== ""){  
            li = document.createElement('li');
            li.textContent = "Sauce : "+ item.sauce;
            details.appendChild(li);
        }
        
    } 

    orderItem.appendChild(header);
    if (details.children.length > 0) {
    orderItem.appendChild(details);
    }
    const prix = document.createElement('div');
    prix.className = 'order-item-prix';
    prix.textContent = "Prix : " + parseFloat(item.prix).toFixed(2).replace('.', ',') + '€';
    orderItem.appendChild(prix);
    container.appendChild(orderItem);
    
    });

    // Calcul du total de la commande
    const total = order.reduce((sum, item) => sum + parseFloat(item.prix), 0);
    document.getElementById('orderTotal').textContent = total.toFixed(2).replace('.', ',') + '€'; 
    /* document.getElementById('orderTotal').textContent = orderTotal.toFixed(2).replace('.', ',') + '€'; */
}

// ajout d'un produit dans une commande
function addToOrder() {
    switch (localStorage.getItem('category') ){
        case "menus":	
            let nomProduit = '1 ';
            if (localStorage.getItem('choixMaxi') === 'Oui'){
                nomProduit = 'Maxi ';
                let prix = parseFloat( localStorage.getItem('prix')) + 1;
                localStorage.setItem('prix',prix);
            }
            nomProduit += localStorage.getItem('nameProduct');
            order.push({               
            id: orderCounter++,
            nameProduct: nomProduit,
            category: localStorage.getItem('category'),
            patate: localStorage.getItem('choixPatate'),
            drink: localStorage.getItem('choixboisson'),
            prix: localStorage.getItem('prix'),
            sauce: localStorage.getItem('choixSauce')
            });
            break;
        case "boissons":
            let nomBoisson = localStorage.getItem('nbBoisson') + ' <' + localStorage.getItem('nameProduct') + '> ' + localStorage.getItem('choixTailleBoisson') + ' Cl';
            var prix;
            if (localStorage.getItem('choixTailleBoisson') === '50'){
                prix = (parseFloat( localStorage.getItem('prix')) + 0.5) * parseInt(localStorage.getItem("nbBoisson"));
                
            }else{
                prix = parseFloat( localStorage.getItem('prix')) * parseInt(localStorage.getItem("nbBoisson"));
            }
            localStorage.setItem('prix',prix);
            order.push({               
            id: orderCounter++,
            nameProduct: nomBoisson,
            category: localStorage.getItem('category'),
            prix: localStorage.getItem('prix'),
            });
            break;
        default:
            let nomProduitAutre = localStorage.getItem('nbProduitAutre') + ' <' + localStorage.getItem('nameProduct') + '>';
             prix = parseFloat( localStorage.getItem('prix')) * parseInt(localStorage.getItem("nbProduitAutre"));;
            localStorage.setItem('prix',prix);
            order.push({               
            id: orderCounter++,
            nameProduct: nomProduitAutre,
            category: localStorage.getItem('category'),
            prix: localStorage.getItem('prix'),
            });
            break;
    }
    $ ( "#modalChoixSauce" ) .modal ("hide");
    $ ( "#modalChoixTailleBoisson" ) .modal ("hide");
    $ ( "#modalChoixProduitAutre" ) .modal ("hide");
displayOrder();
}

// suppression d'un produit dans une commande
function removeFromOrder(orderId) {
order = order.filter(item => item.id !== orderId);

displayOrder();
}
