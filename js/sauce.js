// Scroll Sauces
function scrollSaucesPlus() {
    const scrollContainer = document.getElementById('sauceScroll');
    const scrollAmount = 150;
    scrollContainer.scrollBy({
        left: 1 * scrollAmount,
        behavior: 'smooth'
    });
}

function scrollSaucesMoins() {
    const scrollContainer = document.getElementById('sauceScroll');
    const scrollAmount = 150;
    scrollContainer.scrollBy({
        left: -1 * scrollAmount,
        behavior: 'smooth'
    });
}

function displaySauce(){
    const chooseSauce = localStorage.getItem('choixSauce');
    const categoryProductSauces = products['sauces'] || [];
    const container = document.getElementById('sauceContainer');
    if (!container) {
        return;
    }
    container.innerHTML = '';
    categoryProductSauces.forEach(product => { 			
        const sauceDiv = document.createElement('div');
        sauceDiv.className = `category-item ${product.nom === chooseSauce ? 'active' : ''}`;
        sauceDiv.addEventListener("click",()=> selectSauce(product.nom));
        const img = document.createElement('img');
        img.src = product.image.startsWith('/') ? product.image.substring(1) : product.image;
        img.alt = product.nom;
        const label = document.createElement('div');
        label.className = 'category-label';
        label.textContent = product.nom;
        
        sauceDiv.appendChild(img);
        sauceDiv.appendChild(label);
        container.appendChild(sauceDiv);
            
    });

}

function selectSauce(nomSauce){
    localStorage.setItem('choixSauce', nomSauce);
    displaySauce();
}