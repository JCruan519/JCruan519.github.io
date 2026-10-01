(() => {
  'use strict';

  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.nav');
  if (menu && navigation) {
    document.documentElement.classList.add('js');
    navigation.classList.add('mobile-closed');
    menu.hidden = false;
    menu.addEventListener('click', () => {
      const expanded = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!expanded));
      navigation.classList.toggle('mobile-closed', expanded);
      menu.textContent = expanded ? 'Menu' : 'Close';
    });
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = 'Menu';
      navigation.classList.add('mobile-closed');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        menu.click();
        menu.focus();
      }
    });
  }

  const toolbar = document.querySelector('.filter-toolbar');
  const papers = [...document.querySelectorAll('.paper')];
  const earlier = document.querySelector('.earlier-papers');
  const count = document.querySelector('.filter-count');
  if (toolbar && count) {
    toolbar.hidden = false;
    const updateCount = () => {
      const total = papers.filter(paper => !paper.hidden).length;
      count.textContent = `${total} selected works`;
    };
    toolbar.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
      const topic = button.dataset.filter;
      toolbar.querySelectorAll('button').forEach(control => {
        control.setAttribute('aria-pressed', String(control === button));
      });
      papers.forEach(paper => {
        paper.hidden = topic !== 'all' && !paper.dataset.topics.split(' ').includes(topic);
      });
      if (earlier) {
        const hasMatch = [...earlier.querySelectorAll('.paper')].some(paper => !paper.hidden);
        earlier.hidden = !hasMatch;
        earlier.open = topic !== 'all' && hasMatch;
      }
      updateCount();
    }));
    updateCount();
  }

  if ('IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('.nav a[href^="#"]')];
    const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }, { rootMargin: '-15% 0px -65% 0px' });
    sections.forEach(section => observer.observe(section));
  }
})();
