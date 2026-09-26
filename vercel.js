const slider = document.querySelector('.slider');
const pagerCount = document.querySelector('.pager-count');
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prevArrow');
const nextBtn = document.getElementById('nextArrow');

let current = 0;

function updatePager(){
  pagerCount.textContent = `0${current + 1} / 0${cards.length}`;
}

function scrollToCard(index){
  const card = cards[index];
  if (card){
    slider.scrollTo({ left: card.offsetLeft - slider.offsetLeft, behavior: 'smooth' });
  }
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % cards.length;
  scrollToCard(current);
  updatePager();
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + cards.length) % cards.length;
  scrollToCard(current);
  updatePager();
});

updatePager();