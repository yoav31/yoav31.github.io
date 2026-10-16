// Plain JavaScript for Portfolio Interactivity and Maintenance

document.addEventListener('DOMContentLoaded', () => {
  // 1. Automatically update copyright year in footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Mobile navigation menu toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link on mobile
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Smooth scrolling offset fix for sticky navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 4. Verification check for placeholders
  // Warns cleanly in console if LinkedIn placeholder is still unconfigured
  const linkedinHero = document.getElementById('linkedinHeroBtn');
  const linkedinContact = document.getElementById('linkedinContactLink');

  if (linkedinHero && linkedinHero.getAttribute('href') === 'YOUR_LINKEDIN_URL_HERE') {
    console.info('Config Note: Replace YOUR_LINKEDIN_URL_HERE in index.html when ready.');
  }
});
