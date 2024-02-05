"use strict";
const faqs = document.querySelectorAll('.question-section');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});
