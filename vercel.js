const slider = document.querySelector('.slider');
const cards = Array.from(document.querySelectorAll('.card'));
const pagerCount = document.querySelector('.pager-count');
const prevBtn = document.getElementById('prevArrow');
const nextBtn = document.getElementById('nextArrow');
const exploreBtn = document.querySelector('.explore-btn');

let current = 0;

function updatePager() {
  if (!pagerCount || cards.length === 0) return;
  const format = (number) => String(number).padStart(2, '0');
  pagerCount.textContent = `${format(current + 1)} / ${format(cards.length)}`;
}

function showCard(index) {
  if (!slider || cards.length === 0) return;
  current = (index + cards.length) % cards.length;
  slider.scrollTo({ left: cards[current].offsetLeft - slider.offsetLeft, behavior: 'smooth' });
  updatePager();
}

prevBtn?.addEventListener('click', () => showCard(current - 1));
nextBtn?.addEventListener('click', () => showCard(current + 1));
exploreBtn?.addEventListener('click', () => {
  slider?.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

updatePager();
