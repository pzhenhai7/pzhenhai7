// pzhenhai7.com — Main Script

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Mobile menu toggle
    if (toggle) {
        toggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu on link click
    if (navMenu) {
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar hide/show on scroll
    let lastScroll = 0;
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 120) {
            nav.style.transform = currentScroll > lastScroll
                ? 'translateY(-100%)'
                : 'translateY(0)';
        } else {
            nav.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for fade-in
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeUp 1s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.split-layout, .collection-card, .editorial-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});
