document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Cosmic Background Generation ---
    const starsContainer = document.querySelector('.stars-container');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.animation = `twinkle ${Math.random() * 4 + 2}s infinite ease-in-out`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(star);
    }

    // --- 2. Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        const isLight = body.getAttribute('data-theme') === 'light';
        
        if (isLight) {
            body.removeAttribute('data-theme');
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        }
    });

    if (localStorage.getItem('theme') === 'light') {
        body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '☀️';
    }

    // --- 3. Mobile Hamburger Menu Logic ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close the menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // --- 4. Scroll Reveal Animation ---
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

    // --- 5. Form Handling ---
    const form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = 'Sent Successfully! 🚀';
            btn.style.background = 'var(--secondary-accent)';
            
            form.reset();
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = 'var(--primary-accent)';
            }, 3000);
        });
    }
});