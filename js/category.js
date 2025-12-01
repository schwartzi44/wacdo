//afichage des catégories
        function displayCategories() {
            const container = document.getElementById('categoryContainer');
            if (!container) {
                return;
            }
            container.innerHTML = '';
            
            if (categories.length === 0) {
                return;
            }
            
            categories.forEach((category, index) => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = `category-item ${category.title === currentCategory ? 'active' : ''}`;
               /*  categoryDiv.onclick = () => selectCategory(category.title); */
				categoryDiv.addEventListener("click",()=> selectCategory(category.title));
                
                const img = document.createElement('img');
                // Remove leading slash to make path relative
                img.src = category.image.startsWith('/') ? category.image.substring(1) : category.image;
                img.alt = category.title;
                
                const label = document.createElement('div');
                label.className = 'category-label';
                label.textContent = category.title;
                
                categoryDiv.appendChild(img);
                categoryDiv.appendChild(label);
                container.appendChild(categoryDiv);
            });
			
        }

        // Select category
        function selectCategory(categoryTitle) {
            currentCategory = categoryTitle;
            displayCategories();
            displayProducts(categoryTitle);
            
            // liste des catégories pour afficher les titres (noms) et les descirptions respectives => à modifier par un fetch du fichier json à compléter
            const titles = {
                'menus': { title: 'Nos menus', desc: 'Un sandwich, une friture ou une salade et une boisson' },
                'burgers': { title: 'Nos burgers', desc: 'Découvrez nos délicieux burgers' },
                'boissons': { title: 'Nos boissons fraîches', desc: 'Une petite soif sucrée, légère, rafraîchissante' },
                'frites': { title: 'Nos frites', desc: 'Des frites croustillantes à souhait' },
                'encas': { title: 'Nos encas', desc: 'Des encas pour toutes les occasions' },
                'wraps': { title: 'Nos wraps', desc: 'Des wraps savoureux et équilibrés' },
                'salades': { title: 'Nos salades', desc: 'Des salades fraîches et gourmandes' },
                'desserts': { title: 'Nos desserts', desc: 'Terminez en beauté avec nos desserts' },
                'sauces': { title: 'Nos sauces', desc: 'Accompagnez vos plats avec nos sauces' }
            };
            
            const info = titles[categoryTitle] || { title: categoryTitle, desc: '' };
            document.getElementById('categoryTitle').textContent = info.title;
            document.getElementById('categoryDescription').textContent = info.desc;
        }

 // Scroll categories
function scrollCategories(direction) {
    const scrollContainer = document.getElementById('categoryScroll');
    const scrollAmount = 150;
    scrollContainer.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function scrollCategoriesPlus(direction) {
    const scrollContainer = document.getElementById('categoryScroll');
    const scrollAmount = 150;
    scrollContainer.scrollBy({
        left: 1 * scrollAmount,
        behavior: 'smooth'
    });
}

function scrollCategoriesMoins(direction) {
    const scrollContainer = document.getElementById('categoryScroll');
    const scrollAmount = 150;
    scrollContainer.scrollBy({
        left: -1 * scrollAmount,
        behavior: 'smooth'
    });
}
