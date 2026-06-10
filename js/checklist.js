// ── Ingredient Checklist ─────────────────────────────
// Wraps each ingredient <li> with a checkbox.
// Checked items get a strikethrough and fade out.
// State is saved to localStorage so it persists on refresh.

const pageKey = 'checklist:' + window.location.pathname;

function saveState() {
  const states = {};
  document.querySelectorAll('.ingredients li').forEach((li, i) => {
    states[i] = li.classList.contains('checked');
  });
  localStorage.setItem(pageKey, JSON.stringify(states));
}

function loadState() {
  const saved = localStorage.getItem(pageKey);
  if (!saved) return;
  const states = JSON.parse(saved);
  document.querySelectorAll('.ingredients li').forEach((li, i) => {
    if (states[i]) li.classList.add('checked');
  });
}

document.querySelectorAll('.ingredients li').forEach((li, i) => {
  // Wrap existing content in a label
  const label = document.createElement('label');
  label.className = 'ingredient-label';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'ingredient-check';

  // Move li's child nodes into the label after the checkbox
  const fragment = document.createDocumentFragment();
  fragment.appendChild(checkbox);
  while (li.firstChild) fragment.appendChild(li.firstChild);
  label.appendChild(fragment);
  li.appendChild(label);

  checkbox.addEventListener('change', () => {
    li.classList.toggle('checked', checkbox.checked);
    saveState();
  });
});

// Restore saved state (after checkboxes are built)
loadState();

// Sync checkboxes to match restored state
document.querySelectorAll('.ingredients li').forEach(li => {
  const cb = li.querySelector('.ingredient-check');
  if (cb) cb.checked = li.classList.contains('checked');
});
