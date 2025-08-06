document.addEventListener('DOMContentLoaded', function() {
    
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; 
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    
    const navbar = document.querySelector('nav');
    const stickyCta = document.getElementById('sticky-cta');
    
    if (navbar || stickyCta) {
        window.addEventListener('scroll', function() {
            if (navbar) {
                if (window.scrollY > 10) {
                    navbar.classList.add('shadow-lg');
                } else {
                    navbar.classList.remove('shadow-lg');
                }
            }
            
            
            if (stickyCta) {
                const heroHeight = window.innerHeight * 0.8;
                if (window.scrollY > heroHeight) {
                    stickyCta.classList.remove('translate-y-full');
                } else {
                    stickyCta.classList.add('translate-y-full');
                }
            }
        });
    }

    
    
    const testimonialsSlider = document.getElementById('testimonials-slider');
    
    if (testimonialsSlider) {
        
        testimonialsSlider.addEventListener('mouseenter', () => {
            testimonialsSlider.style.animationPlayState = 'paused';
        });

        testimonialsSlider.addEventListener('mouseleave', () => {
            testimonialsSlider.style.animationPlayState = 'running';
        });
    }

    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);

    
    const animateElements = document.querySelectorAll('.fade-in');
    animateElements.forEach(element => {
        observer.observe(element);
    });
});