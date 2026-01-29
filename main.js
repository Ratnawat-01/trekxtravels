import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle (Planned if needed, currently just plain links)

    // Floating Action Bar Scroll Logic
    const floatingBar = document.getElementById('floating-bar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll Down -> Hide
            floatingBar.style.transform = 'translate(-50%, 200%)';
        } else {
            // Scroll Up -> Show
            floatingBar.style.transform = 'translate(-50%, 0)';
        }
        lastScrollTop = scrollTop;
    });

    // Navbar Background Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black/80', 'py-2');
            navbar.classList.remove('bg-black/20', 'py-4');
        } else {
            navbar.classList.remove('bg-black/80', 'py-2');
            navbar.classList.add('bg-black/20', 'py-4');
        }
    });

    // Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section h2, section h3, section p, .glass-card').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
});
