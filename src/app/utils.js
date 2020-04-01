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
        link.style.animation = link.style.animation === '' ? `fadeInLeft .5s ease-out forwards ${i / 5 + 0.4}s` : ''
    })
}

export { activeSidebar }
