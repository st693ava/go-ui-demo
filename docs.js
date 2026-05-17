/**
 * docs.js — comportamento partilhado das páginas de documentação por
 * componente: alternador Preview/Code, tabs de instalação, TOC "Nesta
 * página" gerada a partir dos h2/h3, scrollspy e botão "Copiar página".
 *
 * Servido como asset estático; cada página liga-o com ../docs.js
 * (type=module, após site-chrome.js). NÃO há lógica por componente
 * aqui — tudo é derivado do DOM, por isso as ~48 páginas partilham-no.
 */

// ── Preview/Code (bloco .pc) ────────────────────────────────────────
// Não usamos <go-tabs> à volta do preview vivo: o snapshot+v-html do
// go-tabs re-renderiza o light-DOM e parte componentes interativos
// aninhados (#64). O preview tem de manter o seu DOM real → switcher
// nativo.
function wirePreviewCode() {
  document.querySelectorAll('.pc').forEach((pc) => {
    pc.dataset.view ||= 'preview'
    pc.querySelectorAll('.pc-bar button').forEach((btn) => {
      btn.addEventListener('click', () => {
        pc.dataset.view = btn.dataset.view
        pc.querySelectorAll('.pc-bar button').forEach((b) =>
          b.setAttribute('aria-selected', String(b === btn)),
        )
      })
    })
  })
}

// ── Tabs genéricas (instalação CLI/Manual) ──────────────────────────
function wireTabs() {
  document.querySelectorAll('.tabs').forEach((tabs) => {
    const btns = [...tabs.querySelectorAll('.tabs-bar button')]
    const panels = [...tabs.querySelectorAll('.tabs-panel')]
    const show = (name) => {
      btns.forEach((b) =>
        b.setAttribute('aria-selected', String(b.dataset.tab === name)),
      )
      panels.forEach((p) =>
        p.toggleAttribute('data-active', p.dataset.panel === name),
      )
    }
    btns.forEach((b) => b.addEventListener('click', () => show(b.dataset.tab)))
    show(btns[0]?.dataset.tab)
  })
}

// ── TOC "Nesta página" + scrollspy ──────────────────────────────────
function buildToc() {
  const toc = document.getElementById('toc')
  const content = document.querySelector('.docs-content')
  if (!toc || !content) return
  const heads = [...content.querySelectorAll('h2[id], h3[id]')]
  if (!heads.length) return

  const title = document.createElement('p')
  title.className = 't'
  title.textContent = 'Nesta página'
  toc.appendChild(title)

  const links = heads.map((h) => {
    const a = document.createElement('a')
    a.href = '#' + h.id
    a.textContent = h.textContent.trim()
    if (h.tagName === 'H3') a.classList.add('sub')
    toc.appendChild(a)
    return a
  })

  const spy = () => {
    let cur = heads[0]
    for (const h of heads)
      if (h.getBoundingClientRect().top < 130) cur = h
    links.forEach((a) =>
      a.toggleAttribute(
        'aria-current',
        a.getAttribute('href') === '#' + cur.id,
      ),
    )
  }
  document.addEventListener('scroll', spy, { passive: true })
  spy()
}

// ── Copiar página (link) ────────────────────────────────────────────
function wireCopyPage() {
  const btn = document.querySelector('[data-copy-page]')
  if (!btn) return
  const label = btn.textContent
  btn.addEventListener('click', () => {
    navigator.clipboard?.writeText(location.href).then(() => {
      btn.textContent = 'Copiado ✓'
      setTimeout(() => (btn.textContent = label), 1600)
    })
  })
}

wirePreviewCode()
wireTabs()
buildToc()
wireCopyPage()
