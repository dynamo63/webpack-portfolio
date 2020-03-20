// Dynamisme de la sidebar

const hamburgerBtn = document.querySelector('.nav-bars')
const sidebarElt = document.querySelector('.nav-sidebar')
const linkElts = document.querySelectorAll('.nav-link')

/**
 * Active la sidebar et les animations de chaque lien
 */
function activeSidebar() {
    // Toogle class 
    sidebarElt.classList.toggle('nav-active')

    // Animate link
    linkElts.forEach((link,index) =>{
        
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `fadeInLeft .5s forwards ease ${index/6}s`
        }
    })
}

hamburgerBtn.addEventListener('click',activeSidebar)
