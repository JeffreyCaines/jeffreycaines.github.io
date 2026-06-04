document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            // Toggle menu visibility with smooth transition
            mobileMenu.classList.toggle('hidden');
            
            // Change icon based on state
            const icon = this.querySelector('svg');
            if (mobileMenu.classList.contains('hidden')) {
                // Open: hamburger shape
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"  aria-label="Open Mobile Navigation Menu"/>';
            } else {
                // Close: X shape
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"  aria-label="Close Mobile Navigation Menu"/>';
            }
        });
    }
});