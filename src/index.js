import './scss/style.scss'
import { activeSidebar, animateCircleBar, animatelinearBar } from './utils/func'
import { SliderEvent } from './utils/animate'
import { ProgressBarTag } from './components/circlebar'

const btnMenu = document.querySelector('.nav-bars')
btnMenu.addEventListener('click', () => {
    activeSidebar('.nav-wrapper', '.nav-link')
})

const slider = new SliderEvent('.slider', '.slide-item')
slider.init()

// Ajout des balises HTML Customises
customElements.define('progress-bar', ProgressBarTag)
document.querySelectorAll('progress-bar[type="circle"]').forEach(item => {
    const canvasElt = item.shadowRoot.querySelector('canvas')
    const options = {
        ctx: canvasElt.getContext('2d'),
        width: canvasElt.width,
        height: canvasElt.height,
        percent: parseInt(item.getAttribute('progress')),
        fps: 4
    }
    animateCircleBar(options)
})

document.querySelectorAll('progress-bar[type="linear"]').forEach(item => {
    const options = {
        progressElt: item.shadowRoot.querySelector('.progress'),
        percent: parseInt(item.getAttribute('progress'))
    }
    animatelinearBar(options)
})
