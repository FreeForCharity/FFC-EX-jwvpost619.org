;(() => {
  const yearNodes = document.querySelectorAll('[data-year]')
  const currentYear = new Date().getFullYear()
  yearNodes.forEach((node) => {
    node.textContent = String(currentYear)
  })

  const navToggle = document.querySelector('[data-nav-toggle]')
  const navPanel = document.querySelector('[data-nav-panel]')

  if (navToggle && navPanel) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true'
      navToggle.setAttribute('aria-expanded', expanded ? 'false' : 'true')
      navPanel.classList.toggle('open', !expanded)
    })

    navPanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navPanel.classList.remove('open')
        navToggle.setAttribute('aria-expanded', 'false')
      })
    })
  }

  const revealTargets = document.querySelectorAll('.reveal')
  if ('IntersectionObserver' in window && revealTargets.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 }
    )

    revealTargets.forEach((target) => observer.observe(target))
  } else {
    revealTargets.forEach((target) => target.classList.add('is-visible'))
  }

  document.querySelectorAll('.faq-item').forEach((item) => {
    const button = item.querySelector('.faq-question')
    const answer = item.querySelector('.faq-answer')

    if (!button || !answer) {
      return
    }

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('open')
      document.querySelectorAll('.faq-item.open').forEach((openItem) => {
        openItem.classList.remove('open')
        const openAnswer = openItem.querySelector('.faq-answer')
        if (openAnswer) {
          openAnswer.style.maxHeight = '0px'
        }
      })

      if (!isOpen) {
        item.classList.add('open')
        answer.style.maxHeight = `${answer.scrollHeight}px`
      }
    })
  })

  const contactForm = document.querySelector('[data-contact-form]')
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault()

      const name = contactForm.querySelector("[name='name']")?.value.trim() || ''
      const email = contactForm.querySelector("[name='email']")?.value.trim() || ''
      const topic = contactForm.querySelector("[name='topic']")?.value.trim() || 'General Inquiry'
      const message = contactForm.querySelector("[name='message']")?.value.trim() || ''

      const subject = encodeURIComponent(`JWV Post 619 Website Contact: ${topic}`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

      window.location.href = `mailto:admin@jwvpost619.org?subject=${subject}&body=${body}`
    })
  }
})()
