import { portfolioData } from './data.js';
import { createSkillPill, createProjectCard } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render Skills
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    portfolioData.skills.forEach((skill, index) => {
      const pill = createSkillPill(skill);
      pill.style.animationDelay = `${0.1 * (index % 5)}s`;
      skillsContainer.appendChild(pill);
    });
  }

  // 2. Render Projects
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    portfolioData.projects.forEach((project, index) => {
      const card = createProjectCard(project);
      card.style.animationDelay = `${0.2 * index}s`;
      projectsGrid.appendChild(card);
    });
  }

  // 3. Simple Intersection Observer for scroll animations
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

  // 4. Contact Form Handling (Full-Stack functionality)
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
        const response = await fetch('http://localhost:5000/api/contact', {
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

  // 5. Custom Cursor Logic
  const cursorDot = document.querySelector('[data-cursor-dot]');
  const cursorOutline = document.querySelector('[data-cursor-outline]');

  if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // Animate outline with slight delay for smooth trailing effect
      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: "forwards" });
    });

    // Add interactive hover states for links and buttons
    document.querySelectorAll('a, button, .advanced-project-card, input, .ai-fab').forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('interacting');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('interacting');
      });
    });
  }

  // 5. 3D Tilt Effect for Project Cards
  // We attach this via event delegation to catch dynamically generated cards
  const grid = document.getElementById('projects-grid');
  if (grid) {
    grid.addEventListener('mousemove', e => {
      const card = e.target.closest('.advanced-project-card');
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    grid.addEventListener('mouseout', e => {
      const card = e.target.closest('.advanced-project-card');
      if (!card) return;
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  }
});
