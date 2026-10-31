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

document.querySelector('#year').textContent = new Date().getFullYear();
