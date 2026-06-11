import { portfolioData } from './data.js';
import { createSkillPill, createProjectCard } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render Skills
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    portfolioData.skills.forEach((skill, index) => {
      const pill = createSkillPill(skill);
      pill.style.animationDelay = `${0.05 * (index % 6)}s`;
      skillsContainer.appendChild(pill);
    });
  }

  // 2. Render Projects
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    portfolioData.projects.forEach((project, index) => {
      const card = createProjectCard(project);
      card.style.animationDelay = `${0.15 * index}s`;
      projectsGrid.appendChild(card);
    });
  }

  // 3. Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-fade-in-up').forEach(el => {
    el.classList.add('scroll-hidden');
    observer.observe(el);
  });

  // 4. Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      const btnText = submitBtn.querySelector('.btn-text');
      const originalText = btnText.textContent;

      // Loading state
      btnText.textContent = 'Sending...';
      submitBtn.disabled = true;
      formStatus.className = 'form-status';
      formStatus.textContent = '';

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
          formStatus.textContent = result.message;
          formStatus.classList.add('success');
          contactForm.reset();
        } else {
          throw new Error(result.error || 'Something went wrong');
        }
      } catch (error) {
        formStatus.textContent = error.message;
        formStatus.classList.add('error');
      } finally {
        btnText.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  // 5. Custom Cursor
  const cursorDot = document.querySelector('[data-cursor-dot]');
  const cursorOutline = document.querySelector('[data-cursor-outline]');

  // Only show custom cursor on non-touch devices
  if (cursorDot && cursorOutline && window.matchMedia('(pointer: fine)').matches) {
    document.body.style.cursor = 'none';

    window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 400, fill: "forwards" });
    });

    // Interactive hover states
    document.querySelectorAll('a, button, .advanced-project-card, input, textarea, .ai-fab').forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('interacting');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('interacting');
      });
    });
  } else {
    // Hide custom cursor on touch devices
    if (cursorDot) cursorDot.style.display = 'none';
    if (cursorOutline) cursorOutline.style.display = 'none';
  }

  // 6. Navbar scroll effect
  const nav = document.getElementById('main-nav');
  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      nav.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
    } else {
      nav.style.boxShadow = 'none';
    }

    if (currentScrollY > lastScrollY && currentScrollY > 300) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
  });

  // 7. Active nav link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');

  const activateNavLink = () => {
    const scrollY = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', activateNavLink);
});
