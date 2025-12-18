
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
        langBtn.textContent = translations[currentLang]['btn.language'];
    }


    const pdfBtn = document.getElementById('pdf-btn');
    if (pdfBtn) {
        pdfBtn.textContent = translations[currentLang]['btn.download_pdf'];
    }


    if (data['title']) {
        document.title = data['title'];
    }


    document.documentElement.lang = currentLang;
}

function exportPDF() {
    const element = document.querySelector('.container');
    const isVietnamese = currentLang === 'vi';

    const opt = {
        margin: [0.2, 0, 0.2, 0],
        filename: isVietnamese ? 'CV_VuMinhChuan_VN.pdf' : 'CV_VuMinhChuan.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };


    const controls = document.querySelector('.no-print');
    if (controls) controls.style.display = 'none';


    element.classList.add('pdf-export');

    html2pdf().set(opt).from(element).save().then(() => {

        if (controls) controls.style.display = 'block';

        element.classList.remove('pdf-export');
    });
}
