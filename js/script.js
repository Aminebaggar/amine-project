// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");
const menu = document.querySelector(".menu_container");
const menuItems = document.querySelectorAll('.nav_link');
const contentSections = document.querySelectorAll('.content-section');
const welcomeSection = document.getElementById('welcome');

// Function to toggle the lock state of the sidebar
const toggleLock = () => {
    sidebar.classList.toggle("locked");
    // If the sidebar is not locked
    if (!sidebar.classList.contains("locked")) {
        sidebar.classList.add("hoverable");
        sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
    } else {
        sidebar.classList.remove("hoverable");
        sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
    }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
    if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.add("close");
    }
};

// Function to show the sidebar when the mouse enters
const showSidebar = () => {
    if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.remove("close");
    }
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
    sidebar.classList.toggle("close");
};

// If the window width is less than 800px, close the sidebar and remove hoverability and lock
if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
}

// Adding event listeners to buttons and sidebar for the corresponding actions
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);

// Sidebar toggle
sidebarCloseBtn.addEventListener("click", () => sidebar.classList.toggle("close"));

// Lock sidebar
sidebarLockBtn.addEventListener("click", () => {
    sidebar.classList.toggle("locked");
    if (sidebar.classList.contains("locked")) {
        sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
    } else {
        sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
    }
});

// Food data
const foodData = {
    couscous: {
        name: "Couscous",
        description: "Couscous is a traditional North African dish of small steamed granules of rolled semolina flour, typically served with a stew spooned on top. It's considered the national dish of many Amazigh countries.",
        ingredients: [
            "Semolina flour",
            "Meat (lamb, chicken, or beef)",
            "Vegetables (carrots, zucchini, turnips)",
            "Chickpeas",
            "Onions",
            "Spices (turmeric, cumin, coriander)",
            "Olive oil"
        ],
        preparation: "The semolina is steamed multiple times in a special pot called a couscoussier. Meanwhile, meat and vegetables are slow-cooked with spices to create a flavorful stew. The couscous is then served with the stew poured over it."
    },
    tagine: {
        name: "Tagine",
        description: "Tagine is both the name of a cooking vessel and the slow-cooked Amazigh stew made in it. The conical shape of the lid helps return condensation to the pot, creating a self-basting cooking method.",
        ingredients: [
            "Meat (lamb, chicken, or beef)",
            "Vegetables (carrots, potatoes, onions)",
            "Preserved lemons",
            "Olives",
            "Spices (saffron, ginger, cumin)",
            "Fresh herbs",
            "Olive oil"
        ],
        preparation: "Ingredients are layered in the tagine with spices and a small amount of liquid. The dish is then slow-cooked over low heat, allowing the flavors to meld and the meat to become tender."
    },
    rfissa: {
        name: "Rfissa",
        description: "Rfissa is a traditional Amazigh dish made with shredded bread, lentils, and chicken. It's often served during special occasions and is known for its rich, comforting flavors.",
        ingredients: [
            "Shredded msemen or day-old bread",
            "Chicken",
            "Lentils",
            "Onions",
            "Fenugreek seeds",
            "Saffron",
            "Ras el hanout spice mix"
        ],
        preparation: "Chicken is slow-cooked with spices and lentils. The bread is torn into pieces and layered with the chicken and lentil mixture. The dish is garnished with fresh herbs and served hot."
    },
    harira: {
        name: "Harira",
        description: "Harira is a hearty traditional soup made with tomatoes, lentils, chickpeas, and tender pieces of meat. It's particularly popular during Ramadan but enjoyed year-round.",
        ingredients: [
            "Tomatoes",
            "Lentils",
            "Chickpeas",
            "Meat (lamb or beef)",
            "Celery",
            "Onions",
            "Fresh herbs (cilantro, parsley)",
            "Spices (turmeric, cinnamon, ginger)"
        ],
        preparation: "Meat is cooked with spices, then tomatoes, lentils, and chickpeas are added. The soup is simmered until thick and hearty. It's finished with fresh herbs and often served with dates and special sweets."
    },
    bissara: {
        name: "Bissara",
        description: "Bissara is a rich, creamy soup made from dried fava beans. This hearty dish is particularly popular in northern regions and is often served for breakfast with fresh bread.",
        ingredients: [
            "Dried fava beans",
            "Garlic",
            "Olive oil",
            "Cumin",
            "Paprika",
            "Salt and pepper",
            "Fresh bread for serving"
        ],
        preparation: "Fava beans are soaked overnight, then cooked until very tender. They're pureed with garlic and olive oil until smooth. The soup is served hot, drizzled with olive oil and sprinkled with cumin and paprika."
    },
    pastilla: {
        name: "Pastilla",
        description: "Pastilla is a sweet and savory pie made with layers of crispy warqa dough, filled with spiced meat (traditionally pigeon, now often chicken) and topped with powdered sugar and cinnamon.",
        ingredients: [
            "Warqa dough or phyllo pastry",
            "Chicken or pigeon meat",
            "Almonds",
            "Eggs",
            "Onions",
            "Spices (saffron, cinnamon, ginger)",
            "Powdered sugar",
            "Ground cinnamon"
        ],
        preparation: "Meat is cooked with spices and eggs to create a filling. Layers of dough are filled with the meat mixture and ground almonds. The pie is baked until golden, then dusted with powdered sugar and cinnamon in a decorative pattern."
    },
    bread: {
        name: "Traditional Bread",
        description: "Traditional Amazigh bread is a staple of North African cuisine. It's often homemade and comes in various forms, from flatbreads to round loaves, each with its own unique texture and flavor.",
        ingredients: [
            "Flour",
            "Yeast",
            "Salt",
            "Warm water",
            "Olive oil",
            "Semolina (for some varieties)"
        ],
        preparation: "The dough is made by mixing flour, yeast, salt, and water. After kneading and rising, it's shaped and can be baked in a traditional clay oven or modern oven. Some varieties are cooked on a stovetop griddle."
    }
};

// Food modal functionality
const foodModal = document.getElementById('foodModal');
const foodCards = document.querySelectorAll('.content-card');
const modalClose = document.querySelector('.close-modal');

foodCards.forEach(card => {
    card.addEventListener('click', () => {
        const foodType = card.getAttribute('data-food');
        const food = foodData[foodType];
        
        if (food) {
            // Update modal content
            modal.querySelector('.modal-header h2').textContent = food.name;
            modal.querySelector('.modal-image img').src = `images/${foodType}.jpg`;
            modal.querySelector('.modal-image img').alt = food.name;
            modal.querySelector('.description').textContent = food.description;
            
            // Clear and update ingredients
            const ingredientsList = modal.querySelector('.ingredients');
            ingredientsList.innerHTML = '';
            food.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });
            
            modal.querySelector('.preparation').textContent = food.preparation;
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
});

// Clothes data
const clothesData = {
    kaftan: {
        title: "Traditional Amazigh Kaftan",
        image: "images/kaftan.jpg",
        description: "The Amazigh kaftan is a symbol of elegance and cultural heritage, featuring intricate embroidery and unique design elements that tell stories of tribal identity and craftsmanship.",
        materials: [
            "Hand-woven silk or cotton",
            "Gold and silver thread embroidery",
            "Traditional buttons (Qfel)",
            "Natural dyes",
            "Handmade trims and braids",
            "High-quality fabric lining"
        ],
        significance: "The kaftan represents centuries of Amazigh textile artistry. Each region has its distinctive style of embroidery and color combinations. The patterns and motifs used in the embroidery often tell stories of tribal identity and social status. Traditionally worn during celebrations and special occasions, it remains a proud symbol of Amazigh heritage."
    },
    djellaba: {
        title: "Amazigh Djellaba",
        image: "images/djellaba.jpg",
        description: "The djellaba is a traditional loose-fitting outer robe with long sleeves and a hood (qob), perfectly adapted to the North African climate and Amazigh lifestyle.",
        materials: [
            "Wool for winter wear",
            "Lightweight cotton for summer",
            "Hand-woven fabric",
            "Traditional buttons and loops",
            "Decorative tassels",
            "Regional-specific embroidery"
        ],
        significance: "The djellaba exemplifies the practical wisdom of Amazigh clothing design. The hood provides protection from sun and sand, while the loose fit allows air circulation. Different styles and decorations indicate the wearer's region of origin and social status. It's a garment that combines functionality with cultural identity."
    },
    burnous: {
        title: "Traditional Burnous",
        image: "images/burnous.jpg",
        description: "The burnous is a majestic hooded cloak, traditionally worn by Amazigh men. It's a symbol of dignity and protection, made from pure wool and designed to provide warmth and mobility.",
        materials: [
            "Pure wool fabric",
            "Hand-spun yarn",
            "Natural undyed wool",
            "Traditional clasps",
            "Handmade tassels",
            "Woven decorative bands"
        ],
        significance: "The burnous is more than just a garment; it's a symbol of honor and leadership in Amazigh culture. Traditionally, the quality and decoration of a burnous indicated the wearer's social standing. It was often given as a gift of honor and passed down through generations as a family heirloom."
    },
    jewelry: {
        title: "Amazigh Traditional Jewelry",
        image: "images/jewelry.jpg",
        description: "Amazigh jewelry is renowned for its intricate designs and symbolic meanings, featuring geometric patterns and protective symbols that reflect the rich cultural heritage.",
        materials: [
            "Silver (primary metal)",
            "Coral and amber",
            "Enamel work",
            "Semi-precious stones",
            "Glass beads",
            "Traditional coins"
        ],
        significance: "Jewelry in Amazigh culture serves multiple purposes: it's a form of portable wealth, a marker of social status, and a protective talisman. Each piece tells a story through its design and materials. The techniques used to create these pieces have been passed down through generations of skilled artisans."
    },
    headwear: {
        title: "Traditional Headwear",
        image: "images/headwear.jpg",
        description: "Amazigh headwear varies by region and occasion, from elaborate bridal headdresses to daily head coverings, each with its own significance and style.",
        materials: [
            "Silk scarves",
            "Wool wraps",
            "Silver ornaments",
            "Decorative coins",
            "Colored tassels",
            "Embroidered fabrics"
        ],
        significance: "Headwear in Amazigh culture often indicates a person's marital status, region of origin, and social position. Bridal headdresses are particularly significant, often incorporating family heirlooms and symbolic elements. The way a headpiece is wrapped or worn can also indicate specific tribal affiliations.",
        timeghrit: {
            name: "Timeghrit",
            imageAlt: "Timeghrit Traditional Headpiece",
            description: "An exquisite silver headpiece worn by Amazigh women, particularly during weddings and special ceremonies. This crown-like ornament features cascading coins, coral beads, and intricate silver work that creates a melodious sound when moving.",
            material: "Materials: Silver, coral beads, and ancient coins",
            occasion: "Occasion: Weddings and major celebrations",
            significance: "Significance: Symbol of bride's status and family wealth",
            sound: "Special Feature: Creates musical sounds when walking"
        },
        takhlalit: {
            name: "Takhlalit",
            imageAlt: "Takhlalit Necklace",
            description: "Elaborate necklaces crafted from silver and amber beads. These stunning pieces often feature coral, amber, and silver coins, creating a distinctive sound when worn.",
            material: "Materials: Silver, amber, coral, and coins",
            design: "Design: Multiple strands with layered pendants",
            significance: "Significance: Protection and prosperity"
        },
        azenzar: {
            name: "Azenzar",
            imageAlt: "Azenzar Belt",
            description: "Traditional leather belts used to secure garments, often decorated with metalwork and geometric patterns. Essential for both practical use and aesthetic appeal.",
            material: "Material: Hand-tooled leather with metal accents",
            use: "Use: Secures traditional garments",
            design: "Design: Geometric patterns and symbols"
        },
        tasghin: {
            name: "Tasghin",
            imageAlt: "Tasghin Belt",
            description: "Decorative belts featuring intricate embroidery and beadwork. These belts are often worn during celebrations and special occasions, showcasing the wearer's status and artistic heritage.",
            material: "Materials: Embroidered fabric with beadwork",
            occasion: "Occasion: Festivals and ceremonies",
            craftsmanship: "Craftsmanship: Hand-embroidered patterns"
        },
        tabzimt: {
            name: "Tabzimt",
            imageAlt: "Tabzimt Silver Brooch",
            description: "A magnificent circular silver brooch that serves as both a clothing fastener and a statement piece. The Tabzimt is known for its intricate filigree work, featuring symbolic patterns and sometimes incorporating precious stones or coral.",
            material: "Materials: Sterling silver, enamel, and semi-precious stones",
            design: "Design: Circular shape with detailed filigree and geometric patterns",
            significance: "Significance: Symbol of protection and social status",
            craftsmanship: "Craftsmanship: Traditional silversmith techniques passed down through generations"
        }
    },
    accessories: {
        title: "Traditional Accessories",
        image: "images/accessories.jpg",
        description: "Amazigh accessories complete traditional outfits with both functional and decorative elements, from leather bags to ceremonial belts.",
        materials: [
            "Handcrafted leather",
            "Woven textiles",
            "Metal decorations",
            "Wooden elements",
            "Colorful embroidery",
            "Traditional beadwork"
        ],
        significance: "Accessories in Amazigh culture are not merely decorative but often serve practical purposes while displaying artistic excellence. Belts, bags, and other accessories often feature symbols and designs that represent protection, fertility, and tribal identity. Many pieces are created for specific life events or ceremonies.",
        tazerzirt: {
            name: "Tazerzirt",
            imageAlt: "Tazerzirt Fibula Necklace",
            description: "Traditional Amazigh fibula necklace, featuring large silver pendants and coral beads. This iconic piece is both a stunning jewelry item and a practical garment fastener, representing centuries of Amazigh craftsmanship.",
            material: "Materials: Pure silver, coral beads, and ancient coins",
            occasion: "Occasion: Weddings and major celebrations",
            significance: "Significance: Symbol of bride's status and family wealth",
            sound: "Special Feature: Creates musical sounds when walking"
        },
        takhlalit: {
            name: "Takhlalit",
            imageAlt: "Takhlalit Necklace",
            description: "Elaborate necklaces crafted from silver and amber beads. These stunning pieces often feature coral, amber, and silver coins, creating a distinctive sound when worn.",
            material: "Materials: Silver, amber, coral, and coins",
            design: "Design: Multiple strands with layered pendants",
            significance: "Significance: Protection and prosperity"
        },
        azenzar: {
            name: "Azenzar",
            imageAlt: "Azenzar Belt",
            description: "Traditional leather belts used to secure garments, often decorated with metalwork and geometric patterns. Essential for both practical use and aesthetic appeal.",
            material: "Material: Hand-tooled leather with metal accents",
            use: "Use: Secures traditional garments",
            design: "Design: Geometric patterns and symbols"
        },
        tasghin: {
            name: "Tasghin",
            imageAlt: "Tasghin Belt",
            description: "Decorative belts featuring intricate embroidery and beadwork. These belts are often worn during celebrations and special occasions, showcasing the wearer's status and artistic heritage.",
            material: "Materials: Embroidered fabric with beadwork",
            occasion: "Occasion: Festivals and ceremonies",
            craftsmanship: "Craftsmanship: Hand-embroidered patterns"
        },
        tabzimt: {
            name: "Tabzimt",
            imageAlt: "Tabzimt Silver Brooch",
            description: "A magnificent circular silver brooch that serves as both a clothing fastener and a statement piece. The Tabzimt is known for its intricate filigree work, featuring symbolic patterns and sometimes incorporating precious stones or coral.",
            material: "Materials: Sterling silver, enamel, and semi-precious stones",
            design: "Design: Circular shape with detailed filigree and geometric patterns",
            significance: "Significance: Symbol of protection and social status",
            craftsmanship: "Craftsmanship: Traditional silversmith techniques passed down through generations"
        }
    }
};

// Clothing and Accessories Modal Content
const itemDescriptions = {
    'djellaba': {
        title: 'Djellaba (ⴷⵊⴻⵍⵍⴰⴱⴰ)',
        description: `<p>The Djellaba is a traditional Amazigh loose-fitting unisex outer robe, embodying both practicality and cultural identity.</p>
        
        <h3>Features</h3>
        <ul class="feature-list">
            <li>Made from high-quality wool or cotton</li>
            <li>Distinctive pointed hood called "qob"</li>
            <li>Intricate embroidery patterns</li>
            <li>Regional color variations</li>
            <li>Adaptable for all seasons</li>
        </ul>
        
        <div class="significance-section">
            <h3>Cultural Significance</h3>
            <p>The Djellaba represents the perfect blend of functionality and cultural identity in Amazigh society. Its design provides protection from both sun and cold, while the embroidery patterns tell stories of regional identity and craftsmanship.</p>
        </div>`
    },
    'burnous': {
        title: 'Burnous (ⴰⴱⴻⵔⵏⵓⵙ)',
        description: `<p>The Burnous is a majestic hooded cloak that has been a symbol of dignity in Amazigh culture for centuries.</p>
        
        <h3>Features</h3>
        <ul class="feature-list">
            <li>Premium woolen material</li>
            <li>Spacious protective hood</li>
            <li>Elegant draped design</li>
            <li>Traditional white or cream color</li>
            <li>Decorative clasps and fastenings</li>
        </ul>
        
        <div class="significance-section">
            <h3>Cultural Significance</h3>
            <p>The Burnous is more than just a garment; it's a symbol of honor and prestige. Traditionally worn by community leaders and elders, it represents wisdom, respect, and social standing in Amazigh society.</p>
        </div>`
    },
    'caftan': {
        title: 'Caftan (ⵇⴰⴼⵟⴰⵏ)',
        description: `<p>The Caftan is an elegant dress that showcases the finest of Amazigh craftsmanship and artistic expression.</p>
        
        <h3>Features</h3>
        <ul class="feature-list">
            <li>Luxurious silk or brocade fabric</li>
            <li>Detailed hand embroidery</li>
            <li>Flowing silhouette</li>
            <li>Elegant wide sleeves</li>
            <li>Traditional belt or sash</li>
        </ul>
        
        <div class="significance-section">
            <h3>Cultural Significance</h3>
            <p>Each Caftan tells a unique story through its embroidery patterns and color choices. These elements often indicate the wearer's region of origin and social status, making it both a beautiful garment and a form of cultural expression.</p>
        </div>`
    },
    'haik': {
        title: 'Haik (ⵀⴰⵢⴽ)',
        description: `<p>The Haik is a versatile garment that exemplifies the adaptability and grace of Amazigh clothing.</p>
        
        <h3>Features</h3>
        <ul class="feature-list">
            <li>Light, breathable fabric</li>
            <li>Versatile wrapping style</li>
            <li>Natural wool or cotton</li>
            <li>Traditional white color</li>
            <li>Adjustable draping</li>
        </ul>
        
        <div class="significance-section">
            <h3>Cultural Significance</h3>
            <p>The Haik represents the harmony between modesty and elegance in Amazigh culture. Its adaptable nature allows it to serve both practical and ceremonial purposes while maintaining cultural identity.</p>
        </div>`
    },
    'fibula': {
        title: 'Fibula/Tazerzit (ⵜⴰⵣⴻⵔⵣⵉⵜ)',
        description: `<p>The Fibula is a masterpiece of Amazigh silverwork, combining beauty with functionality.</p>
        
        <h3>Features</h3>
        <ul class="feature-list">
            <li>Hand-crafted silver work</li>
            <li>Geometric patterns and symbols</li>
            <li>Coral or enamel inlays</li>
            <li>Paired design</li>
            <li>Secure fastening mechanism</li>
        </ul>
        
        <div class="significance-section">
            <h3>Cultural Significance</h3>
            <p>Fibulae are precious family heirlooms that carry stories across generations. Their designs often contain protective symbols and reflect the wealth and status of the family.</p>
        </div>`
    },
    'tagrust': {
        title: 'Tagrust (ⵜⴰⴳⵔⵓⵙⵜ)',
        description: `<p>The Tagrust is an elaborate headpiece that crowns the beauty of Amazigh women's traditional attire.</p>
        
        <h3>Features</h3>
        <ul class="feature-list">
            <li>Intricate silver work</li>
            <li>Decorative coins and chains</li>
            <li>Coral and bead embellishments</li>
            <li>Ceremonial design</li>
            <li>Adjustable fitting</li>
        </ul>
        
        <div class="significance-section">
            <h3>Cultural Significance</h3>
            <p>The Tagrust symbolizes feminine grace and family prosperity. Often part of a bride's trousseau, it represents the continuation of cultural heritage and family traditions.</p>
        </div>`
    },
    'timgharin': {
        title: 'Timgharin (ⵜⵉⵎⵖⴰⵔⵉⵏ)',
        description: `<p>The Timgharin necklace is a stunning example of Amazigh jewelry craftsmanship.</p>
        
        <h3>Features</h3>
        <ul class="feature-list">
            <li>Genuine coral beads</li>
            <li>Fine silver work</li>
            <li>Traditional patterns</li>
            <li>Multiple strand design</li>
            <li>Artisanal craftsmanship</li>
        </ul>
        
        <div class="significance-section">
            <h3>Cultural Significance</h3>
            <p>These necklaces are believed to bring protection and good fortune. They are often given as wedding gifts and passed down through generations as precious family heirlooms.</p>
        </div>`
    },
    'takhellalt': {
        title: 'Takhellalt (ⵜⴰⵅⴻⵍⵍⴰⵍⵜ)',
        description: `<p>The Takhellalt anklet combines visual beauty with musical charm.</p>
        
        <h3>Features</h3>
        <ul class="feature-list">
            <li>Pure silver construction</li>
            <li>Detailed engravings</li>
            <li>Hollow design for sound</li>
            <li>Secure clasp system</li>
            <li>Paired wearing style</li>
        </ul>
        
        <div class="significance-section">
            <h3>Cultural Significance</h3>
            <p>These musical anklets add rhythm to traditional dances and celebrations. Their jingling sound is believed to ward off negative energy while announcing the graceful presence of the wearer.</p>
        </div>`
    }
};

function openModal(itemId) {
    const modal = document.getElementById('itemModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const item = itemDescriptions[itemId];
    
    modalTitle.innerHTML = item.title;
    modalContent.innerHTML = item.description;
    modal.style.display = 'block';
    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('itemModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('itemModal');
    if (event.target == modal) {
        closeModal();
    }
}

// History data
const historyData = {
    ancient: {
        title: "Ancient Amazigh History",
        image: "images/ancient.jpg",
        overview: "The Amazigh people, also known as Berbers, are the indigenous inhabitants of North Africa, with a history dating back thousands of years.",
        events: [
            "Early settlements in North Africa (prehistoric times)",
            "Development of Tifinagh script",
            "Establishment of early kingdoms",
            "Trade relations with ancient civilizations",
            "Cultural exchanges with Phoenicians and Romans"
        ],
        impact: "The ancient period established the foundation of Amazigh culture, including their unique language, script, and social structures that continue to influence the culture today."
    },
    medieval: {
        title: "Medieval Amazigh Period",
        image: "images/medieval.jpg",
        overview: "The medieval period saw the rise of powerful Amazigh dynasties and the spread of their influence across North Africa and into Spain.",
        events: [
            "Rise of the Almoravid Dynasty",
            "Establishment of the Almohad Caliphate",
            "Cultural golden age",
            "Development of unique architectural styles",
            "Advancement in sciences and arts"
        ],
        impact: "This period marked the height of Amazigh political and cultural influence, leaving lasting impacts on architecture, science, and art across North Africa and beyond."
    },
    modern: {
        title: "Modern Amazigh Era",
        image: "images/modern.jpg",
        overview: "The modern era has seen a revival of Amazigh culture and identity, with growing recognition and celebration of their heritage.",
        events: [
            "Cultural renaissance movement",
            "Recognition of Amazigh language in education",
            "Establishment of cultural institutions",
            "Modern artistic expressions",
            "International recognition of heritage"
        ],
        impact: "Today's Amazigh culture is experiencing a renaissance, with renewed interest in preserving and celebrating traditional customs while adapting to modern life."
    }
};

// Modal handling
const modal = document.getElementById('foodModal');
const closeModal = document.querySelector('.close-modal');
const contentCards = document.querySelectorAll('.content-card');

contentCards.forEach(card => {
    card.addEventListener('click', () => {
        const foodType = card.dataset.food;
        const food = foodData[foodType];
        
        if (!food) return; // Skip if no data found
        
        // Populate modal content
        modal.querySelector('.modal-header h2').textContent = food.title;
        modal.querySelector('.modal-image img').src = food.image;
        modal.querySelector('.modal-image img').alt = food.title;
        modal.querySelector('.description').textContent = food.description;
        
        // Clear and populate ingredients
        const ingredientsList = modal.querySelector('.ingredients');
        ingredientsList.innerHTML = '';
        food.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });
        
        modal.querySelector('.preparation').textContent = food.preparation;

        // Show modal with animation
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Add animation class to modal content
        setTimeout(() => {
            modal.querySelector('.modal-content').classList.add('show');
        }, 10);
    });
});

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
    modal.querySelector('.modal-content').classList.remove('show');
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
        modal.querySelector('.modal-content').classList.remove('show');
    }
});

// Handle clothes modal
const clothesModal = document.getElementById('clothesModal');
const clothesCards = document.querySelectorAll('[data-clothes]');

clothesCards.forEach(card => {
    card.addEventListener('click', () => {
        const clothesType = card.dataset.clothes;
        const clothes = clothesData[clothesType];
        
        if (!clothes) return;
        
        // Populate modal content
        clothesModal.querySelector('.modal-header h2').textContent = clothes.title;
        clothesModal.querySelector('.modal-image img').src = clothes.image;
        clothesModal.querySelector('.modal-image img').alt = clothes.title;
        clothesModal.querySelector('.description').textContent = clothes.description;
        
        // Clear and populate materials
        const materialsList = clothesModal.querySelector('.materials');
        materialsList.innerHTML = '';
        clothes.materials.forEach(material => {
            const li = document.createElement('li');
            li.textContent = material;
            materialsList.appendChild(li);
        });
        
        clothesModal.querySelector('.significance').textContent = clothes.significance;
        
        // Show modal with animation
        clothesModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add animation class to modal content
        setTimeout(() => {
            clothesModal.querySelector('.modal-content').classList.add('show');
        }, 10);
    });
});

// Close clothes modal
clothesModal.querySelector('.close-modal').addEventListener('click', () => {
    clothesModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    clothesModal.querySelector('.modal-content').classList.remove('show');
});

clothesModal.addEventListener('click', (e) => {
    if (e.target === clothesModal) {
        clothesModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        clothesModal.querySelector('.modal-content').classList.remove('show');
    }
});

// Handle history modal
const historyModal = document.getElementById('historyModal');
const historyCards = document.querySelectorAll('[data-history]');

historyCards.forEach(card => {
    card.addEventListener('click', () => {
        const historyType = card.dataset.history;
        const history = historyData[historyType];
        
        // Populate modal content
        historyModal.querySelector('.modal-header h2').textContent = history.title;
        historyModal.querySelector('.modal-image img').src = history.image;
        historyModal.querySelector('.modal-image img').alt = history.title;
        historyModal.querySelector('.overview').textContent = history.overview;
        
        // Clear and populate events
        const eventsList = historyModal.querySelector('.events');
        eventsList.innerHTML = '';
        history.events.forEach(event => {
            const li = document.createElement('li');
            li.textContent = event;
            eventsList.appendChild(li);
        });
        
        historyModal.querySelector('.impact').textContent = history.impact;
        
        // Show modal with animation
        historyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modals
document.querySelectorAll('.close-modal').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Menu items click handling
const menuItems = document.querySelectorAll('.nav_link');
const contentSections = document.querySelectorAll('.content-section');

function showSection(sectionId) {
    // Hide all sections
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.style.animation = 'fadeIn 0.5s ease forwards';
    }
}

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all menu items
        menuItems.forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked item
        e.currentTarget.classList.add('active');

        // Get section ID from menu text
        const menuText = e.currentTarget.querySelector('span').textContent.toLowerCase().replace(/\s+/g, '-');
        const sectionId = `amazigh-${menuText}`;
        
        // Show the corresponding section
        showSection(sectionId);

        // Close sidebar on mobile
        if (window.innerWidth <= 800) {
            sidebar.classList.add("close");
        }
    });
});

// Show welcome section by default
document.addEventListener('DOMContentLoaded', () => {
    showSection('welcome');
});

// Food Modal Functionality
const foodModal = document.getElementById('foodModal');
const foodCards = document.querySelectorAll('[data-food]');

foodCards.forEach(card => {
    card.addEventListener('click', () => {
        const foodType = card.getAttribute('data-food');
        const foodInfo = getFoodInfo(foodType);
        if (foodInfo) {
            showFoodModal(foodInfo);
        }
    });
});

function showFoodModal(foodInfo) {
    const modal = document.getElementById('foodModal');
    if (!modal) return;

    // Update modal content
    modal.querySelector('.modal-header h2').textContent = foodInfo.name;
    modal.querySelector('.modal-image img').src = foodInfo.image;
    modal.querySelector('.modal-image img').alt = foodInfo.name;
    modal.querySelector('.description').textContent = foodInfo.description;
    
    // Update ingredients list
    const ingredientsList = modal.querySelector('.ingredients');
    ingredientsList.innerHTML = '';
    foodInfo.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    // Update preparation steps
    modal.querySelector('.preparation').textContent = foodInfo.preparation;

    // Show modal
    modal.style.display = 'block';
}

// Close modal when clicking the close button or outside the modal
document.querySelectorAll('.close-modal').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Food Information Database
function getFoodInfo(foodType) {
    const foodData = {
        couscous: {
            name: 'Couscous',
            image: 'images/couscous.jpg',
            description: 'A traditional North African dish of small steamed granules of rolled durum wheat semolina, typically served with a stew spooned on top.',
            ingredients: [
                'Couscous semolina',
                'Lamb or chicken',
                'Carrots',
                'Zucchini',
                'Chickpeas',
                'Onions',
                'Spices (turmeric, cumin, cinnamon)'
            ],
            preparation: 'The couscous is steamed multiple times until light and fluffy. Meanwhile, meat and vegetables cook in a spiced broth below. The dish is served with the meat and vegetables placed on top of the fluffy couscous, with the broth served separately.'
        },
        tagine: {
            name: 'Tagine',
            image: 'images/tagine.jpg',
            description: 'A slow-cooked savory stew named after the earthenware pot in which it is cooked.',
            ingredients: [
                'Meat (lamb, chicken, or beef)',
                'Vegetables',
                'Preserved lemons',
                'Olives',
                'Spices (saffron, ginger, cumin)',
                'Fresh herbs'
            ],
            preparation: 'Ingredients are layered in the tagine pot and slow-cooked over low heat, allowing the flavors to meld together while keeping the meat tender and juicy.'
        },
        rfissa: {
            name: 'Rfissa',
            image: 'images/rfissa.jpg',
            description: 'A traditional Moroccan dish made with shredded msemen or day-old bread, topped with chicken, lentils, and a fragrant herb sauce.',
            ingredients: [
                'Msemen or day-old bread',
                'Chicken',
                'Lentils',
                'Onions',
                'Fenugreek',
                'Ras el hanout spices'
            ],
            preparation: 'The bread is shredded and layered with tender chicken, lentils, and a sauce made with fenugreek, onions, and aromatic spices.'
        },
        harira: {
            name: 'Harira',
            image: 'images/harira.jpg',
            description: 'A traditional soup of tomatoes, lentils, chickpeas, and herbs. Often served during Ramadan to break the fast.',
            ingredients: [
                'Tomatoes',
                'Lentils',
                'Chickpeas',
                'Rice or vermicelli',
                'Onions',
                'Celery',
                'Fresh herbs',
                'Flour (for thickening)',
                'Spices (turmeric, cinnamon, ginger)'
            ],
            preparation: 'Lentils and chickpeas are cooked until tender. A rich tomato base is prepared with herbs and spices. The soup is thickened with flour, and rice or vermicelli is added at the end. Traditionally served with dates and special sweets.'
        },
        bissara: {
            name: 'Bissara',
            image: 'images/bissara.jpg',
            description: 'A hearty soup made primarily from dried fava beans, traditionally served for breakfast with olive oil and cumin.',
            ingredients: [
                'Dried fava beans',
                'Garlic',
                'Olive oil',
                'Cumin',
                'Paprika',
                'Red pepper',
                'Salt and pepper'
            ],
            preparation: 'Fava beans are soaked overnight, then cooked with garlic until very tender. The mixture is pureed until smooth, seasoned with cumin and olive oil. Served hot with a drizzle of olive oil, cumin, and paprika on top.'
        },
        pastilla: {
            name: 'Pastilla',
            image: 'images/pastilla.jpg',
            description: 'A sweet and savory pie made with layers of thin warqa pastry, filled with pigeon or chicken, almonds, and eggs, dusted with powdered sugar and cinnamon.',
            ingredients: [
                'Warqa pastry sheets',
                'Chicken or pigeon',
                'Almonds',
                'Eggs',
                'Onions',
                'Parsley',
                'Cinnamon',
                'Powdered sugar',
                'Saffron',
                'Butter'
            ],
            preparation: 'The meat is cooked with spices and eggs to create a filling. Layers of pastry are filled with the meat mixture, eggs, and almonds. The pie is baked until golden, then dusted with powdered sugar and cinnamon in a decorative pattern.'
        }
    };

    return foodData[foodType];
}

// Clothes Information Database
function getClothesInfo(clothesType) {
    const clothesData = {
        kaftan: {
            name: 'Traditional Kaftan',
            image: 'images/kaftan.jpg',
            description: 'The Amazigh kaftan is a traditional long robe characterized by its intricate embroidery and elegant design.',
            materials: [
                'High-quality silk or cotton',
                'Gold or silver thread embroidery',
                'Traditional buttons (Qbab)',
                'Handwoven trim (Sfifa)',
                'Natural dyes'
            ],
            significance: 'The kaftan represents centuries of Amazigh craftsmanship and artistry. Each region has its unique style of embroidery and color combinations, telling stories of local traditions and cultural identity.'
        },
        djellaba: {
            name: 'Djellaba',
            image: 'images/djellaba.jpg',
            description: 'A loose-fitting unisex outer robe with full sleeves and a distinctive hood called a qob.',
            materials: [
                'Wool for winter wear',
                'Light cotton for summer',
                'Traditional woven patterns',
                'Handmade buttons',
                'Natural fiber trim'
            ],
            significance: 'The djellaba is a symbol of modesty and practicality in Amazigh culture. The hood provides protection from the sun and sand, while the loose fit allows air circulation.'
        },
        burnous: {
            name: 'Burnous',
            image: 'images/burnous.jpg',
            description: 'A traditional hooded cloak made from wool, worn by men for ceremonial occasions and protection from cold weather.',
            materials: [
                'Pure wool',
                'Hand-spun yarn',
                'Natural undyed wool',
                'Traditional clasps',
                'Decorative tassels',
                'Woven decorative bands'
            ],
            significance: 'The burnous is a symbol of dignity and status in Amazigh society. It is often passed down through generations and worn during important ceremonies and celebrations.'
        },
        jewelry: {
            name: 'Traditional Jewelry',
            image: 'images/jewelry.jpg',
            description: 'Amazigh jewelry is known for its bold designs, incorporating silver, coral, amber, and enamel work.',
            materials: [
                'Silver',
                'Coral',
                'Amber',
                'Enamel',
                'Semi-precious stones'
            ],
            significance: 'Jewelry in Amazigh culture serves multiple purposes: it's a form of portable wealth, a marker of social status, and a protective talisman. Each piece tells a story through its design and materials. The techniques used to create these pieces have been passed down through generations of skilled artisans.'
        },
        headwear: {
            name: 'Traditional Headwear',
            image: 'images/headwear.jpg',
            description: 'Various forms of traditional head coverings, including scarves, turbans, and decorative headpieces.',
            materials: [
                'Silk scarves',
                'Cotton wraps',
                'Silver ornaments',
                'Decorative pins',
                'Embroidered fabric'
            ],
            significance: 'Headwear in Amazigh culture often indicates a person's marital status, region of origin, and special occasions. Each style of wrapping or wearing has cultural significance.'
        },
        accessories: {
            name: 'Traditional Accessories',
            image: 'images/accessories.jpg',
            description: 'A range of traditional accessories including belts, bags, and decorative items that complement Amazigh clothing.',
            materials: [
                'Leather work',
                'Metalwork',
                'Woven textiles',
                'Beadwork',
                'Embroidery'
            ],
            significance: 'Accessories are integral to Amazigh dress, each piece telling a story of craftsmanship and cultural heritage. They often feature symbols and motifs that have been passed down through generations.',
            tazerzirt: {
                name: 'Tazerzirt',
                imageAlt: 'Tazerzirt Fibula Necklace',
                description: 'Traditional Amazigh fibula necklace, featuring large silver pendants and coral beads. This iconic piece is both a stunning jewelry item and a practical garment fastener, representing centuries of Amazigh craftsmanship.',
                material: 'Material: Pure silver with intricate engravings',
                occasion: 'Occasion: Weddings, festivals, and special ceremonies',
                significance: 'Cultural significance: Symbol of feminine beauty and tribal identity',
                use: 'Use: Both decorative and functional for securing traditional garments'
            },
            takhlalit: {
                name: 'Takhlalit',
                imageAlt: 'Takhlalit Necklace',
                description: 'Elaborate necklaces crafted from silver and amber beads. These stunning pieces often feature coral, amber, and silver coins, creating a distinctive sound when worn.',
                material: 'Materials: Silver, amber, coral, and coins',
                design: 'Design: Multiple strands with layered pendants',
                significance: 'Significance: Protection and prosperity'
            },
            azenzar: {
                name: 'Azenzar',
                imageAlt: 'Azenzar Belt',
                description: 'Traditional leather belts used to secure garments, often decorated with metalwork and geometric patterns. Essential for both practical use and aesthetic appeal.',
                material: 'Material: Hand-tooled leather with metal accents',
                use: 'Use: Secures traditional garments',
                design: 'Design: Geometric patterns and symbols'
            },
            tasghin: {
                name: 'Tasghin',
                imageAlt: 'Tasghin Belt',
                description: 'Decorative belts featuring intricate embroidery and beadwork. These belts are often worn during celebrations and special occasions, showcasing the wearer's status and artistic heritage.',
                material: 'Materials: Embroidered fabric with beadwork',
                occasion: 'Occasion: Festivals and ceremonies',
                craftsmanship: 'Craftsmanship: Hand-embroidered patterns'
            },
            tabzimt: {
                name: 'Tabzimt',
                imageAlt: 'Tabzimt Silver Brooch',
                description: 'A magnificent circular silver brooch that serves as both a clothing fastener and a statement piece. The Tabzimt is known for its intricate filigree work, featuring symbolic patterns and sometimes incorporating precious stones or coral.',
                material: 'Materials: Sterling silver, enamel, and semi-precious stones',
                design: 'Design: Circular shape with detailed filigree and geometric patterns',
                significance: 'Significance: Symbol of protection and social status',
                craftsmanship: 'Craftsmanship: Traditional silversmith techniques passed down through generations'
            }
        }
    };

    return clothesData[clothesType];
}

// Clothes Modal Functionality
const clothesCards = document.querySelectorAll('[data-clothes]');

clothesCards.forEach(card => {
    card.addEventListener('click', () => {
        const clothesType = card.getAttribute('data-clothes');
        const clothesInfo = getClothesInfo(clothesType);
        if (clothesInfo) {
            showClothesModal(clothesInfo);
        }
    });
});

function showClothesModal(clothesInfo) {
    const modal = document.getElementById('clothesModal');
    if (!modal) return;

    // Update modal content
    modal.querySelector('.modal-header h2').textContent = clothesInfo.name;
    modal.querySelector('.modal-image img').src = clothesInfo.image;
    modal.querySelector('.modal-image img').alt = clothesInfo.name;
    modal.querySelector('.description').textContent = clothesInfo.description;
    
    // Update materials list
    const materialsList = modal.querySelector('.materials');
    materialsList.innerHTML = '';
    clothesInfo.materials.forEach(material => {
        const li = document.createElement('li');
        li.textContent = material;
        materialsList.appendChild(li);
    });
    
    // Update significance
    modal.querySelector('.significance').textContent = clothesInfo.significance;

    // Show modal
    modal.style.display = 'block';
}

// Food modal functionality
const foodModal = document.getElementById("foodModal");
const foodCards = document.querySelectorAll("[data-food]");
const closeModal = document.querySelector(".close-modal");

// Food database
const foodData = {
    couscous: {
        title: "Couscous",
        description: "A traditional North African dish of steamed semolina topped with meat and vegetables.",
        ingredients: [
            "Semolina",
            "Lamb or chicken",
            "Carrots",
            "Zucchini",
            "Chickpeas",
            "Onions",
            "Spices (turmeric, cumin, cinnamon)"
        ],
        preparation: "The semolina is steamed multiple times in a couscoussier while the meat and vegetables cook in a spiced broth below. The dish is served with the meat and vegetables placed on top of the fluffy couscous, with the broth served separately."
    },
    tagine: {
        title: "Tagine",
        description: "A slow-cooked savory stew named after the earthenware pot in which it is cooked.",
        ingredients: [
            "Meat (lamb, chicken, or beef)",
            "Vegetables",
            "Preserved lemons",
            "Olives",
            "Spices (saffron, ginger, cumin)",
            "Fresh herbs"
        ],
        preparation: "Ingredients are layered in the tagine pot and slow-cooked over low heat, allowing the flavors to meld together while keeping the meat tender and juicy."
    },
    rfissa: {
        title: "Rfissa",
        description: "A traditional Moroccan dish made with shredded msemen or day-old bread, topped with chicken, lentils, and a fragrant herb sauce.",
        ingredients: [
            "Msemen or day-old bread",
            "Chicken",
            "Lentils",
            "Onions",
            "Fenugreek",
            "Ras el hanout spices"
        ],
        preparation: "The bread is shredded and layered with tender chicken, lentils, and a sauce made with fenugreek, onions, and aromatic spices."
    }
    // Add more food items as needed
};

// Open modal when clicking on a food card
foodCards?.forEach(card => {
    card.addEventListener("click", () => {
        const food = card.dataset.food;
        const data = foodData[food];
        
        if (data) {
            // Update modal content
            const modalTitle = foodModal.querySelector(".modal-header h2");
            const modalImage = foodModal.querySelector(".modal-image img");
            const modalDescription = foodModal.querySelector(".description");
            const modalIngredients = foodModal.querySelector(".ingredients");
            const modalPreparation = foodModal.querySelector(".preparation");

            modalTitle.textContent = data.title;
            modalImage.src = `images/${food}.jpg`;
            modalImage.alt = data.title;
            modalDescription.textContent = data.description;
            
            // Clear and populate ingredients
            modalIngredients.innerHTML = "";
            data.ingredients.forEach(ingredient => {
                const li = document.createElement("li");
                li.textContent = ingredient;
                modalIngredients.appendChild(li);
            });

            modalPreparation.textContent = data.preparation;

            // Show modal with animation
            foodModal.style.display = "block";
            setTimeout(() => foodModal.classList.add("show"), 10);
        }
    });
});

// Close modal
closeModal?.addEventListener("click", () => {
    foodModal.classList.remove("show");
    setTimeout(() => foodModal.style.display = "none", 300);
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === foodModal) {
        foodModal.classList.remove("show");
        setTimeout(() => foodModal.style.display = "none", 300);
    }
});

// Personnel data
const personnelData = {
    en: {
        menu: {
            profile: "Profile",
            home: "Home",
            story: "Story",
            wars: "Wars",
            famousPersonnel: "Famous Personnel",
            clothes: "Clothes"
        },
        warsType: {
            title: "Famous Amazigh Personnel",
            didahammu: {
                name: "Dida Hammu",
                period: "1850 - 1918",
                description: "Influential leader of the Zemmour confederation who resisted French colonization in central Morocco.",
                imageAlt: "Portrait of Dida Hammu"
            },
            mohaousaid: {
                name: "Moha ou Said",
                period: "1851 - 1924",
                description: "Legendary resistance leader from the High Atlas.",
                imageAlt: "Portrait of Moha ou Said"
            },
            sidiameziane: {
                name: "Sidi Mohamed Ameziane",
                period: "1859 - 1912",
                description: "Rif leader who organized resistance against Spanish colonization.",
                imageAlt: "Portrait of Sidi Mohamed Ameziane"
            },
            assououbasslam: {
                name: "Assou Oubasslam",
                period: "1890 - 1960",
                description: "Notable resistance leader from the Anti-Atlas region.",
                imageAlt: "Portrait of Assou Oubasslam"
            },
            zaidouhmad: {
                name: "Zaid Ou Hmad",
                period: "1863 - 1921",
                description: "Influential leader from the Middle Atlas.",
                imageAlt: "Portrait of Zaid Ou Hmad"
            }
        }
    },
    fr: {
        menu: {
            profile: "Profil",
            home: "Accueil",
            story: "Histoire",
            wars: "Guerres",
            famousPersonnel: "Personnages Célèbres",
            clothes: "Vêtements"
        },
        warsType: {
            title: "Personnages Amazighs Célèbres",
            didahammu: {
                name: "Dida Hammu",
                period: "1850 - 1918",
                description: "Leader influent de la confédération Zemmour qui a résisté à la colonisation française au Maroc central.",
                imageAlt: "Portrait de Dida Hammu"
            },
            mohaousaid: {
                name: "Moha ou Said",
                period: "1851 - 1924",
                description: "Leader légendaire de la résistance du Haut Atlas.",
                imageAlt: "Portrait de Moha ou Said"
            },
            sidiameziane: {
                name: "Sidi Mohamed Ameziane",
                period: "1859 - 1912",
                description: "Chef rifain qui a organisé la résistance contre la colonisation espagnole.",
                imageAlt: "Portrait de Sidi Mohamed Ameziane"
            },
            assououbasslam: {
                name: "Assou Oubasslam",
                period: "1890 - 1960",
                description: "Leader notable de la résistance de la région de l'Anti-Atlas.",
                imageAlt: "Portrait d'Assou Oubasslam"
            },
            zaidouhmad: {
                name: "Zaid Ou Hmad",
                period: "1863 - 1921",
                description: "Leader influent du Moyen Atlas.",
                imageAlt: "Portrait de Zaid Ou Hmad"
            }
        }
    }
};

// Language Switching Functionality
const languageButtons = document.querySelectorAll('.language-menu-item');
const contentSections = document.querySelectorAll('.content-section');
let currentLanguage = 'en';

function updateLanguageButton() {
    const languageButton = document.querySelector('.language-button span');
    languageButton.textContent = translations[currentLanguage].language;
}

function updateActiveLanguage() {
    languageButtons.forEach(button => {
        if (button.dataset.lang === currentLanguage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function translatePage(lang) {
    if (lang === currentLanguage) return;

    // Add transition class
    contentSections.forEach(section => {
        section.classList.add('changing-language');
    });

    setTimeout(() => {
        // Update HTML dir attribute for RTL languages
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const keys = element.dataset.translate.split('.');
            let translation = translations[lang];
            
            // Navigate through nested translations object
            for (const key of keys) {
                if (translation && translation[key]) {
                    translation = translation[key];
                } else {
                    console.warn(`Translation missing for key: ${keys.join('.')} in language: ${lang}`);
                    return;
                }
            }
            
            element.textContent = translation;
        });

        currentLanguage = lang;
        updateLanguageButton();
        updateActiveLanguage();

        // Store language preference
        localStorage.setItem('preferredLanguage', lang);

        // Remove transition class
        setTimeout(() => {
            contentSections.forEach(section => {
                section.classList.remove('changing-language');
            });
        }, 50);
    }, 300);
}

// Initialize language from localStorage or browser preference
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const browserLanguage = navigator.language.startsWith('ar') ? 'ar' : 'en';
    const initialLanguage = savedLanguage || browserLanguage;
    
    translatePage(initialLanguage);
}

// Event Listeners for language switching
languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        translatePage(button.dataset.lang);
    });
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', initializeLanguage);