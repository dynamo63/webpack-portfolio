// Dynamisme de la sidebar

const hamburgerBtn = document.querySelector('.nav-bars')
const sidebarElt = document.querySelector('.nav-sidebar')

function activeSidebar() {
    sidebarElt.classList.toggle('nav-active')
}

hamburgerBtn.addEventListener('click',activeSidebar)
