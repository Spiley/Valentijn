const filters = document.querySelectorAll('.filter');
const projects = [...document.querySelectorAll('.project-card')];
const status = document.querySelector('#filter-status');

for (const filter of filters) {
  const category = filter.dataset.filter;
  const matches = projects.filter(project => category === 'all' || project.dataset.category === category);
  filter.querySelector('span').textContent = String(matches.length).padStart(2, '0');
  filter.addEventListener('click', () => {
    for (const button of filters) {
      const active = button === filter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    }
    for (const project of projects) {
      project.hidden = category !== 'all' && project.dataset.category !== category;
    }
    status.textContent = 'Showing ' + matches.length + ' projects.';
  });
}

const navigation = [...document.querySelectorAll('.section-navigation a')];
const sections = navigation.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const updateNavigation = () => {
  const threshold = Math.min(window.innerHeight * 0.35, 240);
  const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  const current = atBottom ? sections.at(-1) : sections.filter(section => section.getBoundingClientRect().top <= threshold).at(-1) || sections[0];
  for (const link of navigation) {
    if (link.getAttribute('href') === '#' + current.id) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
};
let scheduled = false;
window.addEventListener('scroll', () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    updateNavigation();
    scheduled = false;
  });
}, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();
document.querySelector('#year').textContent = new Date().getFullYear();
