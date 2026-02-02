// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add a simple entrance animation for elements when they come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elements to animate
document.querySelectorAll('.feature-card, .stat-item, .cta-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Add the visible class styles dynamically
const styleCheck = document.createElement('style');
styleCheck.innerHTML = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(styleCheck);

// Currency Selector Logic
const currencySelector = document.getElementById('currency-selector');
const offerInput = document.getElementById('offer-amount');

if (currencySelector && offerInput) {
    currencySelector.addEventListener('change', function () {
        const currency = this.value;
        if (currency === 'USD') {
            offerInput.placeholder = 'Your Offer (USD)';
        } else if (currency === 'INR') {
            offerInput.placeholder = 'Your Offer (INR)';
        }
    });
}

console.log('lanana.in landing page script loaded.');
