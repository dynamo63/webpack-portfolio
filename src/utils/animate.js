/**
 * Class for animate a slider
 */
class SliderEvent {
    /**
     * Make a Slider
     * @param {string} slideParent - Slide Parent Selector, it's unique
     * @param {string} slideElems - Slide Elements Selector
     */
    constructor (slideParent, slideElems) {
        this.sliderParent = document.querySelector(slideParent)
        this.slideElems = document.querySelectorAll(slideElems)
        this.moving = false
        this.initPosit = null
        this.currentPosit = null
    }

    init () {
        this.sliderParent.addEventListener('pointerdown', this.handlePointerDown.bind(this))
        this.sliderParent.addEventListener('pointermove', this.handlePointerMove.bind(this))
        this.sliderParent.addEventListener('pointerup', this.handlePointerUp.bind(this))
    }

    handlePointerDown (event) {
        this.initPosit = event.pageX
        this.moving = true
    }

    handlePointerMove (event) {
        if (this.moving) {
            this.currentPosit = event.pageX
        }
    }

    /**
     * @returns {void}
     */
    handlePointerUp (event) {
        const diff = this.currentPosit - this.initPosit
        if (diff < 0) {
            this.slideElems.forEach(item => {
                item.style.transform = 'translateX(-100vw)'
            })
        } else {
            this.slideElems.forEach(item => {
                item.style.transform = 'translateX(0)'
            })
        }
        this.moving = false
    }
}

export { SliderEvent }
