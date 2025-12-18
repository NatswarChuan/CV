function exportPDF() {
    const element = document.querySelector('.container');
    const opt = {
        margin: [0.2, 0, 0.2, 0], // Top, Left, Bottom, Right
        filename: document.title.includes('VN') ? 'CV_VuMinhChuan_VN.pdf' : 'CV_VuMinhChuan.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Hide buttons before export
    const controls = document.querySelector('.no-print');
    if (controls) controls.style.display = 'none';
    
    // Adjust width for PDF
    element.classList.add('pdf-export');

    // Determine filename dynamically if needed, though hardcoded above is fine for split Logic. 
    // Actually, let's make it smarter based on the page language or hardcode passing argument.
    // However, for simplicity and since we share this file, checking title or html lang attribute is good.
    const isVietnamese = document.documentElement.lang === 'vi';
    opt.filename = isVietnamese ? 'CV_VuMinhChuan_VN.pdf' : 'CV_VuMinhChuan.pdf';

    html2pdf().set(opt).from(element).save().then(() => {
        // Show buttons after export
        if (controls) controls.style.display = 'block';
        // Revert width
        element.classList.remove('pdf-export');
    });
}
