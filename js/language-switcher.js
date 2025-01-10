// Get the user's preferred language from localStorage or default to English
let currentLang = localStorage.getItem('language') || 'en';

// Helper function to get nested translations
function getNestedTranslation(obj, path) {
    const keys = path.split('.');
    let result = obj;
    for (const key of keys) {
        if (result && result[key]) {
            result = result[key];
        } else {
            return null;
        }
    }
    return result;
}

// Function to update all text content based on the selected language
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translations[lang], key);
        
        if (translation) {
            // Handle different types of translations
            if (typeof translation === 'string') {
                element.textContent = translation;
            } else if (typeof translation === 'object') {
                // For elements that might need multiple translations (like title, description)
                for (const [subKey, value] of Object.entries(translation)) {
                    const targetElement = element.querySelector(`[data-translate-${subKey}]`);
                    if (targetElement) {
                        targetElement.textContent = value;
                    }
                }
            }
        }
    });

    // Update button text
    document.querySelector('.language-button span').textContent = lang.toUpperCase();
    
    // Update document direction for Arabic
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
    
    // Add click handlers for language selection
    document.querySelectorAll('.language-menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
});
