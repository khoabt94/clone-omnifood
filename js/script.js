///////////////////////////////////////////////////////
// Selector
const header = document.querySelector('.header')
const hero = document.querySelector('.section-hero')
const navHeight = getComputedStyle(header).height
const openBtn = document.querySelector('.btn-mobile-nav')
const nav = document.querySelector('.nav')


///////////////////////////////////////////////////////
// Function

////////////////////////////////
// Begin <Sticky header>
const stickyFn = entries => {
    const [entry] = entries

    if (!entry.isIntersecting) header.classList.add('sticky')
    else header.classList.remove('sticky')
}

const stickyOpt = {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}`,
}

const stickyObs = new IntersectionObserver(stickyFn, stickyOpt)
stickyObs.observe(hero)

// End <Sticky header>
////////////////////////////////

////////////////////////////////
// Begin <Navbar>

openBtn.addEventListener('click', function(e) {
    e.preventDefault()
    header.classList.toggle('nav__open')

    nav.addEventListener('click', function(e) {
        const target = e.target.closest('.nav__item')

        if (!target) return

        header.classList.remove('nav__open')
    })
})

// End <Navbar>
////////////////////////////////



