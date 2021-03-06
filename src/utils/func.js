import { primaryColor } from '$css/variable.scss'

// Nos fonctions utiles

/**
 * Show the sidebar
 * @param {string} wrapper - nav wrapper dissimilated
 * @param {string} links - class links
 * @returns {void}
 */
function activeSidebar (wrapper, links) {
    document.querySelector(wrapper).classList.toggle('nav-active')
    document.querySelectorAll(links).forEach((link, i) => {
        link.style.animation = link.style.animation === '' ? `fadeInLeft .5s ease-out forwards ${i / 6}s` : ''
    })
}

function animateCircleBar ({ ctx, width, height, percent, fps }) {
    const maxDegree = (360 * percent) / 100
    let currentPercent = 0
    let currentDegree = 0
    const arcInterval = setInterval(() => {
        currentDegree += 1
        currentPercent = Math.round((currentDegree / 360) * 100)
        ctx.clearRect(0, 0, 200, 200)
        ctx.beginPath()
        ctx.strokeStyle = primaryColor
        ctx.lineCap = 'round'
        ctx.lineWidth = '7'
        ctx.arc(width / 2, height / 2, 70, 0, (Math.PI / 180) * currentDegree)

        // Percent
        ctx.moveTo(100, 100)
        ctx.font = '40px Poppins'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(`${currentPercent}%`, width / 2, height / 2)
        ctx.stroke()

        // We stop animation When the maxDegree is reached
        if (currentDegree > maxDegree) {
            clearInterval(arcInterval)
        }
    }, fps)
}

/**
 * Animate The Progress Bar Linear
 * @param {Object} linearBar - The Object contain the percent and the div progress element
 * @param {Element} linearBar.progressElt - Element for the progress
 * @param {Number} linearBar.percent - The progress's percent 
 * @returns {void}
 */
function animatelinearBar ({ progressElt, percent }) {
    progressElt.style.backgroundColor = primaryColor
    progressElt.style.transform = `scaleX(${percent / 100})`
}

/**
 * Animate the target element
 * @param {Element} target
 * @returns {void} 
 */
function animate (target) {
    switch (target.getAttribute('data-animation')) {
    case 'default':
        target.style.animation = '1s forwards ease-out fadeInBottom'
        break
    case 'circle-bar': {
        target.style.animation = '1s forwards ease-out fadeInBottom'
        const canvasElt = target.shadowRoot.querySelector('canvas')
        const options = {
            ctx: canvasElt.getContext('2d'),
            width: canvasElt.width,
            height: canvasElt.height,
            percent: parseInt(target.getAttribute('progress')),
            fps: 4
        }
        animateCircleBar(options)
    }
        break
    case 'linear-bar': {
        target.style.animation = '.5s forwards ease-out fadeInBottom'
        const options = {
            progressElt: target.shadowRoot.querySelector('.progress'),
            percent: parseInt(target.getAttribute('progress'))
        }
        animatelinearBar(options)
    }
        break
    default:
        console.error('The attributes data-animation is not defined')
        break
    }
}

export { activeSidebar, animate, animatelinearBar }
