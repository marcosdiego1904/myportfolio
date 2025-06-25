document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    // Hide navbar initially
    if (navbar) {
        navbar.classList.add('navbar-hidden');
    }
    
    // Don't do anything until user has scrolled at least 100px
    const scrollOffset = 100;

    window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Ensure navbar exists before trying to manipulate it
        if (!navbar) return;

        if (currentScroll > lastScrollTop && currentScroll > scrollOffset) {
            // Scroll Down
            navbar.classList.add('navbar-hidden');
        } else {
            // Scroll Up
            // Show navbar only if scrolling up and past the offset
            if (currentScroll < lastScrollTop) {
                navbar.classList.remove('navbar-hidden');
            }
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }, false);

    // Mobile Navigation - Smooth scroll functionality
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link[href^="/#"]');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section ID from href
            const targetId = this.getAttribute('href').substring(2); // Remove '/#'
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Calculate offset for mobile menu height
                const mobileMenuHeight = 80;
                const targetPosition = targetSection.offsetTop - mobileMenuHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active state
                updateActiveNavLink(this);
            }
        });
    });
    
    // Update active navigation link based on scroll position
    function updateActiveNavLink(clickedLink = null) {
        if (clickedLink) {
            // Remove active class from all links
            mobileNavLinks.forEach(link => {
                link.classList.remove('w--current');
            });
            // Add active class to clicked link
            clickedLink.classList.add('w--current');
            return;
        }
        
        // Auto-update based on scroll position
        const sections = ['mywork', 'about', 'experience', 'contact'];
        const currentSection = getCurrentSection(sections);
        
        mobileNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.remove('w--current');
            
            if (href === `/#${currentSection}` || 
                (currentSection === 'home' && href === 'index.html')) {
                link.classList.add('w--current');
            }
        });
    }
    
    // Get current section based on scroll position
    function getCurrentSection(sections) {
        const scrollPosition = window.scrollY + 150; // Add offset for better detection
        
        // Check if we're at the top of the page
        if (scrollPosition < 300) {
            return 'home';
        }
        
        // Check each section
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && scrollPosition >= section.offsetTop) {
                return sections[i];
            }
        }
        
        return 'home';
    }
    
    // Update active link on scroll
    window.addEventListener('scroll', function() {
        updateActiveNavLink();
    });
    
    // Smooth scroll for desktop navigation links too
    const desktopNavLinks = document.querySelectorAll('.nav-link[href^="/#"]');
    
    desktopNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(2);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const targetPosition = targetSection.offsetTop - 100; // Desktop offset
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize active state on page load
    setTimeout(() => {
        updateActiveNavLink();
    }, 100);
});
