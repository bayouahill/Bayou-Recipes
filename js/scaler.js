// ── Serving Size Scaler ──────────────────────────────
// Reads data-base-servings from <main>, scales all
// <span class="amount" data-base="X"> elements.

const main = document.querySelector('main[data-base-servings]');
if (main) {
  const baseServings = parseFloat(main.dataset.baseServings);
  let current = baseServings;

  const countEl    = document.getElementById('serving-count');
  const decreaseBtn = document.getElementById('scaler-decrease');
  const increaseBtn = document.getElementById('scaler-increase');

  // Convert a decimal to a readable fraction string
  function formatAmount(val) {
    if (val === 0) return '0';

    const whole = Math.floor(val);
    const frac  = val - whole;
    const FRACS = [
      [0.125, '⅛'], [0.25, '¼'], [0.333, '⅓'],
      [0.5,   '½'], [0.667, '⅔'], [0.75, '¾']
    ];

    let fracStr = '';
    for (const [dec, sym] of FRACS) {
      if (Math.abs(frac - dec) < 0.04) { fracStr = sym; break; }
    }

    // Fallback: round to 1 decimal if no fraction match
    if (!fracStr && frac > 0.04) {
      const rounded = Math.round(val * 10) / 10;
      return rounded.toString();
    }

    if (whole === 0) return fracStr || val.toString();
    return fracStr ? `${whole}${fracStr}` : whole.toString();
  }

  function updateAmounts() {
    const ratio = current / baseServings;

    document.querySelectorAll('.amount').forEach(el => {
      const base   = parseFloat(el.dataset.base);
      const scaled = base * ratio;
      el.textContent = formatAmount(scaled);
    });

    countEl.textContent = current;
    decreaseBtn.disabled = current <= 1;
  }

  decreaseBtn.addEventListener('click', () => {
    if (current > 1) { current--; updateAmounts(); }
  });

  increaseBtn.addEventListener('click', () => {
    current++;
    updateAmounts();
  });
}
