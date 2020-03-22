// Dynamisme de la sidebar

const hamburgerBtn = document.querySelector('.nav-bars')
const sidebarElt = document.querySelector('.nav-sidebar')
const linkElts = document.querySelectorAll('.nav-link')

hamburgerBtn.addEventListener('click',activeSidebar)


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

const slideParentElt = document.querySelector('.slides')
// const div = document.querySelector('#about-me > h1')
const slideElt = document.querySelectorAll('.slide')
let moving = false
let init = 0
let currentPosit = null

slideParentElt.addEventListener('pointerdown', (e) =>{
    init = e.pageX
    moving = true
})

slideParentElt.addEventListener('pointermove',(e) =>{

    if (moving) {
        currentPosit = e.pageX
    }
})

slideParentElt.addEventListener('pointerup', (e) =>{
    const diff = currentPosit - init
    if (diff < 0) {
        slideElt.forEach(slideItem =>{
            slideItem.style.transform = `translateX(-100vw)`
        })
    } else {
        slideElt.forEach(slideItem =>{
            slideItem.style.transform = `translateX(0)`
        })
    }
    // console.table(data)
    moving = false
    console.log(diff)
})