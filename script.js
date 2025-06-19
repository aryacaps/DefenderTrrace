
// Global variables
let currentProduct = '';

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // CTA Button scroll to collection
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.querySelector('#collection').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Modal functionality
    const modal = document.getElementById('sizeChartModal');
    const closeBtn = document.querySelector('.close');

    // Close modal when clicking the X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Mobile menu toggle (if needed for future enhancement)
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            // Toggle mobile menu functionality can be added here
            console.log('Mobile menu clicked');
        });
    }

    // Add animation to product cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

// Show size chart modal
function showSizeChart(productName) {
    currentProduct = productName;
    const modal = document.getElementById('sizeChartModal');
    const productNameElement = document.getElementById('productName');
    
    productNameElement.textContent = `Size Chart - ${productName}`;
    modal.style.display = 'block';
    
    // Add entrance animation
    const modalContent = document.querySelector('.modal-content');
    modalContent.style.animation = 'modalSlideIn 0.3s ease';
}

// Order via WhatsApp
function orderWhatsApp() {
    const phoneNumber = '6283821717753'; // Nomor WhatsApp yang diminta
    const message = `Hallo Min mau order baju  : ${currentProduct}, Size : , Payment:`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

// Search functionality (can be enhanced later)
function handleSearch() {
    const searchIcon = document.querySelector('.fa-search');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            // Search functionality can be implemented here
            alert('Fitur pencarian akan segera tersedia!');
        });
    }
}

// Shopping bag functionality (can be enhanced later)
function handleShoppingBag() {
    const bagIcon = document.querySelector('.fa-shopping-bag');
    if (bagIcon) {
        bagIcon.addEventListener('click', function() {
            // Shopping bag functionality can be implemented here
            alert('Keranjang belanja akan segera tersedia!');
        });
    }
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    handleSearch();
    handleShoppingBag();
});

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top functionality to logo
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            scrollToTop();
        });
        logo.style.cursor = 'pointer';
    }
});

// Enhanced product card interactions
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click ripple effect
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s linear';
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - 10;
            const y = e.clientY - rect.top - 10;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .product-card {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);
