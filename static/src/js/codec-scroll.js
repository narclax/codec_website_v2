/* Codec: scroll suave con inercia (sin dependencias).
   Intercepta la rueda del ratón y anima el desplazamiento con interpolación (lerp).
   Respeta: touch/trackpad nativo del móvil, prefers-reduced-motion, zoom (Ctrl+rueda),
   scroll horizontal, elementos con scroll propio (textarea, select, modales, listas) y el modo editor de Odoo. */
(function () {
  var d = document, w = window;
  if (!w.matchMedia || w.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!w.matchMedia('(pointer: fine)').matches) return;       // solo ratón/trackpad de escritorio

  var EASE = 0.11;                                            // 0.05 más suave y lento · 0.2 más directo
  var STEP = 1;                                               // multiplicador de la distancia por tick
  var tgt = 0, cur = 0, raf = 0;

  function wrapEl() {
    var e = d.getElementById('wrapwrap');
    if (e && /(auto|scroll)/.test(getComputedStyle(e).overflowY) && e.scrollHeight > e.clientHeight + 1) return e;
    return null;                                              // el scroll es el de la ventana
  }
  function pos() { var e = wrapEl(); return e ? e.scrollTop : (w.pageYOffset || d.documentElement.scrollTop); }
  function max() {
    var e = wrapEl();
    return e ? e.scrollHeight - e.clientHeight : d.documentElement.scrollHeight - w.innerHeight;
  }
  function set(y) {
    var e = wrapEl();
    if (e) e.scrollTo({ top: y, left: 0, behavior: 'instant' });
    else w.scrollTo({ top: y, left: 0, behavior: 'instant' }); // 'instant' ignora el scroll-behavior:smooth del CSS
  }
  function editing() {
    var b = d.body;
    return d.documentElement.classList.contains('editor_enable') || (b && (b.classList.contains('editor_enable') || b.classList.contains('o_is_editing')));
  }
  function ownScroll(el) {                                    // ¿hay un contenedor interno que pueda desplazarse?
    var root = wrapEl();
    while (el && el !== d.body && el !== d.documentElement && el !== root) {
      if (el.nodeType === 1) {
        if (/^(TEXTAREA|SELECT)$/.test(el.nodeName) || el.hasAttribute('data-no-smooth')) return true;
        var cs = getComputedStyle(el);
        if (/(auto|scroll)/.test(cs.overflowY) && el.scrollHeight > el.clientHeight + 1) return true;
      }
      el = el.parentNode;
    }
    return false;
  }
  function loop() {
    var m = max();
    tgt = Math.max(0, Math.min(m, tgt));
    cur += (tgt - cur) * EASE;
    if (Math.abs(tgt - cur) < 0.4) { cur = tgt; set(cur); raf = 0; return; }
    set(cur);
    raf = requestAnimationFrame(loop);
  }
  function onWheel(e) {
    if (e.defaultPrevented || e.ctrlKey || e.metaKey || editing()) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;      // scroll horizontal: nativo
    if (ownScroll(e.target)) return;
    var dy = e.deltaY;
    if (e.deltaMode === 1) dy *= 16; else if (e.deltaMode === 2) dy *= w.innerHeight;
    e.preventDefault();
    if (!raf) { cur = tgt = pos(); }
    tgt += dy * STEP;
    if (!raf) raf = requestAnimationFrame(loop);
  }
  function sync() { if (!raf) { cur = tgt = pos(); } }        // teclado, anclas o scroll nativo: mantener sincronía

  w.addEventListener('wheel', onWheel, { passive: false });
  w.addEventListener('scroll', sync, { passive: true });
  d.addEventListener('scroll', sync, { passive: true, capture: true });
  // si el usuario arrastra la barra de scroll o pulsa una tecla durante la animación, cede el control
  ['mousedown', 'keydown', 'touchstart'].forEach(function (ev) {
    w.addEventListener(ev, function () { if (raf) { cancelAnimationFrame(raf); raf = 0; cur = tgt = pos(); } }, { passive: true });
  });
})();
