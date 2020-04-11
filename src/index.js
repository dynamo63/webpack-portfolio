import './scss/style.scss'
import { activeSidebar } from './utils/func'
import { SliderEvent } from './utils/animate'

const btnMenu = document.querySelector('.nav-bars')
btnMenu.addEventListener('click', () => {
    activeSidebar('.nav-wrapper', '.nav-link')
})

const slider = new SliderEvent('.slider', '.slide-item')
slider.init()
