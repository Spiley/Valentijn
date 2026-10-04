const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#nav-links');

function closeNavigation() {
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open navigation');
  navLinks.classList.remove('open');
}

navToggle.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navLinks.classList.toggle('open', open);
});

navLinks.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeNavigation();
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.navigation')) closeNavigation();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
    closeNavigation();
    navToggle.focus();
  }
});

const mobileNavigation = window.matchMedia('(max-width: 600px)');
mobileNavigation.addEventListener('change', closeNavigation);

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');
const filterStatus = document.querySelector('#filter-status');

filters.forEach((filter) => {
  // Keep the displayed counts consistent when projects are added or removed.
  const category = filter.dataset.filter;
  const count = [...projects].filter((project) => category === 'all' || project.dataset.category === category).length;
  filter.querySelector('span').textContent = String(count).padStart(2, '0');

  filter.addEventListener('click', () => {
    filters.forEach((button) => {
      const selected = button === filter;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });

    projects.forEach((project) => {
      project.hidden = category !== 'all' && project.dataset.category !== category;
    });

    filterStatus.textContent = `Showing ${count} ${count === 1 ? 'project' : 'projects'}.`;
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
