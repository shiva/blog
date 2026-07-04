/* duality search — dependency-free substring/rank search over index.json */
(function () {
  const q = document.getElementById('q');
  const out = document.getElementById('results');
  if (!q || !out) return;
  let idx = null;

  function esc(s) { return s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

  function score(doc, terms) {
    let s = 0;
    const title = doc.title.toLowerCase();
    const body = doc.body.toLowerCase();
    const tags = (doc.tags || []).join(' ').toLowerCase();
    for (const t of terms) {
      if (!title.includes(t) && !body.includes(t) && !tags.includes(t)) return 0;
      if (title.includes(t)) s += 10;
      if (title.startsWith(t)) s += 5;
      if (tags.includes(t)) s += 4;
      if (body.includes(t)) s += 1;
    }
    return s;
  }

  function render(list) {
    out.innerHTML = list.slice(0, 30).map(d =>
      `<a class="note" href="${d.url}"><b>${esc(d.title)}</b><span>${esc(d.date)}</span></a>`
    ).join('') || '<p class="soon">No matches.</p>';
  }

  function run() {
    const terms = q.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) { out.innerHTML = ''; return; }
    render(idx
      .map(d => [score(d, terms), d])
      .filter(p => p[0] > 0)
      .sort((a, b) => b[0] - a[0])
      .map(p => p[1]));
  }

  q.addEventListener('input', () => {
    if (idx) { run(); return; }
    fetch(window.DUALITY_INDEX)
      .then(r => r.json())
      .then(j => { idx = j; run(); });
  });
})();
