// All Amazigh characters data in one place
const charactersData = [
    {
        id: 'char1',
        name: 'Ibn Battuta',
        subtitle: 'The Greatest Traveler of the Medieval World',
        description: 'Moroccan scholar who traveled over 75,000 miles across Africa, Asia, and Europe',
        image: 'ibn-battuta.jpg',
        modalDescription: 'Ibn Battuta was a Moroccan scholar and explorer who traveled more extensively than any other medieval figure. His journeys, lasting almost 30 years, covered nearly the entire Islamic world and beyond.',
        timeline: [
            'Born in Tangier, Morocco (1304)',
            'Began his travels at age 21 (1325)',
            'Visited over 40 modern countries',
            'Wrote "Rihla" documenting his travels',
            'Died in Morocco (1368-1369)'
        ]
    },
    {
        id: 'char2',
        name: 'Abbas ibn Firnas',
        subtitle: 'Pioneer of Aviation',
        description: 'First person to make a scientific attempt at flying',
        image: 'ibn-firnas.jpg',
        modalDescription: 'Abbas ibn Firnas was a polymath: an inventor, physician, chemist, engineer, and poet. He is most famous for being the first person to make a scientific attempt at flying using wings built from silk and wood.',
        timeline: [
            'Born in Ronda (810)',
            'Invented water clock and glass lens making',
            'First flight attempt (875)',
            'Developed flying machine with wings',
            'Died in Córdoba (887)'
        ]
    },
    {
        id: 'char3',
        name: 'Ibn Khaldun',
        subtitle: 'Father of Sociology and Modern Historiography',
        description: 'Revolutionary historian and social scientist',
        image: 'ibn-khaldun.jpg',
        modalDescription: 'Ibn Khaldun revolutionized the fields of history, sociology, and economics. His masterpiece, the Muqaddimah, introduced scientific methodology to the social sciences and laid the groundwork for several fields of study.',
        timeline: [
            'Born in Tunis (1332)',
            'Wrote the Muqaddimah (1377)',
            'Served as Chief Judge in Cairo',
            'Developed theories of social cohesion',
            'Died in Cairo (1406)'
        ]
    },
    {
        id: 'char4',
        name: 'Tariq ibn Ziyad',
        subtitle: 'Legendary Military Commander',
        description: 'Led the Islamic conquest of Visigothic Hispania',
        image: 'tariq.jpg',
        modalDescription: 'Tariq ibn Ziyad was a Amazigh military commander who led the Islamic conquest of Visigothic Hispania. The Rock of Gibraltar is named after him (Jabal Tariq - Mountain of Tariq).',
        timeline: [
            'Appointed governor of Tangier',
            'Crossed Gibraltar (711)',
            'Victory at Battle of Guadalete',
            'Conquered Toledo',
            'Named Gibraltar after him'
        ]
    },
    {
        id: 'char5',
        name: 'Queen Dihya',
        subtitle: 'The Amazigh Queen',
        description: 'Led resistance against Arab expansion in North Africa',
        image: 'dihya.jpg',
        modalDescription: 'Queen Dihya, also known as Kahina, was a Amazigh queen and religious and military leader who led indigenous resistance to Arab expansion in Northwest Africa during the 7th century.',
        timeline: [
            'Became leader of Amazigh tribes',
            'United tribes against Arab expansion',
            'Major victory in 689',
            'Led resistance for 5 years',
            'Final battle in 693'
        ]
    },
    {
        id: 'char6',
        name: 'Masinissa',
        subtitle: 'First King of Numidia',
        description: 'United the Numidian tribes and created a powerful kingdom',
        image: 'masinissa.jpg',
        modalDescription: 'Masinissa was the first king of Numidia, who united the Numidian tribes into a powerful kingdom. He was known for his military prowess and his efforts to transform Numidia into a developed state.',
        timeline: [
            'Born in 238 BC',
            'Became king in 206 BC',
            'United Numidia in 202 BC',
            'Modernized agriculture',
            'Died in 148 BC at age 90'
        ]
    },
    {
        id: 'char7',
        name: 'Abdelkrim al Khattabi',
        subtitle: 'Rif War Leader',
        description: 'Founded the Republic of the Rif',
        image: 'abdelkrim.jpg',
        modalDescription: 'Founded the Republic of the Rif and led resistance',
        timeline: [
            'Founded Republic',
            'Led Rif War',
            'Military genius'
        ]
    },
    {
        id: 'char8',
        name: 'Youssef ibn Tachfin',
        subtitle: 'Almoravid Leader',
        description: 'Founded Marrakech',
        image: '/images/youssef.jpg',
        modalDescription: 'Almoravid leader who founded Marrakech',
        timeline: [
            'Founded Marrakech',
            'United Morocco',
            'Extended empire'
        ]
    },
    {
        id: 'char9',
        name: 'Mohamed Améziane',
        subtitle: 'Rif Leader',
        description: 'Led resistance in Rif',
        image: 'ameziane.jpg',
        modalDescription: 'Key figure in Rif resistance against Spanish colonization',
        timeline: [
            'Led Rif resistance',
            'United tribes',
            'Defended territory'
        ]
    },
    {
        id: 'char10',
        name: 'Mulay Ahmed al-Hiba',
        subtitle: 'Sahrawi Sultan',
        description: 'Known as the Blue Sultan of the Sahara',
        image: 'hiba2.jpg',
        modalDescription: 'A powerful Sahrawi leader who fought against French colonization',
        timeline: [
            'Proclaimed Sultan in 1912',
            'Led resistance in Souss region',
            'United Saharan tribes against colonization'
        ]
    },
    {
        id: 'char11',
        name: 'Ahmed al-Raisuni',
        subtitle: 'Jbala Resistance Leader',
        description: 'Charismatic leader of northern Morocco',
        image: 'raisuni3.jpg',
        modalDescription: 'A significant figure in the resistance against European colonization',
        timeline: [
            'Controlled the Jbala region',
            'Led resistance movements',
            'Negotiated with foreign powers'
        ]
    },
    {
        id: 'char12',
        name: 'Hammou Zayani',
        subtitle: 'Atlas Mountains Leader',
        description: 'Defender of the Middle Atlas',
        image: 'zayani.jpg',
        modalDescription: 'A legendary figure who led resistance in the Middle Atlas mountains',
        timeline: [
            'United Atlas tribes',
            'Fought French expansion',
            'Protected Amazigh territories'
        ]
    }
];

// Function to generate HTML for character cards
function generateCharacterCards() {
    return charactersData.map(char => `
        <div class="item-card" onclick="openModal('${char.id}')">
            <div class="item-image">
                <img src="images/${char.image}" alt="${char.name}">
                <div class="item-overlay">
                    <h3>Click for details</h3>
                </div>
            </div>
            <div class="item-content">
                <h2 class="item-title">${char.name}</h2>
                <p class="item-subtitle">${char.subtitle}</p>
                <p class="item-description">${char.description}</p>
            </div>
        </div>
    `).join('');
}

// Function to generate HTML for modals
function generateModals() {
    return charactersData.map(char => `
        <div id="${char.id}" class="modal">
            <div class="modal-content">
                <span class="close-button" onclick="closeModal('${char.id}')">&times;</span>
                <img src="images/${char.image}" alt="${char.name}" class="modal-image">
                <h2 class="modal-title">${char.name}</h2>
                <div class="modal-description">
                    <p>${char.modalDescription}</p>
                    <div class="timeline">
                        ${char.timeline.map(item => `
                            <div class="timeline-item">${item}</div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Export the functions and data
export { charactersData, generateCharacterCards, generateModals };
