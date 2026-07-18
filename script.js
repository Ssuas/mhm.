// clipboard-copy for any element with data-discord — swaps its .copy-label
// text briefly to confirm the copy, then reverts it

document.querySelectorAll('[data-discord]').forEach(btn => {
  const label = btn.querySelector('.copy-label')
  if (!label) return

  const idle = label.textContent

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.discord)
      label.textContent = 'copied'
    } catch {
      label.textContent = 'copy failed'
    }
    setTimeout(() => { label.textContent = idle }, 1400)
  })
})
