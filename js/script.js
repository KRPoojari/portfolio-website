// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links that have hash in href (internal links)
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Scroll to target element with smooth behavior
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without page reload
                history.pushState(null, null, targetId);
            }
        });
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Add theme switcher functionality
const themeSwitcher = document.querySelector('.theme-switcher i');
let isDarkMode = true; // Default to dark mode as per current CSS

if (themeSwitcher) {
    themeSwitcher.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        
        // Toggle between sun and moon icons
        this.classList.toggle('fa-sun');
        this.classList.toggle('fa-moon');
        
        // Toggle theme class on body
        document.body.classList.toggle('light-mode');
        
        // Update CSS variables based on theme
        if (!isDarkMode) {
            document.documentElement.style.setProperty('--text-color', '#333');
            document.documentElement.style.setProperty('--bg-color', '#fff');
            document.documentElement.style.setProperty('--accent-color', '#f0f0f0');
        } else {
            document.documentElement.style.setProperty('--text-color', '#f0f0f0');
            document.documentElement.style.setProperty('--bg-color', '#121212');
            document.documentElement.style.setProperty('--accent-color', '#2a2a2a');
        }
    });
}

// Add animations to SVG elements
document.addEventListener('DOMContentLoaded', function() {
    // Animate SVG elements when they come into view
    const svgElements = document.querySelectorAll('.gallery-item img, .project-image, .timeline-icon img');
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    
    // Observe each SVG element
    svgElements.forEach(svg => {
        observer.observe(svg);
    });
});

// Function to add parallax effect to hero SVG
function initParallaxEffect() {
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            // Apply subtle transform to create parallax effect
            heroImage.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
        });
    }
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', initParallaxEffect);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to nav links on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add touch support for mobile interactions
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('touchstart', function() {
        this.classList.add('touch-active');
    }, { passive: true });
    
    item.addEventListener('touchend', function() {
        this.classList.remove('touch-active');
    });
});

// Lazy loading images for better performance
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Back to Top Button functionality
const backToTopButton = document.getElementById("back-to-top");

// Show the button when the user scrolls down 300px from the top
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll to top when the button is clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
});