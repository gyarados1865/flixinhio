const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

let watchlistCount = 0;
const countEl = document.getElementById('watchCount');

document.querySelectorAll('.watchlist-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const added = btn.classList.toggle('added');
    btn.textContent = added ? '✓' : '+';
    watchlistCount += added ? 1 : -1;
    countEl.textContent = watchlistCount;
  });
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
const seeMoreButtons = document.querySelectorAll('.see-more-btn');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;

    tabButtons.forEach(btn => {
      const isActive = btn === button;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    tabPanels.forEach(panel => {
      const isVisible = panel.id === target;
      panel.classList.toggle('active', isVisible);
      panel.hidden = !isVisible;
    });
  });
});

seeMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    const panel = document.getElementById(target);

    if (!panel) return;

    const hiddenCards = panel.querySelectorAll('.poster.hidden');
    hiddenCards.forEach(card => card.classList.remove('hidden'));

    button.textContent = 'All shown';
    button.setAttribute('aria-expanded', 'true');
    button.style.display = 'none';
  });
});
