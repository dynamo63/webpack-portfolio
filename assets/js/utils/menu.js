/**
 * This function takes Two DOM Element such as the nav wrapper and links
 * @param {Element} sidebar - Sidebar is the nav wrapper 
 * @param {Element} links - nav's links
 * @returns {void}
 */
function activeSidebar(sidebar , links) {
    // Toogle class 
    sidebar.classList.toggle('nav-active')

    // Animate link
    links.forEach((link,index) =>{

        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `fadeInLeft .5s forwards ease ${index/6}s`
        }
    })
}

export default class SideBar{

    /**
     * Take the selector of sidebar
     * @param {string} navButton - Hamburger menu selector
     * @param {string} navWrapper - Navbar Wrapper selector
     * @param {string} navLinks - Nav Links selector
     */
    constructor(navButton,navWrapper,navLinks){
        this.navbtn = document.querySelector(navButton)
        this.sidebar = document.querySelector(navWrapper)
        this.links = document.querySelectorAll(navLinks)

        this.navbtn.addEventListener('click',this.handleClick)
    }

    handleClick = (e) => {
        activeSidebar(this.sidebar,this.links)
    }

}