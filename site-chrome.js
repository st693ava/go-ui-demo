/**
 * Chrome partilhado do site de demonstração go-ui.
 *
 * Injecta header (marca + navegação + theme switcher) e footer em todas as
 * páginas, fiel ao layout de shadcn-vue.com. Cada página só fornece o seu
 * <main data-site-main>…</main>; este módulo trata do resto + do tema.
 *
 * Servido como asset estático: em dev o Vite serve a raiz; no build é
 * copiado para _demo/. As páginas referenciam-no com ./site-chrome.js.
 */

const NAV = [
  { href: 'installation.html', label: 'Instalação' },
  { href: 'components.html', label: 'Componentes' },
  { href: 'blocks.html', label: 'Blocks' },
  { href: 'charts.html', label: 'Charts' },
  { href: 'create.html', label: 'Create' },
]

const REPO = 'https://github.com/st693ava/go-ui-demo'

// Páginas em subpasta (components/<nome>.html) declaram
// window.__SITE_BASE__='../' antes deste módulo — assim a marca, a
// navegação e o footer resolvem-se a partir da raiz do site em qualquer
// profundidade.
const BASE = window.__SITE_BASE__ || ''

function currentPage() {
  const p = location.pathname.split('/').pop() || 'index.html'
  return p === '' ? 'index.html' : p
}

// "Componentes" fica activo tanto em components.html como em qualquer
// página dedicada components/<nome>.html.
function isActiveNav(href) {
  const page = currentPage()
  if (href === 'components.html')
    return page === 'components.html' || /\/components\//.test(location.pathname)
  return href === page
}

function injectStyles() {
  const css = `
  :root { --site-h: 3.5rem; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
    color: var(--foreground, #0a0a0a); background: var(--background, #fff);
    -webkit-font-smoothing: antialiased; }
  a { color: inherit; }
  .site-hd { position: sticky; top: 0; z-index: 50;
    border-bottom: 1px solid var(--border, #e5e7eb);
    background: color-mix(in oklab, var(--background, #fff) 80%, transparent);
    backdrop-filter: blur(8px); }
  .site-hd-in { height: var(--site-h); max-width: 80rem; margin: 0 auto;
    padding: 0 1.5rem; display: flex; align-items: center; gap: 1.5rem; }
  .site-brand { display: flex; align-items: center; gap: .5rem; font-weight: 700;
    text-decoration: none; font-size: .95rem; letter-spacing: -.01em; }
  .site-brand .logo { width: 1.35rem; height: 1.35rem; border-radius: 6px;
    background: var(--foreground, #0a0a0a); color: var(--background, #fff);
    display: grid; place-items: center; font-size: .75rem; font-weight: 800; }
  .site-nav { display: flex; align-items: center; gap: 1.25rem; font-size: .875rem;
    flex: 1; }
  .site-nav a { text-decoration: none; color: var(--muted-foreground, #6b7280);
    transition: color .12s; white-space: nowrap; }
  .site-nav a:hover { color: var(--foreground, #0a0a0a); }
  .site-nav a[aria-current="page"] { color: var(--foreground, #0a0a0a);
    font-weight: 600; }
  .site-actions { display: flex; align-items: center; gap: .75rem; }
  .site-actions a.gh { color: var(--muted-foreground, #6b7280);
    text-decoration: none; display: grid; place-items: center; }
  .site-actions a.gh:hover { color: var(--foreground, #0a0a0a); }
  [data-site-main] { max-width: 80rem; margin: 0 auto; padding: 2.5rem 1.5rem 4rem;
    min-height: calc(100vh - var(--site-h) - 8rem); }
  .site-ft { border-top: 1px solid var(--border, #e5e7eb);
    color: var(--muted-foreground, #6b7280); font-size: .85rem; }
  .site-ft-in { max-width: 80rem; margin: 0 auto; padding: 1.75rem 1.5rem;
    display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
  .site-ft a { color: var(--foreground, #0a0a0a); text-decoration: none; }
  .site-ft a:hover { text-decoration: underline; }
  @media (max-width: 720px) {
    .site-nav { gap: .9rem; overflow-x: auto; }
    .site-hd-in { gap: 1rem; padding: 0 1rem; }
  }
  `
  const s = document.createElement('style')
  s.textContent = css
  document.head.appendChild(s)
}

function buildHeader() {
  const hd = document.createElement('header')
  hd.className = 'site-hd'
  hd.innerHTML = `
    <div class="site-hd-in">
      <a class="site-brand" href="${BASE}index.html">
        <span class="logo">go</span><span>go-ui</span>
      </a>
      <nav class="site-nav">
        ${NAV.map(
          (n) =>
            `<a href="${BASE}${n.href}"${
              isActiveNav(n.href) ? ' aria-current="page"' : ''
            }>${n.label}</a>`,
        ).join('')}
      </nav>
      <div class="site-actions">
        <go-toggle-group id="theme" type="single" size="sm" variant="outline">
          <option value="system">Sistema</option>
          <option value="light">Claro</option>
          <option value="dark">Escuro</option>
        </go-toggle-group>
        <a class="gh" href="${REPO}" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 5 18 5.3 18 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"/></svg>
        </a>
      </div>
    </div>`
  document.body.prepend(hd)
}

function buildFooter() {
  const ft = document.createElement('footer')
  ft.className = 'site-ft'
  ft.innerHTML = `
    <div class="site-ft-in">
      <span>Construído com <strong>go-ui</strong> — Web Components shadcn-vue (Reka UI) compilados para Custom Elements no-Shadow.</span>
      <span>Inspirado em <a href="https://www.shadcn-vue.com" target="_blank" rel="noreferrer">shadcn-vue</a> · <a href="${REPO}" target="_blank" rel="noreferrer">GitHub</a></span>
    </div>`
  const main = document.querySelector('[data-site-main]')
  if (main && main.parentNode) main.parentNode.insertBefore(ft, main.nextSibling)
  else document.body.appendChild(ft)
}

function wireTheme() {
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const apply = (mode) => {
    const dark = mode === 'dark' || (mode === 'system' && mql.matches)
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('go-ui-theme', mode)
  }
  const el = document.getElementById('theme')
  if (el) {
    el.setAttribute('value', localStorage.getItem('go-ui-theme') || 'system')
    el.addEventListener('change', (e) => {
      const m = e.detail && e.detail.value
      if (m) apply(m)
    })
  }
  mql.addEventListener('change', () => {
    if ((localStorage.getItem('go-ui-theme') || 'system') === 'system')
      apply('system')
  })
}

// ── Code highlight + copy (autocontido, sem CDN nem dependência) ─────
function injectCodeStyles() {
  const css = `
  pre.code { position: relative; background: #0b0f19; color: #e6e9ef;
    border: 1px solid #1f2533; border-radius: 10px; padding: 1rem 1.1rem;
    overflow-x: auto; font-size: .84rem; line-height: 1.65;
    font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
    tab-size: 2; }
  pre.code .tok-com { color: #6b7280; font-style: italic; }
  pre.code .tok-str { color: #9ece6a; }
  pre.code .tok-kw  { color: #bb9af7; }
  pre.code .tok-tag { color: #7aa2f7; }
  pre.code .tok-attr{ color: #7dcfff; }
  pre.code .tok-num { color: #ff9e64; }
  pre.code .tok-fn  { color: #7aa2f7; }
  pre.code .tok-punc{ color: #89ddff; }
  .code-copy { position: absolute; top: .5rem; right: .5rem;
    font: inherit; font-size: .72rem; color: #9aa5b8;
    background: #161b27; border: 1px solid #2a3142; border-radius: 6px;
    padding: .2rem .5rem; cursor: pointer; opacity: 0; transition: opacity .12s; }
  pre.code:hover .code-copy { opacity: 1; }
  .code-copy:hover { color: #e6e9ef; border-color: #3a4256; }
  .code-copy[data-done='true'] { color: #9ece6a; border-color: #3d5a3d; }
  `
  const s = document.createElement('style')
  s.textContent = css
  document.head.appendChild(s)
}

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const KW =
  /\b(import|from|export|const|let|var|function|return|default|new|type|interface|as|await|async|if|else|for|while|class|extends|public|private|true|false|null|undefined)\b/g

function highlightLine(line, lang) {
  // Comentários de linha inteira
  if (/^\s*(\/\/|#)/.test(line) && lang !== 'html')
    return `<span class="tok-com">${esc(line)}</span>`
  if (/^\s*---\s*$/.test(line))
    return `<span class="tok-com">${esc(line)}</span>`

  const ph = []
  let s = esc(line)
  const stash = (cls, txt) => {
    ph.push(`<span class="${cls}">${txt}</span>`)
    return ` ${ph.length - 1} `
  }
  // Strings
  s = s.replace(/(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;|'[^']*'|"[^"]*"|`[^`]*`)/g, (m) =>
    stash('tok-str', m),
  )
  if (lang === 'html' || lang === 'astro') {
    s = s.replace(/(&lt;\/?)([\w-]+)/g, (_m, b, t) => b + stash('tok-tag', t))
    s = s.replace(/([\w-]+)(=)/g, (_m, a, e) => stash('tok-attr', a) + e)
  } else {
    s = s.replace(/\/\/[^ ]*$/g, (m) => stash('tok-com', m))
    s = s.replace(KW, (m) => stash('tok-kw', m))
    s = s.replace(/\b(\d+(?:\.\d+)?)\b/g, (m) => stash('tok-num', m))
  }
  return s.replace(/ (\d+) /g, (_m, i) => ph[+i])
}

function highlightCode() {
  document.querySelectorAll('pre.code').forEach((pre) => {
    if (pre.dataset.hl) return
    pre.dataset.hl = '1'
    const lang = pre.dataset.lang || 'txt'
    const raw = pre.textContent.replace(/\s+$/, '')
    pre.innerHTML = raw
      .split('\n')
      .map((l) => highlightLine(l, lang))
      .join('\n')
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'code-copy'
    btn.textContent = 'Copiar'
    btn.addEventListener('click', () => {
      navigator.clipboard?.writeText(raw).then(() => {
        btn.textContent = 'Copiado ✓'
        btn.dataset.done = 'true'
        setTimeout(() => {
          btn.textContent = 'Copiar'
          btn.dataset.done = 'false'
        }, 1600)
      })
    })
    pre.appendChild(btn)
  })
}

injectStyles()
injectCodeStyles()
buildHeader()
buildFooter()
wireTheme()
highlightCode()
