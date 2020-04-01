import './scss/style.scss'
import { activeSidebar } from './app/utils'

const btnMenu = document.querySelector('.nav-bars')
btnMenu.addEventListener('click', () => {
    activeSidebar('.nav-wrapper', '.nav-link')
})
