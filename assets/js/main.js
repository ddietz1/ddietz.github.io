/**
 * Portfolio Site JavaScript
 * Handles smooth scrolling, section tracking, URL updates, and email copy
 */

(function() {
  'use strict';

  // ============================================
  // CONFIGURATION
  // ============================================
  
  const CONFIG = {
    scrollOffset: 100, // Offset for scroll position (accounts for fixed nav)
    scrollThreshold: 0.3, // How much of section must be visible to be "active"
    debounceDelay: 100 // Delay for scroll event debouncing
  };

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================

  /**
   * Debounce function to limit how often a function can run
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Get the current page path without hash
   */
  function getCurrentPath() {
    return window.location.pathname;
  }

  /**
   * Check if we're on the homepage
   */
  function isHomePage() {
    const path = getCurrentPath();
    return path === '/' || path === '/index.html';
  }

  // ============================================
  // SMOOTH SCROLLING
  // ============================================

  /**
   * Smooth scroll to a section on the page
   */
  function smoothScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const offsetTop = section.offsetTop - CONFIG.scrollOffset;
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }

  /**
   * Handle navigation link clicks
   */
  function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link[data-scroll-to]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const sectionId = link.getAttribute('data-scroll-to');
        
        // If we're on the homepage, prevent default and smooth scroll
        if (isHomePage()) {
          e.preventDefault();
          smoothScrollToSection(sectionId);
          
          // Update URL without triggering scroll
          history.pushState(null, '', `#${sectionId}`);
        }
        // If we're on another page, let the link navigate normally to /#section
      });
    });
  }

  // ============================================
  // SECTION DETECTION & URL UPDATES
  // ============================================

  /**
   * Get all sections that should be tracked
   */
  function getTrackableSections() {
    return [
      { id: 'projects', element: document.getElementById('projects') },
      { id: 'about', element: document.getElementById('about') },
      { id: 'contact', element: document.getElementById('contact') }
    ].filter(section => section.element !== null);
  }

  /**
   * Determine which section is currently most visible
   */
  function getCurrentSection() {
    const sections = getTrackableSections();
    const scrollPos = window.scrollY + window.innerHeight * CONFIG.scrollThreshold;

    // If we're near the top of the page, return projects (or home)
    if (window.scrollY < 100) {
      return 'projects';
    }

    // Find the section that's most visible
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.element.offsetTop <= scrollPos) {
        return section.id;
      }
    }

    return 'projects'; // Default to projects
  }

  /**
   * Update the URL based on the current section
   */
  function updateURLForSection() {
    if (!isHomePage()) return; // Only update URL on homepage

    const currentSection = getCurrentSection();
    const currentHash = window.location.hash.slice(1); // Remove the #

    // Update URL if section changed
    if (currentSection === 'projects') {
      // For projects section, remove hash
      if (currentHash) {
        history.replaceState(null, '', '/');
      }
    } else {
      // For other sections, add hash
      if (currentHash !== currentSection) {
        history.replaceState(null, '', `#${currentSection}`);
      }
    }
  }

  /**
   * Initialize section tracking
   */
  function initSectionTracking() {
    if (!isHomePage()) return; // Only track on homepage

    // Update URL on scroll (debounced)
    const debouncedUpdate = debounce(updateURLForSection, CONFIG.debounceDelay);
    window.addEventListener('scroll', debouncedUpdate);

    // Set initial state
    updateURLForSection();
  }

  // ============================================
  // EMAIL COPY FUNCTIONALITY
  // ============================================

  /**
   * Copy email to clipboard
   */
  function copyEmailToClipboard() {
    const emailText = document.getElementById('email-text');
    const copyBtn = document.getElementById('copy-email-btn');
    
    if (!emailText || !copyBtn) return;

    const email = emailText.textContent;

    // Modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => {
          showCopySuccess(copyBtn);
        })
        .catch(err => {
          console.error('Failed to copy email:', err);
          fallbackCopyEmail(email, copyBtn);
        });
    } else {
      // Fallback for older browsers
      fallbackCopyEmail(email, copyBtn);
    }
  }

  /**
   * Fallback method to copy text (for older browsers)
   */
  function fallbackCopyEmail(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      showCopySuccess(button);
    } catch (err) {
      console.error('Fallback: Failed to copy email:', err);
    }

    document.body.removeChild(textArea);
  }

  /**
   * Show visual feedback that email was copied
   */
  function showCopySuccess(button) {
    const originalText = button.querySelector('.copy-text').textContent;
    
    // Add copied class for styling
    button.classList.add('copied');
    button.querySelector('.copy-text').textContent = 'Copied!';

    // Reset after 2 seconds
    setTimeout(() => {
      button.classList.remove('copied');
      button.querySelector('.copy-text').textContent = originalText;
    }, 2000);
  }

  /**
   * Initialize email copy button
   */
  function initEmailCopy() {
    const copyBtn = document.getElementById('copy-email-btn');
    
    if (copyBtn) {
      copyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        copyEmailToClipboard();
      });
    }
  }

  // ============================================
  // SCROLL TO SECTION ON PAGE LOAD
  // ============================================

  /**
   * Scroll to section if hash is present in URL on page load
   */
  function scrollToHashOnLoad() {
    const hash = window.location.hash;
    
    if (hash && isHomePage()) {
      // Wait for page to fully load, then scroll
      window.addEventListener('load', () => {
        setTimeout(() => {
          const sectionId = hash.slice(1); // Remove the #
          smoothScrollToSection(sectionId);
        }, 100);
      });
      
      // Also try immediately in case page is already loaded
      setTimeout(() => {
        const sectionId = hash.slice(1);
        const section = document.getElementById(sectionId);
        if (section) {
          smoothScrollToSection(sectionId);
        }
      }, 100);
    }
  }

  /**
   * Scroll to hash when navigating from another page
   */
  function handleHashNavigation() {
    // Check for hash on DOMContentLoaded (handles navigation from other pages)
    if (isHomePage()) {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const sectionId = hash.slice(1);
          const section = document.getElementById(sectionId);
          if (section) {
            smoothScrollToSection(sectionId);
          }
        }, 300); // Slightly longer delay for navigation
      }
    }
  }

  // ============================================
  // HANDLE BACK/FORWARD NAVIGATION
  // ============================================

  /**
   * Handle browser back/forward buttons
   */
  function initPopStateHandler() {
    window.addEventListener('popstate', () => {
      const hash = window.location.hash;
      
      if (isHomePage() && hash) {
        const sectionId = hash.slice(1);
        smoothScrollToSection(sectionId);
      } else if (isHomePage() && !hash) {
        // If no hash, scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  }

  // ============================================
  // ACTIVE NAV LINK HIGHLIGHTING
  // ============================================

  /**
   * Update active state of navigation links
   */
  function updateActiveNavLink() {
    if (!isHomePage()) return;

    const currentSection = getCurrentSection();
    const navLinks = document.querySelectorAll('.nav-link[data-scroll-to]');

    navLinks.forEach(link => {
      const linkSection = link.getAttribute('data-scroll-to');
      
      if (linkSection === currentSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /**
   * Initialize active nav link tracking
   */
  function initActiveNavTracking() {
    if (!isHomePage()) return;

    const debouncedUpdate = debounce(updateActiveNavLink, CONFIG.debounceDelay);
    window.addEventListener('scroll', debouncedUpdate);
    
    // Set initial state
    updateActiveNavLink();
  }

  // ============================================
  // INITIALIZATION
  // ============================================

  /**
   * Initialize all functionality when DOM is ready
   */
  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Initialize all features
    initSmoothScroll();
    initSectionTracking();
    initEmailCopy();
    initPopStateHandler();
    initActiveNavTracking();
    scrollToHashOnLoad();
    handleHashNavigation(); // Handle navigation from other pages

    console.log('Portfolio site initialized successfully!');
  }

  // Start initialization
  init();

})();