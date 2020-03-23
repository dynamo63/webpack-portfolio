import Sidebar from './utils/menu.js'
import {SliderEvent} from './utils/animate.js'

new Sidebar('.nav-bars','.nav-sidebar','.nav-link')

const slider = new SliderEvent()
const slideIndicationElt = document.querySelector('.slide-show__direction')
const profil = document.querySelector('.profil-img')


const observerIndicator = new IntersectionObserver((elements, observer) =>{

    if (elements[0].isIntersecting) {
        slideIndicationElt.style.visibility = 'visible'
        slideIndicationElt.querySelectorAll('i').forEach((arrow,index) =>{
            arrow.style.animation = `fadeOut-${index + 1} .7s ease-in 2`
        })
        
        setTimeout(function(){
            slideIndicationElt.style.visibility = 'hidden'
            observer.unobserve(profil)
        },1000)
    }
    
},{threshold:.9})

observerIndicator.observe(profil)



const observerAnimation = new IntersectionObserver((elements, observer) =>{
    elements.forEach(element =>{
        if (element.isIntersecting) {
            element.target.style.animation = `fadeInBottom .5s ease-in forwards`
            observer.unobserve(element.target)
        }
    })
},{threshold:.2})

document.querySelectorAll('[data-animate="fadeInBottom"').forEach((element) =>{
    observerAnimation.observe(element)
})