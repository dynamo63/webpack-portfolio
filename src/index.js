import './scss/style.scss'
import { breakpointTablet } from '$css/variable.scss'
import { activeSidebar, animate, animatelinearBar } from './utils/func'
import { SliderEvent } from './utils/animate'
import { ProgressBarTag } from './components/circlebar'

document.querySelector('.nav-bars').addEventListener('click', () => {
    activeSidebar('.nav-wrapper', '.nav-link')
})

const slider = new SliderEvent('.slider', '.slide-item')

if (document.body.clientWidth < breakpointTablet) {
    slider.init()
    const observerSlide = new IntersectionObserver((elems, observer) => {
        if (elems[0].isIntersecting) {
            elems[0].target.classList.add('active')
            setTimeout(() => {
                elems[0].target.classList.remove('active')
            }, 3000)
            observer.unobserve(elems[0].target)
        }
    }, { threshold: 0.8 })
    observerSlide.observe(document.querySelector('.show-direction'))
}

// Ajout des balises HTML Customises
customElements.define('progress-bar', ProgressBarTag)

const observerData = new IntersectionObserver((elems, observer) => {
    elems.forEach(elem => {
        if (elem.isIntersecting) {
            animate(elem.target)
            observer.unobserve(elem.target)
        }
    })
}, { threshold: 0.2 })

document.querySelectorAll('[data-animation]').forEach(item => {
    observerData.observe(item)
})

if (navigator.userAgent.toLowerCase().includes('firefox')) {
    document.querySelectorAll('progress-bar[type=linear]').forEach(item => {
        item.removeAttribute('data-animation')
        const options = {
            progressElt: item.shadowRoot.querySelector('.progress'),
            percent: parseInt(item.getAttribute('progress'))
        }
        animatelinearBar(options)
    })
}
