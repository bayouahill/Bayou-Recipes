const searchInput = document.getElementById('recipe-search');
const cards = document.querySelectorAll('.card');
const noResults = document.getElementById('no-results');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  let visible = 0;

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const desc  = card.querySelector('p').textContent.toLowerCase();
    const match = title.includes(query) || desc.includes(query);
    card.style.display = match ? '' : 'none';
    if (match) visible++;
  });

  noResults.style.display = visible === 0 ? 'block' : 'none';
});
