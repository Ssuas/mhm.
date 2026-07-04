(function () {
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  var els = document.querySelectorAll(".section, .card, .bio-card, .code-window, .faq-item, .cta")

  if (reduced || !("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("is-visible") })
    return
  }

  els.forEach(function (el) { el.classList.add("reveal") })

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return
      e.target.classList.add("is-visible")
      obs.unobserve(e.target)
    })
  }, { threshold: 0.12 })

  els.forEach(function (el) { obs.observe(el) })
})()

;(function () {
  document.querySelectorAll("[data-discord]").forEach(function (btn) {
    var lbl = btn.querySelector(".copy-label") || btn
    var txt = lbl.textContent

    btn.addEventListener("click", function () {
      var name = btn.getAttribute("data-discord")
      var done = function () {
        lbl.textContent = "copied!"
        setTimeout(function () { lbl.textContent = txt }, 1200)
      }
      navigator.clipboard && navigator.clipboard.writeText
        ? navigator.clipboard.writeText(name).then(done, done)
        : done()
    })
  })
})()

