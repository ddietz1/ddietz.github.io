/**
 * Simple Hash Scroll Handler
 * This ensures scrolling works when navigating from other pages
 */

(function() {
  'use strict';
  
  // Check if we're on the homepage and have a hash
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
  const hash = window.location.hash;
  
  if (isHomePage && hash) {
    console.log('Hash detected:', hash);
    
    const sectionId = hash.substring(1); // Remove #
    
    // Function to scroll to section
    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      console.log('Attempting scroll to:', sectionId, 'Found:', !!section);
      
      if (section) {
        const navHeight = 80; // Height of navigation bar
        const offsetTop = section.offsetTop - navHeight;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        console.log('Scrolled to:', sectionId);
        return true;
      }
      return false;
    };
    
    // Try to scroll multiple times to ensure it works
    let attempts = 0;
    const maxAttempts = 10;
    
    const tryScroll = () => {
      attempts++;
      const success = scrollToSection();
      
      if (!success && attempts < maxAttempts) {
        // If section not found yet, try again
        setTimeout(tryScroll, 200);
      }
    };
    
    // Start attempting after a short delay
    setTimeout(tryScroll, 100);
    
    // Also try when DOM is fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(scrollToSection, 200);
      });
    }
    
    // And when everything is loaded
    window.addEventListener('load', () => {
      setTimeout(scrollToSection, 100);
    });
  }
})();