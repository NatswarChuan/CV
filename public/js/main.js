
let currentLang = localStorage.getItem('cv_lang') || 'en';

// Convert tech stack strings into colorful chips
function convertStackToChips(stackText) {
    if (!stackText) return '';

    const techColorMap = {
        'java': 'java',
        'php': 'php',
        'javascript': 'javascript',
        'js': 'javascript',
        'vue': 'vue',
        'spring': 'spring',
        'laravel': 'laravel',
        'mysql': 'mysql',
        'redis': 'redis',
        'docker': 'docker',
        'node': 'javascript'
    };

    const techs = stackText.split(',').map(t => t.trim());
    const chips = techs.map(tech => {
        const techLower = tech.toLowerCase();
        let colorClass = 'default';

        // Find matching color
        for (const [key, value] of Object.entries(techColorMap)) {
            if (techLower.includes(key)) {
                colorClass = value;
                break;
            }
        }

        return `<span class="tech-chip ${colorClass}">${tech}</span>`;
    });

    return `<div class="tech-chips">${chips.join('')}</div>`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    initializeTechChips();
});

function initializeTechChips() {
    // Convert all .stack elements to chips
    document.querySelectorAll('.job-meta .stack, .project-meta .stack').forEach(element => {
        const stackText = element.textContent.trim();
        if (stackText && !element.querySelector('.tech-chips')) {
            element.innerHTML = convertStackToChips(stackText);
        }
    });
}


function changeLanguage() {
    currentLang = currentLang === 'en' ? 'vi' : 'en';
    localStorage.setItem('cv_lang', currentLang);
    updateContent();
}

function updateContent() {
    const data = translations[currentLang];

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (data[key]) {
            element.innerHTML = data[key];
        }
    });

    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        const btnText = translations[currentLang]['btn.language'];
        const span = langBtn.querySelector('span');
        if (span) span.textContent = btnText;
        else langBtn.textContent = btnText;
    }

    const pdfBtn = document.getElementById('pdf-btn');
    if (pdfBtn) {
        const btnText = translations[currentLang]['btn.download_pdf'];
        const span = pdfBtn.querySelector('span');
        if (span) span.textContent = btnText;
        else pdfBtn.textContent = btnText;
    }

    if (data['title']) {
        document.title = data['title'];
    }

    document.documentElement.lang = currentLang;

    // Re-initialize tech chips after content update
    setTimeout(() => initializeTechChips(), 100);
}


function exportPDF() {
    // Use browser's native print dialog
    // User will need to select "Save as PDF" and set proper settings

    // Hide buttons before printing
    const buttons = document.querySelectorAll('.no-print, .floating-nav');
    buttons.forEach(btn => btn.style.display = 'none');

    // Trigger print dialog
    window.print();

    // Show buttons again after print dialog closes
    setTimeout(() => {
        buttons.forEach(btn => btn.style.display = '');
    }, 100);
}

