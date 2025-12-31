
let currentLang = localStorage.getItem('cv_lang') || 'en';


document.addEventListener('DOMContentLoaded', () => {
    updateContent();
});

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
}

function exportPDF() {
    const element = document.querySelector('.resume-wrapper');
    const isVietnamese = currentLang === 'vi';

    const opt = {
        margin: 0,
        filename: isVietnamese ? 'CV_VuMinhChuan_VN.pdf' : 'CV_VuMinhChuan.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            letterRendering: true,
            scrollX: 0,
            scrollY: 0
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Use a clone to avoid flickering on the main UI
    html2pdf().set(opt).from(element).save();
}
