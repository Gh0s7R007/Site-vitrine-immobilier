// Menu mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle nav
    nav.classList.toggle('nav-active');
    
    // Burger animation
    burger.classList.toggle('toggle');
    
    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});



// Testimonial Slider - Only run if elements exist
if (document.querySelector('.testimonial-slider')) {
    let slideIndex = 1;
    showSlides(slideIndex);

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("testimonial");
        let dots = document.getElementsByClassName("dot");
        
        if (slides.length === 0) return;
        
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        
        slides[slideIndex-1].classList.add("active");
        dots[slideIndex-1].classList.add("active");
    }

    // Auto slide only if testimonials exist
    if (document.getElementsByClassName("testimonial").length > 0) {
        setInterval(() => {
            slideIndex++;
            if (slideIndex > document.getElementsByClassName("testimonial").length) {
                slideIndex = 1;
            }
            showSlides(slideIndex);
        }, 5000);
    }
}

// Auto slide testimonials
setInterval(() => {
    slideIndex++;
    if (slideIndex > document.getElementsByClassName("testimonial").length) {
        slideIndex = 1;
    }
    showSlides(slideIndex);
}, 5000);

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Send the data or store it
        // For demonstration, we'll just log it to the console
        console.log({name, email, message});
        
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});



